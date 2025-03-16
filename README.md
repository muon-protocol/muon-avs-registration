
# Muon AVS Operator Registration Script

## Overview
This script allows EigenLayer operators to register their operator key with **Muon AVS**. Operators must first ensure they are registered with the **EigenLayer operator key** on **Mainnet or Holesky**.

## Prerequisites

1. Ensure you are already registered as an EigenLayer operator on Mainnet or Holesky using the **ECDSA key**.
2. Clone the Muon AVS registration repository:
   ```sh
   git clone https://github.com/muon-protocol/muon-avs-registration
   cd muon-avs-registration
   ```
3. Install dependencies:
   ```sh
   npm i
   ```

## Registration Steps

To register your operator with **Muon AVS**, use the provided script. The script will:
- Check if the operator is not already registered.
- Register the operator with **Muon AVS**.
- Submit an **ECDSA signature** along with the **AVS signing key address** (not a private key).

Run the script with the following command:

```sh
npm run register --chain=<chainId> --path=<path to operator key> --secret=<password> --signingKeyAddress=<signing key address>
```

### Parameters:
- `--chain`: Chain ID where you are registering the operator. Options:
  - `1` (Ethereum Mainnet)
  - `17000` (Holesky Testnet)
- `--path`: Full path to the operator key on the host. Example:
  ```sh
  /home/ubuntu/.eigenlayer/operator_keys/test.ecdsa.key.json
  ```
- `--secret`: Password for the encrypted key file (optional, ignore if the key is not encrypted).
- `--signingKeyAddress`: AVS signing key address (used as a validator in Muon AVS Verifier).

## Troubleshooting

- If there is an issue with the RPC, copy the `.env.example` file to `.env` and set your desired RPC URL:
  ```sh
  cp .env.example .env
  ```

## License
MIT License. See LICENSE for details.
