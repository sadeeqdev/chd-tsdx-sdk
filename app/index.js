import { ethers } from "ethers";
import { Chedda } from "../dist/index.js";
import { contractAddress, address, private_key } from "./constants.js";
import { environment } from "./enviroment.js";

const provider = environment.webSocketUrl;
const chedda = new Chedda(provider);

const testProvider = new ethers.providers.WebSocketProvider(
  environment.webSocketUrl
);
const signer = new ethers.Wallet(private_key, testProvider);

const toAccount = "0x0000000000000000000000000000000000000003";

const vault = chedda.vault(contractAddress, signer);
const result = await vault.depositAsset("1000000000000000000", toAccount);

console.log("result", result);
