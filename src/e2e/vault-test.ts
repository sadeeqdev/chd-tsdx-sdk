import { ethers, Contract, Signer } from "ethers";
import { CheddaVault } from "../vault";
import { address, environment } from "../mocks";
import { randomBytes } from "ethers/lib/utils";

describe("CheddaVault", () => {
  let cheddaVault: CheddaVault;
  let mockProvider: ethers.providers.WebSocketProvider;
  let mockSigner: Signer;

  beforeEach(() => {
    jest.setTimeout(10000);

    mockProvider = new ethers.providers.WebSocketProvider(
      environment.webSocketUrl
    );
    mockSigner = new ethers.Wallet(randomBytes(32), mockProvider);
    cheddaVault = new CheddaVault(mockProvider, address, mockSigner);
  });

  afterEach(() => {
    mockProvider.destroy();
  });

  it("should initialize contract", () => {
    expect(cheddaVault.contract).toBeInstanceOf(Contract);
  });

  it("should deposit asset", async () => {
    const amount = ethers.utils.parseEther("1");
    const toAccount = "0x0000000000000000000000000000000000000003";

    const result = await cheddaVault.depositAsset(amount, toAccount);
    const receipt = await result.wait();

    expect(result).toBeDefined();
    expect(receipt.transactionIndex).toBe(1);
  });

  it("should approve transactions", async () => {
    const amount = ethers.utils.parseEther("1");
    const spender = "0x364062f04922CccB89bbbE1fd03b735D09A50662";

    await cheddaVault.approve(spender, amount);
  });

  it("should add collateral", async () => {
    const amount = ethers.utils.parseEther("1");
    const token = "0x364062f04922CccB89bbbE1fd03b735D09A50662";

    const result = await cheddaVault.addCollateral(token, amount);
    const receipt = await result.wait();

    expect(result).toBeDefined();
    expect(receipt.transactionIndex).toBe(1);
  });
});
