import { ethers, Signer } from "ethers";
import { PriceOracle } from "./priceOracle";
import { TokenService } from "./token";
import { CheddaVault } from "./vault";

export class Chedda {
  provider: ethers.providers.WebSocketProvider;

  constructor(provider: string) {
    this.provider = new ethers.providers.WebSocketProvider(provider);
  }

  vault(signer?: Signer) {
    return new CheddaVault(this.provider, signer);
  }

  token(signer?: Signer) {
    return new TokenService(this.provider, signer);
  }

  priceOracle() {
    return new PriceOracle(this.provider);
  }
}
