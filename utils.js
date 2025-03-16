import * as ethUtil from "ethereumjs-util";

export const timeout = (ms) =>
  new Promise((resolve, reject) => setTimeout(resolve, ms));

export function signRawData(data, privateKey) {
  function removeHexPrefix(hexString) {
    if (hexString.startsWith("0x") || hexString.startsWith("0X")) {
      return hexString.slice(2);
    }
    return hexString;
  }
  const { v, r, s } = ethUtil.ecsign(
    Buffer.from(removeHexPrefix(data), "hex"),
    Buffer.from(removeHexPrefix(privateKey), "hex")
  );
  return ethUtil.toCompactSig(v, r, s);
}

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

  const gasLimit = await contractMethod.estimateGas({ from: pkWallet.address });

  const txParams = {
    data: contractMethod.encodeABI(),
    from: pkWallet.address,
    to: contract.options.address,
    gasPrice: gasPrice,
    gas: gasLimit,
  };

  const signedTx = await web3.eth.accounts.signTransaction(
    txParams,
    pkWallet.privateKey
  );

  return await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
}
