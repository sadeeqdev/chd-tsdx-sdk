export const mockedDepositReturnValue = {
  type: 2,
  chainId: 421613,
  nonce: 56,
  maxPriorityFeePerGas: { _hex: "0x9502f900", _isBigNumber: true },
  maxFeePerGas: { _hex: "0xa0eebb00", _isBigNumber: true },
  gasPrice: null,
  gasLimit: { _hex: "0x014e47", _isBigNumber: true },
  to: "0xB27595Bedd063935ca146EB46ee7CaE40F696f7E",
  value: { _hex: "0x00", _isBigNumber: true },
  data:
    "0x6e553f650000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000000000000000003",
  accessList: [],
  hash: "0x7bbba3bb500ececf2beed8b3201bff7b2be4e1b8364150d67917b490777f4517",
  v: 1,
  r: "0xf594da303aff1a636f6d249b20f7bb89fb940c8e8fba758c589ddc3153edb829",
  s: "0x59bd81d1f160892c63a409cbc629c91197af911fbc51d983c7f184a7d4b65720",
  from: "0xF7f21E2f2Da95B1481cb1254ea9BCBc0A124C175",
  confirmations: 0,
  wait: jest.fn(), // You can mock functions as well
};
