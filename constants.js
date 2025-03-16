export const CHAIN_CONFIGS = {
  1: {
    STAKE_REGISTRY_ADDR: "0x8D4DA67929Cfa5a0Eab573Ea57225b1D8286742A",
    SERVICE_MANAGER_ADDR: "0x5Bf17dFaA1B76Bb6C5C47F568636877F94C09b65",
    RPC_URL: process.env.ETH_RPC_URL || "https://eth.llamarpc.com",
  },
  17000: {
    STAKE_REGISTRY_ADDR: "0x6c123b6f0c045fbb0abfAD987EEE7AEcd8cB0466",
    SERVICE_MANAGER_ADDR: "0x2ca988FdDC0F1A73b43B5343946AB03aD059D1c1",
    RPC_URL:
      process.env.HOLESKY_RPC_URL ||
      "https://ethereum-holesky-rpc.publicnode.com",
  },
};
