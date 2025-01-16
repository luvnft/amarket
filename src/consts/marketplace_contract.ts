import type { Chain } from "thirdweb";
export { sepolia, base, polygonAmoy } from "thirdweb/chains"; 

type MarketplaceContract = {
  address: string;
  chain: Chain;
};

/**
 * You need a marketplace contract on each of the chain you want to support
 * Only list one marketplace contract address for each chain
 */
export const MARKETPLACE_CONTRACTS: MarketplaceContract[] = [
  {
    address: "0x8C1D464B385A2B7EAa80dcAAD66DD8BC0256e717", // Avalanche Fuji contract
    chain: avalancheFuji,
  },
  {
    address: "0x571B773F1e4A7C080b51C36f37e06f371C515569", // Polygon Amoy contract
    chain: polygonAmoy,
  },
  {
    address: "0xe0eFD6fb388405b67b3E9FaFc02649c70E749f03", // Sepolia contract
    chain: sepolia,
  },
  {
    address: "0xc75426805Abc184b6215F9EA9de31888B51af020", // Replace with your actual Base contract address
    chain: base, // Adding Base network contract
  },
];
