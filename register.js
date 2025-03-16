import Web3 from "web3";
import { CHAIN_CONFIGS } from "./constants.js";
import abi from "./abi.js";
import { sendContractCall, signRawData } from "./utils.js";
import { readFileSync } from "node:fs";
import logger from "./logger.js";

const { RPC_URL, STAKE_REGISTRY_ADDR, SERVICE_MANAGER_ADDR } =
  CHAIN_CONFIGS[process.env.CHAIN_ID];

async function isOperatorRegistered(operatorAddress) {
  const ethHttpClient = new Web3(new Web3.providers.HttpProvider(RPC_URL));
  const stakeRegistry = new ethHttpClient.eth.Contract(
    abi.STAKE_REGISTRY,
    STAKE_REGISTRY_ADDR
  );
  return await stakeRegistry.methods.operatorRegistered(operatorAddress).call();
}

async function calculateOperatorAvsRegistrationDigestHash(
  operatorAddr,
  avs,
  salt,
  expiry
) {
  const ethHttpClient = new Web3(new Web3.providers.HttpProvider(RPC_URL));
  const serviceManager = new ethHttpClient.eth.Contract(
    abi.SERVICE_MANAGER,
    SERVICE_MANAGER_ADDR
  );

  const avsDirectoryAddr = await serviceManager.methods.avsDirectory().call();
  const avsDirectory = new ethHttpClient.eth.Contract(
    abi.AVS_DIRECTORY,
    avsDirectoryAddr
  );
  return await avsDirectory.methods
    .calculateOperatorAVSRegistrationDigestHash(operatorAddr, avs, salt, expiry)
    .call();
}

async function getAccount() {
  const ecdsaKeyPassword = process.env.SECRET || "";
  if (!ecdsaKeyPassword) {
    logger.warn("Key file password not set. using empty string.");
  }

  const keystore = JSON.parse(readFileSync(process.env.KEY_PATH, "utf8"));
  const web3 = new Web3();
  return await web3.eth.accounts.decrypt(keystore, ecdsaKeyPassword);
}

async function run() {
  const ethHttpClient = new Web3(new Web3.providers.HttpProvider(RPC_URL));

  const account = await getAccount();
  const isAlreadyRegistered = await isOperatorRegistered(account.address);

  if (!isAlreadyRegistered) {
    const salt = Web3.utils.randomHex(32);
    const expiry = Math.floor(Date.now() / 1000) + 900; // 15 mintues

    const msgToSign = await calculateOperatorAvsRegistrationDigestHash(
      account.address,
      SERVICE_MANAGER_ADDR,
      salt,
      expiry
    );

    const operatorSignature = signRawData(msgToSign, account.privateKey);

    const wallet = {
      address: account.address,
      privateKey: account.privateKey.replace("0x", ""),
    };

    const contract = new ethHttpClient.eth.Contract(
      abi.STAKE_REGISTRY,
      STAKE_REGISTRY_ADDR
    );

    try {
      const receipt = await sendContractCall(
        contract,
        "registerOperatorWithSignature",
        [[operatorSignature, salt, expiry], process.env.SIGNING_KEY_ADDR],
        wallet,
        ethHttpClient
      );
      logger.info(
        `Successfully registered operator to AVS ${SERVICE_MANAGER_ADDR}`
      );
      logger.log(`\n\nTransaction: ${receipt.transactionHash}`);
      return receipt;
    } catch (e) {
      logger.error(e);
      return null;
    }
  } else {
    logger.info("\nOperator has already registered");
  }
}

export default {
  run,
};
