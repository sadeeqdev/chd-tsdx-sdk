export const address = "0xB27595Bedd063935ca146EB46ee7CaE40F696f7E";

export const environment = {
  production: false,
  environmentName: "Arbitrum Testnet",
  identifier: "Arbitrum",
  jsonRpcUrl:
    "https://arb-goerli.g.alchemy.com/v2/MjKCCMegGWN3PDm1Kt2vCAXhoKQd0XxR",
  webSocketUrl:
    "wss://arb-goerli.g.alchemy.com/v2/MjKCCMegGWN3PDm1Kt2vCAXhoKQd0XxR",
  config: {
    contracts: {
      ChainlinkPriceConsumer: "",
      CheddaMarketExplorer: "",
      CheddaBaseTokenVault: "",
      PriceFeed: "0x0d421b53964856364358D154fAdC0AF0C7B6a6D1",
      Chedda: "0x7f4329c822ee86d713140923153eEdD925673759",
      xChedda: "0x14d8C077FbFB0Bb9657C3E4D4f8E20eC7E1C7D6B",
      veChedda: "0xBC03E7E93710b2efFfFaeec29Dc3D325BD89a8dB",
      USDC: "0x4f8E5950F28299414bb6Be72937c6491c0a3BAd8",
      DAI: "0xF359A9c19CE5AB960d9c57977831f41838A87801",
      FRAX: "0xEDE0D9d8afB5dF59216C0eC19e5a79de2EcC7552",
      UXD: "0xdF8b23Ce429a83d29fad3CB21Ff801da75f95415",
      NFT: "0xA36d30A62Cf2E1D4731A32DFD3d468514FFA99d9",
      mUSDC: "",
      WrappedNative: "0x364062f04922CccB89bbbE1fd03b735D09A50662",
      Faucet: "0x0A5Fe3dd684B1aA04d156d42C259a9feF887255e",
      GaugeController: "0xE7353D33D8b92446789cF60604D66F1044acB89f",
    },
    networkParams: {
      chainId: "0x66eed",
      chainName: "Arbitrum Goerli Testnet",
      nativeCurrency: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18,
        image: "",
      },
      rpcUrls: [
        "https://arb-goerli.g.alchemy.com/v2/MjKCCMegGWN3PDm1Kt2vCAXhoKQd0XxR/",
      ],
      blockExplorerUrls: ["https://goerli.arbiscan.io/"],
    },
    pools: [
      {
        name: "USDC/WETH Pool",
        address: "0xB27595Bedd063935ca146EB46ee7CaE40F696f7E",
        asset: {
          name: "USD Coin",
          symbol: "USDC",
          address: "0x4f8E5950F28299414bb6Be72937c6491c0a3BAd8",
          logo: "/assets/logos/usdc-logo.png",
        },
        collateral: [
          {
            name: "Wrapped ETH",
            symbol: "WETH",
            address: "0x364062f04922CccB89bbbE1fd03b735D09A50662",
            logo: "/assets/logos/ethereum-logo.png",
          },
        ],
      },
      {
        name: "DAI/WETH Pool",
        address: "0x1c89B84C5932badDc3c3889B1b0B1666cc53eFAB",
        asset: {
          name: "Dai Stalbcoin",
          symbol: "DAI",
          address: "0xF359A9c19CE5AB960d9c57977831f41838A87801",
          logo: "/assets/logos/dai-logo.png",
        },
        collateral: [
          {
            name: "Wrapped ETH",
            symbol: "WETH",
            address: "0x364062f04922CccB89bbbE1fd03b735D09A50662",
            logo: "/assets/logos/ethereum-logo.png",
          },
        ],
      },
      {
        name: "UXD/WETH Pool",
        address: "0x41EBd597aCf37F7bC4e70BC49241fF16ED650189",
        asset: {
          name: "UXD",
          symbol: "UXD",
          address: "0xdF8b23Ce429a83d29fad3CB21Ff801da75f95415",
          logo: "/assets/logos/uxd-logo.png",
        },
        collateral: [
          {
            name: "Wrapped ETH",
            symbol: "WETH",
            address: "0x364062f04922CccB89bbbE1fd03b735D09A50662",
            logo: "/assets/logos/ethereum-logo.png",
          },
        ],
      },
      {
        name: "Native Asset Pool",
        address: "0xd663fA792df7E9D749F20c9c2F6D29FF4957Cae8",
        asset: {
          name: "Wrapped ETH",
          symbol: "WETH",
          address: "0x364062f04922CccB89bbbE1fd03b735D09A50662",
          logo: "/assets/logos/ethereum-logo.png",
        },
        collateral: [
          {
            name: "USD Coin",
            symbol: "USCD.c",
            address: "0x4f8E5950F28299414bb6Be72937c6491c0a3BAd8",
            logo: "/assets/logos/usdc-logo.png",
          },
          {
            name: "Dai Stalbcoin",
            symbol: "DAI",
            address: "0xF359A9c19CE5AB960d9c57977831f41838A87801",
            logo: "/assets/logos/dai-logo.png",
          },
          {
            name: "Frax",
            symbol: "FRAX",
            address: "0xEDE0D9d8afB5dF59216C0eC19e5a79de2EcC7552",
            logo: "/assets/logos/frax-logo.png",
          },
        ],
      },
      {
        name: "USDC DeFi Pool",
        address: "0xf62b9B1171feF6599FcE3fE09569B5ABc4d66912",
        asset: {
          name: "USD Coin",
          symbol: "USCD.c",
          address: "0x4f8E5950F28299414bb6Be72937c6491c0a3BAd8",
          logo: "/assets/logos/usdc-logo.png",
        },
        collateral: [
          {
            name: "Radiant",
            symbol: "RDNT",
            address: "0x31F71e2FDA3ceE51721Fe677Eb5920372A58f091",
            logo: "/assets/logos/radiant-logo.png",
          },
          {
            name: "Uniswap",
            symbol: "UNI",
            address: "0x8792894778B5D3df33fc9564d9f6238B79c05661",
            logo: "/assets/logos/uniswap-logo.png",
          },
          {
            name: "AAVE",
            symbol: "AAVE",
            address: "0x247f60e4435881018a1B19eB070A09550b73612E",
            logo: "/assets/logos/aave-logo.png",
          },
          {
            name: "GMX",
            symbol: "GMX",
            address: "0xcbd5BF9E84DA3F4CB3A78B5138385805CeaAB69D",
            logo: "/assets/logos/gmx-logo.png",
            isNFT: true,
          },
        ],
        stats: {},
      },
    ],
    faucets: [
      {
        name: "Arbitrum Goerli Faucet",
        logo: "",
        url: "https://goerlifaucet.com/",
      },
    ],
    ui: {
      chainName: "Arbitrum",
      logo: "/assets/logos/arbitrum-logo.png",
      txUrlPrefix: "https://goerli.arbiscan.io/tx/",
    },
  },
};
