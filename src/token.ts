import { BigNumber, ethers, Contract, Signer } from "ethers";

export class TokenService {
  private provider: ethers.providers.WebSocketProvider;
  private signer: Signer;

  constructor(provider: ethers.providers.WebSocketProvider, signer: Signer) {
    this.provider = provider;
    this.signer = signer;
  }

  async name(contract: Contract): Promise<string> {
    return await contract.name();
  }

  async symbol(contract: Contract): Promise<string> {
    return await contract.symbol();
  }

  async approve(contract: Contract, spender: string, amount: BigNumber) {
    if (contract.isNFT) {
      await contract.connect(this.signer).setApprovalForAll(spender, amount);
    } else {
      await contract.connect(this.signer).approve(spender, amount);
    }
  }

  async allowance(
    contract: Contract,
    account: string,
    spender: string
  ): Promise<BigNumber> {
    if (contract.isNFT) {
      return await contract.isApprovedForAll(account, spender);
    } else {
      return await contract.allowance(account, spender);
    }
  }

  async balanceOf(contract: Contract, account: string): Promise<BigNumber> {
    return await contract.balanceOf(account);
  }

  async ownedTokens(contract: Contract, account: string): Promise<string[]> {
    return (await contract.ownedTokens(account)).map((t) => t.toString());
  }

  async transfer(contract: Contract, to: string, amount: BigNumber) {
    await contract.connect(this.signer).transfer(to, amount);
  }

  async totalSupply(contract: Contract): Promise<BigNumber> {
    return await contract.totalSupply();
  }

  contractAt(address: string, abi: ethers.ContractInterface): Contract {
    return new ethers.Contract(address, abi, this.provider);
  }
}
