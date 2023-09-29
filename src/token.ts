import { BigNumber, ethers, Contract, Signer } from "ethers";
import ERC20 from "./artifacts/ERC20.json";
import MarketNFT from "./artifacts/MarketNFT.json";

export class TokenService {
  public contract!: Contract;

  constructor(
    private provider: ethers.providers.WebSocketProvider,
    private address: string,
    private signer: Signer
  ) {
    this.initiateContract();
  }

  async name(): Promise<string> {
    try {
      return await this.contract.name();
    } catch (error) {
      console.error("Error in name:", error);
      throw error;
    }
  }

  async symbol(): Promise<string> {
    try {
      return await this.contract.symbol();
    } catch (error) {
      console.error("Error in symbol:", error);
      throw error;
    }
  }

  async approve(spender: string, amount: BigNumber) {
    try {
      if (this.contract.isNFT) {
        await this.contract
          .connect(this.signer)
          .setApprovalForAll(spender, amount);
      } else {
        await this.contract.connect(this.signer).approve(spender, amount);
      }
    } catch (error) {
      console.error("Error in approve:", error);
      throw error;
    }
  }

  async allowance(account: string, spender: string): Promise<BigNumber> {
    try {
      if (this.contract.isNFT) {
        return await this.contract.isApprovedForAll(account, spender);
      } else {
        return await this.contract.allowance(account, spender);
      }
    } catch (error) {
      console.error("Error in allowance:", error);
      throw error;
    }
  }

  async balanceOf(account: string): Promise<BigNumber> {
    try {
      return await this.contract.balanceOf(account);
    } catch (error) {
      console.error("Error in balanceOf:", error);
      throw error;
    }
  }

  async ownedTokens(account: string): Promise<string[]> {
    try {
      return (await this.contract.ownedTokens(account)).map((t: any) =>
        t.toString()
      );
    } catch (error) {
      console.error("Error in ownedTokens:", error);
      throw error;
    }
  }

  async transfer(to: string, amount: BigNumber) {
    try {
      await this.contract.connect(this.signer).transfer(to, amount);
    } catch (error) {
      console.error("Error in transfer:", error);
      throw error;
    }
  }

  async totalSupply(): Promise<BigNumber> {
    try {
      return await this.contract.totalSupply();
    } catch (error) {
      console.error("Error in totalSupply:", error);
      throw error;
    }
  }

  contractAt(address: string, isNFT: boolean = false) {
    let abi: ethers.ContractInterface;
    if (isNFT) {
      abi = MarketNFT.abi;
    } else {
      abi = ERC20.abi;
    }
    const tokenContract = new ethers.Contract(address, abi, this.provider);
    this.contract = tokenContract;
  }

  initiateContract(isNFT: boolean = false) {
    let abi: ethers.ContractInterface;
    if (isNFT) {
      abi = MarketNFT.abi;
    } else {
      abi = ERC20.abi;
    }

    if (!this.address || !this.provider) {
      throw new Error("Missing required data for contract initiation.");
    }

    this.contract = new ethers.Contract(this.address, abi, this.provider);
  }
}
