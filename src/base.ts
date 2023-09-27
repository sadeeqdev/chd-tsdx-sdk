import { ethers, Signer } from "ethers";
import { PriceOracle } from "./priceOracle";
import { TokenService } from "./token";
import { CheddaVault } from "./vault";

export class Chedda {
  provider: ethers.providers.WebSocketProvider;

  constructor(provider: string) {
    this.provider = new ethers.providers.WebSocketProvider(provider);
  }

  vault(address: string, signer: Signer) {
    return new CheddaVault(this.provider, address, signer);
  }

  token(address: string, signer: Signer) {
    return new TokenService(this.provider, address, signer);
  }

  priceOracle() {
    return new PriceOracle(this.provider);
  }
}
