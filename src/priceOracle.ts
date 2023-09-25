import { BigNumber, ethers, Contract } from "ethers";

export class PriceOracle {
  oracleContract: Contract;
  provider: ethers.providers.WebSocketProvider;

  constructor(provider: ethers.providers.WebSocketProvider) {
    this.provider = provider;
  }

  async getAssetPrice(
    MultiAssetPriceOracle: { abi: ethers.ContractInterface },
    priceFeedAddress: string,
    address: string
  ): Promise<BigNumber> {
    const priceFeedAbi = MultiAssetPriceOracle.abi;
    this.oracleContract = new ethers.Contract(
      priceFeedAddress,
      priceFeedAbi,
      this.provider
    );
    return await this.oracleContract.readPrice(address, 1);
  }
}
