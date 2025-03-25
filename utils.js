import { ethers, utils } from "ethers";

export const timeout = (ms) =>
  new Promise((resolve, reject) => setTimeout(resolve, ms));

export async function sendContractCall(
  contract,
  method,
  params,
  pkWallet,
  ethHttpClient
) {
  const web3 = ethHttpClient;

  const contractMethod = contract.methods[method](...params);
  const gasPrice = await web3.eth.getGasPrice();

  // const gasLimit = await contractMethod.estimateGas({ from: pkWallet.address });

  const txParams = {
    data: contractMethod.encodeABI(),
    from: pkWallet.address,
    to: contract.options.address,
    gasPrice: gasPrice,
    gas: 1000000,
  };

  const signedTx = await web3.eth.accounts.signTransaction(
    txParams,
    pkWallet.privateKey
  );

  return await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
}

export function ethersSign(privateKey, signingHash) {
  const wallet = new ethers.Wallet(privateKey);
  const signature = wallet
    ._signingKey()
    .signDigest(utils.arrayify(signingHash));
  return utils.joinSignature(signature);
}
