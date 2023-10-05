import { ethers, Signer } from "ethers";
import { address, environment, private_key } from "./mocks";
import { mockedDepositReturnValue } from "./mocks/vaultmocks";
import { CheddaVault } from "./vault";

// Mock the depositAsset method
const mockDeposit = jest.fn();
const mockApprove = jest.fn();
const mockAddCollateral = jest.fn();

jest.mock("./vault", () => {
  return {
    CheddaVault: jest.fn().mockImplementation(() => {
      return {
        depositAsset: mockDeposit,
        approve: mockApprove,
        addCollateral: mockAddCollateral,
      };
    }),
  };
});

describe("Chedda vault", () => {
  let cheddaVault: CheddaVault;
  let provider: ethers.providers.WebSocketProvider;
  let signer: Signer;

  beforeEach(() => {
    jest.setTimeout(10000);

    provider = new ethers.providers.WebSocketProvider(environment.webSocketUrl);
    signer = new ethers.Wallet(private_key, provider);
    cheddaVault = new CheddaVault(provider, address, signer);
  });

  afterEach(() => {
    provider.destroy();
    jest.clearAllMocks();
  });

  it("should deposit asset", () => {
    const amount = ethers.utils.parseUnits("1");
    const toAccount = "0x0000000000000000000000000000000000000003";

    // Mock the behavior of the 'depositAsset' method

    mockAddCollateral.mockReturnValue(mockedDepositReturnValue);
    cheddaVault.addCollateral(toAccount, amount);

    // You can also assert how many tid87kxy6tbrvdecstv5x6fbes the mock was called
    expect(mockAddCollateral).toHaveBeenCalledTimes(1);
  });

  it("should approve transactions", async () => {
    const amount = ethers.utils.parseEther("1");
    const spender = "0x364062f04922CccB89bbbE1fd03b735D09A50662";

    await cheddaVault.approve(spender, amount);
    expect(mockApprove).toHaveBeenCalledTimes(1);
  });
});
