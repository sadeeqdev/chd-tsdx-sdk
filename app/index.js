import { Chedda } from "../dist/index.js";
import { contractAddress, address } from "./constants.js";
import { environment } from "./enviroment.js";
import { MockSigner } from "./mockSigner.js";

const provider = environment.webSocketUrl;
const signer = new MockSigner(address);
const chedda = new Chedda(provider);
const vault = chedda.vault(contractAddress, signer);

console.log(await vault.utilization());
