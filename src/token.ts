import { BigNumber, ethers, Contract, Signer } from "ethers";
import ERC20 from "./artifacts/ERC20.json";
import MarketNFT from "./artifacts/MarketNFT.json";

export class TokenService {
  private provider: ethers.providers.WebSocketProvider;
  private signer: Signer;
  public contract: Contract;

  constructor(
    provider: ethers.providers.WebSocketProvider,
    address: string,
    signer: Signer
  ) {
    this.provider = provider;
    this.signer = signer;
    this.contract = this.contractAt(address, false);
  }

  async name(): Promise<string> {
    return await this.contract.name();
  }

  async symbol(): Promise<string> {
    return await this.contract.symbol();
  }

  async approve(spender: string, amount: BigNumber) {
    if (this.contract.isNFT) {
      await this.contract
        .connect(this.signer)
        .setApprovalForAll(spender, amount);
    } else {
      await this.contract.connect(this.signer).approve(spender, amount);
    }
  }

  async allowance(account: string, spender: string): Promise<BigNumber> {
    if (this.contract.isNFT) {
      return await this.contract.isApprovedForAll(account, spender);
    } else {
      return await this.contract.allowance(account, spender);
    }
  }

  async balanceOf(account: string): Promise<BigNumber> {
    return await this.contract.balanceOf(account);
  }

  async ownedTokens(account: string): Promise<string[]> {
    return (await this.contract.ownedTokens(account)).map((t: any) =>
      t.toString()
    );
  }

  async transfer(to: string, amount: BigNumber) {
    await this.contract.connect(this.signer).transfer(to, amount);
  }

  async totalSupply(): Promise<BigNumber> {
    return await this.contract.totalSupply();
  }

  contractAt(address: string, isNFT: boolean): Contract {
    let abi: ethers.ContractInterface;
    if (isNFT) {
      abi = MarketNFT.abi;
    } else {
      abi = ERC20.abi;
    }
    return new ethers.Contract(address, abi, this.provider);
  }
}
