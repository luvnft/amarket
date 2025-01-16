import type { Chain } from "thirdweb";
import { avalancheFuji, base, polygonAmoy } from "./chains";

export type NftContract = {
  address: string;
  chain: Chain;
  type: "ERC1155" | "ERC721";

  title?: string;
  description?: string;
  thumbnailUrl?: string;
  slug?: string;
};

/**
 * Below is a list of all NFT contracts supported by your marketplace(s)
 * This is of course hard-coded for demo purpose
 *
 * In reality, the list should be dynamically fetched from your own data source
 */
export const NFT_CONTRACTS: NftContract[] = [
  {
    address: "0xc75426805Abc184b6215F9EA9de31888B51af020",
    chain: polygonAmoy,
    title: "Web5 Tribe",
    thumbnailUrl:
      "https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/Qmbm8m4d8D98GiLmoH3otUor6yxiXqYH5xQQqtfanKQiUp/photo-output%2032.JPEG",
    type: "ERC721",
  },
  {
    address: "0x5405242c013203FF278c02B1e0AA102Fff49C0cd",
    chain: base,
    title: "Orange Food Stamp AD",
    thumbnailUrl:
      "https://bafkreiemh6ezbhhfzbn32xsuyd4cvhdzh55hccnyxyt5bnhehjjxmi6hwu.ipfs.dweb.link/",
    slug: "Orange-Food-Stamp",
    type: "ERC721",
  },

  {
    address: "0x78C9d5e3479aD27c4869aF9E1922C6fFb5829Ac8",
    chain: polygonAmoy,
    title: "DR MLK DRIVE",
    description: "",
    thumbnailUrl:
      "https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/QmbvWQPtkfkQ9r4FqsTyz6T4t9yRLmyJ6ihCP2BJYQJDNq/MLK%201080.jpg",
    slug: "dr-mlk-drive",
    type: "ERC721",
  },
  {
    address: "0xFfad5A63E1Ed90DaC920A11340f9DfBc0ed3d3ee",
    chain: base,
    title: "ATL5D AD",
    thumbnailUrl:
      "https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/QmWoGv814suM7Z2vvkDLE4dHsERqTPnAKaLHFnSUWmhjmB/0.jpg",
    slug: "atl5d",
    type: "ERC721",
  },
  {
    address: "0x71d8395022098505909A7615EF6207c8fc3E5b12",
    chain: polygonAmoy,
    title: "NFT RENT AD",
    thumbnailUrl:
      "https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/QmbqTnGCsydnAXSiqFVomcYtBFNybVbh9EzmwA4T7R2mqD/Haus.jpg",
    type: "ERC721",
  },
  {
    address: "0x540713d47c820484cF5eAEE19B3c6131c99ec161",
    chain: avalancheFuji,
    title: "Hair Estate AD",
    thumbnailUrl:
      "https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/QmeV7FZtureGpVP2nMNPuHoiE4znk7i2PphLXJqskvYrgY/0.jpg",
    type: "ERC1155",
  },
];
