import { Chedda } from "../dist/index.js";
import CheddaBaseTokenVault from "./CheddaBaseTokenVault.json" assert { type: "json" };
import { environment } from "./enviroment.js";

const provider = environment.webSocketUrl;
const chedda = new Chedda(provider);
const vault = chedda.vault();


console.log(
  vault.contractAt(
    "0xB27595Bedd063935ca146EB46ee7CaE40F696f7E",
    CheddaBaseTokenVault.abi

  )
);
