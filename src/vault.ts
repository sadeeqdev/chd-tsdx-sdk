import { BigNumber, Contract, ethers, Signer } from "ethers";
import CheddaBaseTokenVault from "./artifacts/CheddaBaseTokenVault.json";

export class CheddaVault {
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
    this.contract = this.contractAt(address);
  }

  async depositAsset(amount: BigNumber, toAccount: string) {
    return await this.contract.connect(this.signer).deposit(amount, toAccount);
  }

  async redeem(amount: BigNumber, toAccount: string) {
    return await this.contract
      .connect(this.signer)
      .redeem(amount, toAccount, toAccount);
  }

  async addCollateral(token: string, amount: BigNumber) {
    return await this.contract
      .connect(this.signer)
      .addCollateral(token, amount);
  }

  async removeCollateral(token: string, amount: BigNumber) {
    return await this.contract
      .connect(this.signer)
      .removeCollateral(token, amount);
  }

  async addCollateral721(token: string, tokenIds: string[]) {
    return await this.contract
      .connect(this.signer)
      .addCollateral721(token, tokenIds);
  }

  async removeCollateral721(token: string, tokenIds: string[]) {
    return await this.contract
      .connect(this.signer)
      .removeCollateral721(token, tokenIds);
  }

  async accountCollateralTokenIds(account: string, token: string) {
    return await this.contract.accountCollateralTokenIds(account, token);
  }

  async borrow(amount: BigNumber) {
    return await this.contract.connect(this.signer).take(amount);
  }

  async repay(amount: BigNumber) {
    return await this.contract.connect(this.signer).putAmount(amount);
  }

  async collateral(account: string, token: string): Promise<any> {
    return await this.contract.accountCollateral(account, token);
  }

  async totalAssets(): Promise<BigNumber> {
    return await this.contract.totalAssets();
  }

  async collateralAmounts() {
    return await this.contract.collateralAmounts();
  }

  async utilization(): Promise<BigNumber> {
    return await this.contract.utilization();
  }

  async totalAccountCollateralValue(account: string): Promise<BigNumber> {
    return await this.contract.totalAccountCollateralValue(account);
  }

  async depositApr(): Promise<BigNumber> {
    return await this.contract.depositApr();
  }

  async borrowApr(): Promise<BigNumber> {
    return await this.contract.borrowApr();
  }

  async rewardsApr(): Promise<BigNumber> {
    return await this.contract.rewardsApr();
  }

  async getVaultStats() {
    return await this.contract.getVaultStats();
  }

  // ERC20
  async approve(spender: string, amount: BigNumber) {
    await this.contract.connect(this.signer).approve(spender, amount);
  }

  async allowance(account: string, spender: string): Promise<BigNumber> {
    return await this.contract.allowance(account, spender);
  }

  async balanceOf(account: string): Promise<BigNumber> {
    return await this.contract.balanceOf(account);
  }

  async transfer(to: string, amount: BigNumber) {
    await this.contract.connect(this.signer).transfer(to, amount);
  }

  async totalSupply(): Promise<BigNumber> {
    return await this.contract.totalSupply();
  }

  async gauge(): Promise<string> {
    return await this.contract.gauge();
  }

  async accountPendingAmount(account: string): Promise<BigNumber> {
    return await this.contract.accountPendingAmount(account);
  }

  async getVaultContract(address: string) {
    return await this.contractAt(address);
  }

  contractAt(address: string) {
    return new ethers.Contract(
      address,
      CheddaBaseTokenVault.abi,
      this.provider
    );
  }
}
