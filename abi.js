const BLS_APK_REGISTRY = [
  {
    inputs: [
      {
        internalType: "contract IRegistryCoordinator",
        name: "_registryCoordinator",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint8", name: "version", type: "uint8" },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        components: [
          { internalType: "uint256", name: "X", type: "uint256" },
          { internalType: "uint256", name: "Y", type: "uint256" },
        ],
        indexed: false,
        internalType: "struct BN254.G1Point",
        name: "pubkeyG1",
        type: "tuple",
      },
      {
        components: [
          { internalType: "uint256[2]", name: "X", type: "uint256[2]" },
          { internalType: "uint256[2]", name: "Y", type: "uint256[2]" },
        ],
        indexed: false,
        internalType: "struct BN254.G2Point",
        name: "pubkeyG2",
        type: "tuple",
      },
    ],
    name: "NewPubkeyRegistration",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "operatorId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "quorumNumbers",
        type: "bytes",
      },
    ],
    name: "OperatorAddedToQuorums",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "operatorId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "quorumNumbers",
        type: "bytes",
      },
    ],
    name: "OperatorRemovedFromQuorums",
    type: "event",
  },
  {
    inputs: [
      { internalType: "uint8", name: "", type: "uint8" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "apkHistory",
    outputs: [
      { internalType: "bytes24", name: "apkHash", type: "bytes24" },
      { internalType: "uint32", name: "updateBlockNumber", type: "uint32" },
      { internalType: "uint32", name: "nextUpdateBlockNumber", type: "uint32" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    name: "currentApk",
    outputs: [
      { internalType: "uint256", name: "X", type: "uint256" },
      { internalType: "uint256", name: "Y", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "bytes", name: "quorumNumbers", type: "bytes" },
    ],
    name: "deregisterOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint8", name: "quorumNumber", type: "uint8" }],
    name: "getApk",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "X", type: "uint256" },
          { internalType: "uint256", name: "Y", type: "uint256" },
        ],
        internalType: "struct BN254.G1Point",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint8", name: "quorumNumber", type: "uint8" },
      { internalType: "uint32", name: "blockNumber", type: "uint32" },
      { internalType: "uint256", name: "index", type: "uint256" },
    ],
    name: "getApkHashAtBlockNumberAndIndex",
    outputs: [{ internalType: "bytes24", name: "", type: "bytes24" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint8", name: "quorumNumber", type: "uint8" }],
    name: "getApkHistoryLength",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes", name: "quorumNumbers", type: "bytes" },
      { internalType: "uint256", name: "blockNumber", type: "uint256" },
    ],
    name: "getApkIndicesAtBlockNumber",
    outputs: [{ internalType: "uint32[]", name: "", type: "uint32[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint8", name: "quorumNumber", type: "uint8" },
      { internalType: "uint256", name: "index", type: "uint256" },
    ],
    name: "getApkUpdateAtIndex",
    outputs: [
      {
        components: [
          { internalType: "bytes24", name: "apkHash", type: "bytes24" },
          { internalType: "uint32", name: "updateBlockNumber", type: "uint32" },
          {
            internalType: "uint32",
            name: "nextUpdateBlockNumber",
            type: "uint32",
          },
        ],
        internalType: "struct IBLSApkRegistry.ApkUpdate",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "pubkeyHash", type: "bytes32" }],
    name: "getOperatorFromPubkeyHash",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "operator", type: "address" }],
    name: "getOperatorId",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "operator", type: "address" }],
    name: "getRegisteredPubkey",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "X", type: "uint256" },
          { internalType: "uint256", name: "Y", type: "uint256" },
        ],
        internalType: "struct BN254.G1Point",
        name: "",
        type: "tuple",
      },
      { internalType: "bytes32", name: "", type: "bytes32" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint8", name: "quorumNumber", type: "uint8" }],
    name: "initializeQuorum",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "operatorToPubkey",
    outputs: [
      { internalType: "uint256", name: "X", type: "uint256" },
      { internalType: "uint256", name: "Y", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "operatorToPubkeyHash",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    name: "pubkeyHashToOperator",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      {
        components: [
          {
            components: [
              { internalType: "uint256", name: "X", type: "uint256" },
              { internalType: "uint256", name: "Y", type: "uint256" },
            ],
            internalType: "struct BN254.G1Point",
            name: "pubkeyRegistrationSignature",
            type: "tuple",
          },
          {
            components: [
              { internalType: "uint256", name: "X", type: "uint256" },
              { internalType: "uint256", name: "Y", type: "uint256" },
            ],
            internalType: "struct BN254.G1Point",
            name: "pubkeyG1",
            type: "tuple",
          },
          {
            components: [
              { internalType: "uint256[2]", name: "X", type: "uint256[2]" },
              { internalType: "uint256[2]", name: "Y", type: "uint256[2]" },
            ],
            internalType: "struct BN254.G2Point",
            name: "pubkeyG2",
            type: "tuple",
          },
        ],
        internalType: "struct IBLSApkRegistry.PubkeyRegistrationParams",
        name: "params",
        type: "tuple",
      },
      {
        components: [
          { internalType: "uint256", name: "X", type: "uint256" },
          { internalType: "uint256", name: "Y", type: "uint256" },
        ],
        internalType: "struct BN254.G1Point",
        name: "pubkeyRegistrationMessageHash",
        type: "tuple",
      },
    ],
    name: "registerBLSPublicKey",
    outputs: [{ internalType: "bytes32", name: "operatorId", type: "bytes32" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "bytes", name: "quorumNumbers", type: "bytes" },
    ],
    name: "registerOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "registryCoordinator",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
];
const INDEX_REGISTRY = [
  {
    inputs: [
      {
        internalType: "contract IRegistryCoordinator",
        name: "_registryCoordinator",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint8", name: "version", type: "uint8" },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "operatorId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "quorumNumber",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "newOperatorIndex",
        type: "uint32",
      },
    ],
    name: "QuorumIndexUpdate",
    type: "event",
  },
  {
    inputs: [],
    name: "OPERATOR_DOES_NOT_EXIST_ID",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint8", name: "", type: "uint8" },
      { internalType: "bytes32", name: "", type: "bytes32" },
    ],
    name: "currentOperatorIndex",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "operatorId", type: "bytes32" },
      { internalType: "bytes", name: "quorumNumbers", type: "bytes" },
    ],
    name: "deregisterOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint8", name: "quorumNumber", type: "uint8" },
      { internalType: "uint32", name: "operatorIndex", type: "uint32" },
    ],
    name: "getLatestOperatorUpdate",
    outputs: [
      {
        components: [
          { internalType: "uint32", name: "fromBlockNumber", type: "uint32" },
          { internalType: "bytes32", name: "operatorId", type: "bytes32" },
        ],
        internalType: "struct IIndexRegistry.OperatorUpdate",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint8", name: "quorumNumber", type: "uint8" }],
    name: "getLatestQuorumUpdate",
    outputs: [
      {
        components: [
          { internalType: "uint32", name: "fromBlockNumber", type: "uint32" },
          { internalType: "uint32", name: "numOperators", type: "uint32" },
        ],
        internalType: "struct IIndexRegistry.QuorumUpdate",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint8", name: "quorumNumber", type: "uint8" },
      { internalType: "uint32", name: "blockNumber", type: "uint32" },
    ],
    name: "getOperatorListAtBlockNumber",
    outputs: [{ internalType: "bytes32[]", name: "", type: "bytes32[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint8", name: "quorumNumber", type: "uint8" },
      { internalType: "uint32", name: "operatorIndex", type: "uint32" },
      { internalType: "uint32", name: "arrayIndex", type: "uint32" },
    ],
    name: "getOperatorUpdateAtIndex",
    outputs: [
      {
        components: [
          { internalType: "uint32", name: "fromBlockNumber", type: "uint32" },
          { internalType: "bytes32", name: "operatorId", type: "bytes32" },
        ],
        internalType: "struct IIndexRegistry.OperatorUpdate",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint8", name: "quorumNumber", type: "uint8" },
      { internalType: "uint32", name: "quorumIndex", type: "uint32" },
    ],
    name: "getQuorumUpdateAtIndex",
    outputs: [
      {
        components: [
          { internalType: "uint32", name: "fromBlockNumber", type: "uint32" },
          { internalType: "uint32", name: "numOperators", type: "uint32" },
        ],
        internalType: "struct IIndexRegistry.QuorumUpdate",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint8", name: "quorumNumber", type: "uint8" }],
    name: "initializeQuorum",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "operatorId", type: "bytes32" },
      { internalType: "bytes", name: "quorumNumbers", type: "bytes" },
    ],
    name: "registerOperator",
    outputs: [{ internalType: "uint32[]", name: "", type: "uint32[]" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "registryCoordinator",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint8", name: "quorumNumber", type: "uint8" }],
    name: "totalOperatorsForQuorum",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function",
  },
];
const AVS_DIRECTORY = [
  {
    inputs: [
      {
        internalType: "contract IDelegationManager",
        name: "_delegation",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "avs", type: "address" },
      {
        indexed: false,
        internalType: "string",
        name: "metadataURI",
        type: "string",
      },
    ],
    name: "AVSMetadataURIUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint8", name: "version", type: "uint8" },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      { indexed: true, internalType: "address", name: "avs", type: "address" },
      {
        indexed: false,
        internalType: "enum IAVSDirectory.OperatorAVSRegistrationStatus",
        name: "status",
        type: "uint8",
      },
    ],
    name: "OperatorAVSRegistrationStatusUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newPausedStatus",
        type: "uint256",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IPauserRegistry",
        name: "pauserRegistry",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IPauserRegistry",
        name: "newPauserRegistry",
        type: "address",
      },
    ],
    name: "PauserRegistrySet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newPausedStatus",
        type: "uint256",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_TYPEHASH",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "OPERATOR_AVS_REGISTRATION_TYPEHASH",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "avsOperatorStatus",
    outputs: [
      {
        internalType: "enum IAVSDirectory.OperatorAVSRegistrationStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "address", name: "avs", type: "address" },
      { internalType: "bytes32", name: "salt", type: "bytes32" },
      { internalType: "uint256", name: "expiry", type: "uint256" },
    ],
    name: "calculateOperatorAVSRegistrationDigestHash",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "salt", type: "bytes32" }],
    name: "cancelSalt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "delegation",
    outputs: [
      {
        internalType: "contract IDelegationManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "operator", type: "address" }],
    name: "deregisterOperatorFromAVS",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "domainSeparator",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "initialOwner", type: "address" },
      {
        internalType: "contract IPauserRegistry",
        name: "_pauserRegistry",
        type: "address",
      },
      { internalType: "uint256", name: "initialPausedStatus", type: "uint256" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "bytes32", name: "", type: "bytes32" },
    ],
    name: "operatorSaltIsSpent",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "newPausedStatus", type: "uint256" },
    ],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pauseAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint8", name: "index", type: "uint8" }],
    name: "paused",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pauserRegistry",
    outputs: [
      { internalType: "contract IPauserRegistry", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      {
        components: [
          { internalType: "bytes", name: "signature", type: "bytes" },
          { internalType: "bytes32", name: "salt", type: "bytes32" },
          { internalType: "uint256", name: "expiry", type: "uint256" },
        ],
        internalType: "struct ISignatureUtils.SignatureWithSaltAndExpiry",
        name: "operatorSignature",
        type: "tuple",
      },
    ],
    name: "registerOperatorToAVS",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPauserRegistry",
        name: "newPauserRegistry",
        type: "address",
      },
    ],
    name: "setPauserRegistry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "newPausedStatus", type: "uint256" },
    ],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "metadataURI", type: "string" }],
    name: "updateAVSMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
const OPERATOR_STATE_RETRIEVER = [
  {
    inputs: [
      {
        internalType: "contract IRegistryCoordinator",
        name: "registryCoordinator",
        type: "address",
      },
      { internalType: "uint32", name: "referenceBlockNumber", type: "uint32" },
      { internalType: "bytes", name: "quorumNumbers", type: "bytes" },
      {
        internalType: "bytes32[]",
        name: "nonSignerOperatorIds",
        type: "bytes32[]",
      },
    ],
    name: "getCheckSignaturesIndices",
    outputs: [
      {
        components: [
          {
            internalType: "uint32[]",
            name: "nonSignerQuorumBitmapIndices",
            type: "uint32[]",
          },
          {
            internalType: "uint32[]",
            name: "quorumApkIndices",
            type: "uint32[]",
          },
          {
            internalType: "uint32[]",
            name: "totalStakeIndices",
            type: "uint32[]",
          },
          {
            internalType: "uint32[][]",
            name: "nonSignerStakeIndices",
            type: "uint32[][]",
          },
        ],
        internalType: "struct OperatorStateRetriever.CheckSignaturesIndices",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IRegistryCoordinator",
        name: "registryCoordinator",
        type: "address",
      },
      { internalType: "bytes", name: "quorumNumbers", type: "bytes" },
      { internalType: "uint32", name: "blockNumber", type: "uint32" },
    ],
    name: "getOperatorState",
    outputs: [
      {
        components: [
          { internalType: "address", name: "operator", type: "address" },
          { internalType: "bytes32", name: "operatorId", type: "bytes32" },
          { internalType: "uint96", name: "stake", type: "uint96" },
        ],
        internalType: "struct OperatorStateRetriever.Operator[][]",
        name: "",
        type: "tuple[][]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IRegistryCoordinator",
        name: "registryCoordinator",
        type: "address",
      },
      { internalType: "bytes32", name: "operatorId", type: "bytes32" },
      { internalType: "uint32", name: "blockNumber", type: "uint32" },
    ],
    name: "getOperatorState",
    outputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      {
        components: [
          { internalType: "address", name: "operator", type: "address" },
          { internalType: "bytes32", name: "operatorId", type: "bytes32" },
          { internalType: "uint96", name: "stake", type: "uint96" },
        ],
        internalType: "struct OperatorStateRetriever.Operator[][]",
        name: "",
        type: "tuple[][]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IRegistryCoordinator",
        name: "registryCoordinator",
        type: "address",
      },
      { internalType: "bytes32[]", name: "operatorIds", type: "bytes32[]" },
      { internalType: "uint32", name: "blockNumber", type: "uint32" },
    ],
    name: "getQuorumBitmapsAtBlockNumber",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
];
const REGISTRY_COORDINATOR = [
  {
    inputs: [
      {
        internalType: "contract IServiceManager",
        name: "_serviceManager",
        type: "address",
      },
      {
        internalType: "contract IStakeRegistry",
        name: "_stakeRegistry",
        type: "address",
      },
      {
        internalType: "contract IBLSApkRegistry",
        name: "_blsApkRegistry",
        type: "address",
      },
      {
        internalType: "contract IIndexRegistry",
        name: "_indexRegistry",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "prevChurnApprover",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newChurnApprover",
        type: "address",
      },
    ],
    name: "ChurnApproverUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "prevEjector",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newEjector",
        type: "address",
      },
    ],
    name: "EjectorUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint8", name: "version", type: "uint8" },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "operatorId",
        type: "bytes32",
      },
    ],
    name: "OperatorDeregistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "operatorId",
        type: "bytes32",
      },
    ],
    name: "OperatorRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint8",
        name: "quorumNumber",
        type: "uint8",
      },
      {
        components: [
          { internalType: "uint32", name: "maxOperatorCount", type: "uint32" },
          {
            internalType: "uint16",
            name: "kickBIPsOfOperatorStake",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "kickBIPsOfTotalStake",
            type: "uint16",
          },
        ],
        indexed: false,
        internalType: "struct IRegistryCoordinator.OperatorSetParam",
        name: "operatorSetParams",
        type: "tuple",
      },
    ],
    name: "OperatorSetParamsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "operatorId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "socket",
        type: "string",
      },
    ],
    name: "OperatorSocketUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newPausedStatus",
        type: "uint256",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IPauserRegistry",
        name: "pauserRegistry",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IPauserRegistry",
        name: "newPauserRegistry",
        type: "address",
      },
    ],
    name: "PauserRegistrySet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint8",
        name: "quorumNumber",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blocknumber",
        type: "uint256",
      },
    ],
    name: "QuorumBlockNumberUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newPausedStatus",
        type: "uint256",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "OPERATOR_CHURN_APPROVAL_TYPEHASH",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PUBKEY_REGISTRATION_TYPEHASH",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "blsApkRegistry",
    outputs: [
      { internalType: "contract IBLSApkRegistry", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "registeringOperator", type: "address" },
      {
        internalType: "bytes32",
        name: "registeringOperatorId",
        type: "bytes32",
      },
      {
        components: [
          { internalType: "uint8", name: "quorumNumber", type: "uint8" },
          { internalType: "address", name: "operator", type: "address" },
        ],
        internalType: "struct IRegistryCoordinator.OperatorKickParam[]",
        name: "operatorKickParams",
        type: "tuple[]",
      },
      { internalType: "bytes32", name: "salt", type: "bytes32" },
      { internalType: "uint256", name: "expiry", type: "uint256" },
    ],
    name: "calculateOperatorChurnApprovalDigestHash",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "churnApprover",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "uint32", name: "maxOperatorCount", type: "uint32" },
          {
            internalType: "uint16",
            name: "kickBIPsOfOperatorStake",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "kickBIPsOfTotalStake",
            type: "uint16",
          },
        ],
        internalType: "struct IRegistryCoordinator.OperatorSetParam",
        name: "operatorSetParams",
        type: "tuple",
      },
      { internalType: "uint96", name: "minimumStake", type: "uint96" },
      {
        components: [
          {
            internalType: "contract IStrategy",
            name: "strategy",
            type: "address",
          },
          { internalType: "uint96", name: "multiplier", type: "uint96" },
        ],
        internalType: "struct IStakeRegistry.StrategyParams[]",
        name: "strategyParams",
        type: "tuple[]",
      },
    ],
    name: "createQuorum",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes", name: "quorumNumbers", type: "bytes" }],
    name: "deregisterOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "bytes", name: "quorumNumbers", type: "bytes" },
    ],
    name: "ejectOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ejector",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "operatorId", type: "bytes32" }],
    name: "getCurrentQuorumBitmap",
    outputs: [{ internalType: "uint192", name: "", type: "uint192" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "operator", type: "address" }],
    name: "getOperator",
    outputs: [
      {
        components: [
          { internalType: "bytes32", name: "operatorId", type: "bytes32" },
          {
            internalType: "enum IRegistryCoordinator.OperatorStatus",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct IRegistryCoordinator.OperatorInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "operatorId", type: "bytes32" }],
    name: "getOperatorFromId",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "operator", type: "address" }],
    name: "getOperatorId",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint8", name: "quorumNumber", type: "uint8" }],
    name: "getOperatorSetParams",
    outputs: [
      {
        components: [
          { internalType: "uint32", name: "maxOperatorCount", type: "uint32" },
          {
            internalType: "uint16",
            name: "kickBIPsOfOperatorStake",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "kickBIPsOfTotalStake",
            type: "uint16",
          },
        ],
        internalType: "struct IRegistryCoordinator.OperatorSetParam",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "operator", type: "address" }],
    name: "getOperatorStatus",
    outputs: [
      {
        internalType: "enum IRegistryCoordinator.OperatorStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "operatorId", type: "bytes32" },
      { internalType: "uint32", name: "blockNumber", type: "uint32" },
      { internalType: "uint256", name: "index", type: "uint256" },
    ],
    name: "getQuorumBitmapAtBlockNumberByIndex",
    outputs: [{ internalType: "uint192", name: "", type: "uint192" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "operatorId", type: "bytes32" }],
    name: "getQuorumBitmapHistoryLength",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint32", name: "blockNumber", type: "uint32" },
      { internalType: "bytes32[]", name: "operatorIds", type: "bytes32[]" },
    ],
    name: "getQuorumBitmapIndicesAtBlockNumber",
    outputs: [{ internalType: "uint32[]", name: "", type: "uint32[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "operatorId", type: "bytes32" },
      { internalType: "uint256", name: "index", type: "uint256" },
    ],
    name: "getQuorumBitmapUpdateByIndex",
    outputs: [
      {
        components: [
          { internalType: "uint32", name: "updateBlockNumber", type: "uint32" },
          {
            internalType: "uint32",
            name: "nextUpdateBlockNumber",
            type: "uint32",
          },
          { internalType: "uint192", name: "quorumBitmap", type: "uint192" },
        ],
        internalType: "struct IRegistryCoordinator.QuorumBitmapUpdate",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "indexRegistry",
    outputs: [
      { internalType: "contract IIndexRegistry", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_initialOwner", type: "address" },
      { internalType: "address", name: "_churnApprover", type: "address" },
      { internalType: "address", name: "_ejector", type: "address" },
      {
        internalType: "contract IPauserRegistry",
        name: "_pauserRegistry",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_initialPausedStatus",
        type: "uint256",
      },
      {
        components: [
          { internalType: "uint32", name: "maxOperatorCount", type: "uint32" },
          {
            internalType: "uint16",
            name: "kickBIPsOfOperatorStake",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "kickBIPsOfTotalStake",
            type: "uint16",
          },
        ],
        internalType: "struct IRegistryCoordinator.OperatorSetParam[]",
        name: "_operatorSetParams",
        type: "tuple[]",
      },
      { internalType: "uint96[]", name: "_minimumStakes", type: "uint96[]" },
      {
        components: [
          {
            internalType: "contract IStrategy",
            name: "strategy",
            type: "address",
          },
          { internalType: "uint96", name: "multiplier", type: "uint96" },
        ],
        internalType: "struct IStakeRegistry.StrategyParams[][]",
        name: "_strategyParams",
        type: "tuple[][]",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    name: "isChurnApproverSaltUsed",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numRegistries",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "newPausedStatus", type: "uint256" },
    ],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pauseAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint8", name: "index", type: "uint8" }],
    name: "paused",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pauserRegistry",
    outputs: [
      { internalType: "contract IPauserRegistry", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "operator", type: "address" }],
    name: "pubkeyRegistrationMessageHash",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "X", type: "uint256" },
          { internalType: "uint256", name: "Y", type: "uint256" },
        ],
        internalType: "struct BN254.G1Point",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "quorumCount",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    name: "quorumUpdateBlockNumber",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes", name: "quorumNumbers", type: "bytes" },
      { internalType: "string", name: "socket", type: "string" },
      {
        components: [
          {
            components: [
              { internalType: "uint256", name: "X", type: "uint256" },
              { internalType: "uint256", name: "Y", type: "uint256" },
            ],
            internalType: "struct BN254.G1Point",
            name: "pubkeyRegistrationSignature",
            type: "tuple",
          },
          {
            components: [
              { internalType: "uint256", name: "X", type: "uint256" },
              { internalType: "uint256", name: "Y", type: "uint256" },
            ],
            internalType: "struct BN254.G1Point",
            name: "pubkeyG1",
            type: "tuple",
          },
          {
            components: [
              { internalType: "uint256[2]", name: "X", type: "uint256[2]" },
              { internalType: "uint256[2]", name: "Y", type: "uint256[2]" },
            ],
            internalType: "struct BN254.G2Point",
            name: "pubkeyG2",
            type: "tuple",
          },
        ],
        internalType: "struct IBLSApkRegistry.PubkeyRegistrationParams",
        name: "params",
        type: "tuple",
      },
      {
        components: [
          { internalType: "bytes", name: "signature", type: "bytes" },
          { internalType: "bytes32", name: "salt", type: "bytes32" },
          { internalType: "uint256", name: "expiry", type: "uint256" },
        ],
        internalType: "struct ISignatureUtils.SignatureWithSaltAndExpiry",
        name: "operatorSignature",
        type: "tuple",
      },
    ],
    name: "registerOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes", name: "quorumNumbers", type: "bytes" },
      { internalType: "string", name: "socket", type: "string" },
      {
        components: [
          {
            components: [
              { internalType: "uint256", name: "X", type: "uint256" },
              { internalType: "uint256", name: "Y", type: "uint256" },
            ],
            internalType: "struct BN254.G1Point",
            name: "pubkeyRegistrationSignature",
            type: "tuple",
          },
          {
            components: [
              { internalType: "uint256", name: "X", type: "uint256" },
              { internalType: "uint256", name: "Y", type: "uint256" },
            ],
            internalType: "struct BN254.G1Point",
            name: "pubkeyG1",
            type: "tuple",
          },
          {
            components: [
              { internalType: "uint256[2]", name: "X", type: "uint256[2]" },
              { internalType: "uint256[2]", name: "Y", type: "uint256[2]" },
            ],
            internalType: "struct BN254.G2Point",
            name: "pubkeyG2",
            type: "tuple",
          },
        ],
        internalType: "struct IBLSApkRegistry.PubkeyRegistrationParams",
        name: "params",
        type: "tuple",
      },
      {
        components: [
          { internalType: "uint8", name: "quorumNumber", type: "uint8" },
          { internalType: "address", name: "operator", type: "address" },
        ],
        internalType: "struct IRegistryCoordinator.OperatorKickParam[]",
        name: "operatorKickParams",
        type: "tuple[]",
      },
      {
        components: [
          { internalType: "bytes", name: "signature", type: "bytes" },
          { internalType: "bytes32", name: "salt", type: "bytes32" },
          { internalType: "uint256", name: "expiry", type: "uint256" },
        ],
        internalType: "struct ISignatureUtils.SignatureWithSaltAndExpiry",
        name: "churnApproverSignature",
        type: "tuple",
      },
      {
        components: [
          { internalType: "bytes", name: "signature", type: "bytes" },
          { internalType: "bytes32", name: "salt", type: "bytes32" },
          { internalType: "uint256", name: "expiry", type: "uint256" },
        ],
        internalType: "struct ISignatureUtils.SignatureWithSaltAndExpiry",
        name: "operatorSignature",
        type: "tuple",
      },
    ],
    name: "registerOperatorWithChurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "registries",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "serviceManager",
    outputs: [
      { internalType: "contract IServiceManager", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_churnApprover", type: "address" },
    ],
    name: "setChurnApprover",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_ejector", type: "address" }],
    name: "setEjector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint8", name: "quorumNumber", type: "uint8" },
      {
        components: [
          { internalType: "uint32", name: "maxOperatorCount", type: "uint32" },
          {
            internalType: "uint16",
            name: "kickBIPsOfOperatorStake",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "kickBIPsOfTotalStake",
            type: "uint16",
          },
        ],
        internalType: "struct IRegistryCoordinator.OperatorSetParam",
        name: "operatorSetParams",
        type: "tuple",
      },
    ],
    name: "setOperatorSetParams",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPauserRegistry",
        name: "newPauserRegistry",
        type: "address",
      },
    ],
    name: "setPauserRegistry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakeRegistry",
    outputs: [
      { internalType: "contract IStakeRegistry", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "newPausedStatus", type: "uint256" },
    ],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[]", name: "operators", type: "address[]" },
    ],
    name: "updateOperators",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[][]",
        name: "operatorsPerQuorum",
        type: "address[][]",
      },
      { internalType: "bytes", name: "quorumNumbers", type: "bytes" },
    ],
    name: "updateOperatorsForQuorum",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "socket", type: "string" }],
    name: "updateSocket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
const STAKE_REGISTRY = [
  {
    inputs: [
      {
        internalType: "contract IDelegationManager",
        name: "_delegationManager",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InsufficientSignedStake",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientWeight",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidLength",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidQuorum",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidReferenceBlock",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSignature",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSignedWeight",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidThreshold",
    type: "error",
  },
  {
    inputs: [],
    name: "LengthMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "MustUpdateAllOperators",
    type: "error",
  },
  {
    inputs: [],
    name: "NotSorted",
    type: "error",
  },
  {
    inputs: [],
    name: "OperatorAlreadyRegistered",
    type: "error",
  },
  {
    inputs: [],
    name: "OperatorNotRegistered",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_old",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_new",
        type: "uint256",
      },
    ],
    name: "MinimumWeightUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_avs",
        type: "address",
      },
    ],
    name: "OperatorDeregistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_avs",
        type: "address",
      },
    ],
    name: "OperatorRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldWeight",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newWeight",
        type: "uint256",
      },
    ],
    name: "OperatorWeightUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "contract IStrategy",
                name: "strategy",
                type: "address",
              },
              {
                internalType: "uint96",
                name: "multiplier",
                type: "uint96",
              },
            ],
            internalType: "struct StrategyParams[]",
            name: "strategies",
            type: "tuple[]",
          },
        ],
        indexed: false,
        internalType: "struct Quorum",
        name: "_old",
        type: "tuple",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "contract IStrategy",
                name: "strategy",
                type: "address",
              },
              {
                internalType: "uint96",
                name: "multiplier",
                type: "uint96",
              },
            ],
            internalType: "struct StrategyParams[]",
            name: "strategies",
            type: "tuple[]",
          },
        ],
        indexed: false,
        internalType: "struct Quorum",
        name: "_new",
        type: "tuple",
      },
    ],
    name: "QuorumUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "updateBlock",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newSigningKey",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "oldSigningKey",
        type: "address",
      },
    ],
    name: "SigningKeyUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_thresholdWeight",
        type: "uint256",
      },
    ],
    name: "ThresholdWeightUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldTotalWeight",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newTotalWeight",
        type: "uint256",
      },
    ],
    name: "TotalWeightUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldMinimumWeight",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newMinimumWeight",
        type: "uint256",
      },
    ],
    name: "UpdateMinimumWeight",
    type: "event",
  },
  {
    inputs: [],
    name: "deregisterOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
    ],
    name: "getLastCheckpointOperatorWeight",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastCheckpointThresholdWeight",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_blockNumber",
        type: "uint32",
      },
    ],
    name: "getLastCheckpointThresholdWeightAtBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastCheckpointTotalWeight",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_blockNumber",
        type: "uint32",
      },
    ],
    name: "getLastCheckpointTotalWeightAtBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
    ],
    name: "getLastestOperatorSigningKey",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_blockNumber",
        type: "uint256",
      },
    ],
    name: "getOperatorSigningKeyAtBlock",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
    ],
    name: "getOperatorWeight",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_blockNumber",
        type: "uint32",
      },
    ],
    name: "getOperatorWeightAtBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_serviceManager",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_thresholdWeight",
        type: "uint256",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "contract IStrategy",
                name: "strategy",
                type: "address",
              },
              {
                internalType: "uint96",
                name: "multiplier",
                type: "uint96",
              },
            ],
            internalType: "struct StrategyParams[]",
            name: "strategies",
            type: "tuple[]",
          },
        ],
        internalType: "struct Quorum",
        name: "_quorum",
        type: "tuple",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_dataHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signatureData",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minimumWeight",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
    ],
    name: "operatorRegistered",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "quorum",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "contract IStrategy",
                name: "strategy",
                type: "address",
              },
              {
                internalType: "uint96",
                name: "multiplier",
                type: "uint96",
              },
            ],
            internalType: "struct StrategyParams[]",
            name: "strategies",
            type: "tuple[]",
          },
        ],
        internalType: "struct Quorum",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
          {
            internalType: "bytes32",
            name: "salt",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
        ],
        internalType: "struct ISignatureUtils.SignatureWithSaltAndExpiry",
        name: "_operatorSignature",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_signingKey",
        type: "address",
      },
    ],
    name: "registerOperatorWithSignature",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "requestExit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newMinimumWeight",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "_operators",
        type: "address[]",
      },
    ],
    name: "updateMinimumWeight",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newSigningKey",
        type: "address",
      },
    ],
    name: "updateOperatorSigningKey",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_operators",
        type: "address[]",
      },
    ],
    name: "updateOperators",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[][]",
        name: "operatorsPerQuorum",
        type: "address[][]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "updateOperatorsForQuorum",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "contract IStrategy",
                name: "strategy",
                type: "address",
              },
              {
                internalType: "uint96",
                name: "multiplier",
                type: "uint96",
              },
            ],
            internalType: "struct StrategyParams[]",
            name: "strategies",
            type: "tuple[]",
          },
        ],
        internalType: "struct Quorum",
        name: "_quorum",
        type: "tuple",
      },
      {
        internalType: "address[]",
        name: "_operators",
        type: "address[]",
      },
    ],
    name: "updateQuorumConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_thresholdWeight",
        type: "uint256",
      },
    ],
    name: "updateStakeThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
const SERVICE_MANAGER = [
  {
    inputs: [
      {
        internalType: "contract IAVSDirectory",
        name: "__avsDirectory",
        type: "address",
      },
      {
        internalType: "contract IRegistryCoordinator",
        name: "__registryCoordinator",
        type: "address",
      },
      {
        internalType: "contract IStakeRegistry",
        name: "__stakeRegistry",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint8", name: "version", type: "uint8" },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "avsDirectory",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "operator", type: "address" }],
    name: "deregisterOperatorFromAVS",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "operator", type: "address" }],
    name: "getOperatorRestakedStrategies",
    outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRestakeableStrategies",
    outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      {
        components: [
          { internalType: "bytes", name: "signature", type: "bytes" },
          { internalType: "bytes32", name: "salt", type: "bytes32" },
          { internalType: "uint256", name: "expiry", type: "uint256" },
        ],
        internalType: "struct ISignatureUtils.SignatureWithSaltAndExpiry",
        name: "operatorSignature",
        type: "tuple",
      },
    ],
    name: "registerOperatorToAVS",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "_metadataURI", type: "string" }],
    name: "updateAVSMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
const SLASHER = [
  {
    inputs: [
      { internalType: "contract IStrategyManager", name: "", type: "address" },
      {
        internalType: "contract IDelegationManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previouslySlashedAddress",
        type: "address",
      },
    ],
    name: "FrozenStatusReset",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint8", name: "version", type: "uint8" },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "stalestUpdateBlock",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "latestServeUntilBlock",
        type: "uint32",
      },
    ],
    name: "MiddlewareTimesAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "slashedOperator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "slashingContract",
        type: "address",
      },
    ],
    name: "OperatorFrozen",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "OptedIntoSlashing",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newPausedStatus",
        type: "uint256",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IPauserRegistry",
        name: "pauserRegistry",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IPauserRegistry",
        name: "newPauserRegistry",
        type: "address",
      },
    ],
    name: "PauserRegistrySet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "contractCanSlashOperatorUntilBlock",
        type: "uint32",
      },
    ],
    name: "SlashingAbilityRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newPausedStatus",
        type: "uint256",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "canSlash",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint32", name: "", type: "uint32" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "canWithdraw",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "contractCanSlashOperatorUntilBlock",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "delegation",
    outputs: [
      {
        internalType: "contract IDelegationManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "freezeOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint32", name: "", type: "uint32" },
    ],
    name: "getCorrectValueForInsertAfter",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint32", name: "", type: "uint32" },
    ],
    name: "getMiddlewareTimesIndexServeUntilBlock",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint32", name: "", type: "uint32" },
    ],
    name: "getMiddlewareTimesIndexStalestUpdateBlock",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "contract IPauserRegistry", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "isFrozen",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "latestUpdateBlock",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "middlewareTimesLength",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "operatorToMiddlewareTimes",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "stalestUpdateBlock",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "latestServeUntilBlock",
            type: "uint32",
          },
        ],
        internalType: "struct ISlasher.MiddlewareTimes",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "operatorWhitelistedContractsLinkedListEntry",
    outputs: [
      { internalType: "bool", name: "", type: "bool" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "operatorWhitelistedContractsLinkedListSize",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "optIntoSlashing",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "newPausedStatus", type: "uint256" },
    ],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pauseAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint8", name: "index", type: "uint8" }],
    name: "paused",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pauserRegistry",
    outputs: [
      { internalType: "contract IPauserRegistry", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint32", name: "", type: "uint32" },
    ],
    name: "recordFirstStakeUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint32", name: "", type: "uint32" },
    ],
    name: "recordLastStakeUpdateAndRevokeSlashingAbility",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint32", name: "", type: "uint32" },
      { internalType: "uint32", name: "", type: "uint32" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "recordStakeUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address[]", name: "", type: "address[]" }],
    name: "resetFrozenStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPauserRegistry",
        name: "newPauserRegistry",
        type: "address",
      },
    ],
    name: "setPauserRegistry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "strategyManager",
    outputs: [
      { internalType: "contract IStrategyManager", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "newPausedStatus", type: "uint256" },
    ],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "whitelistedContractDetails",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "registrationMayBeginAtBlock",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "contractCanSlashOperatorUntilBlock",
            type: "uint32",
          },
          { internalType: "uint32", name: "latestUpdateBlock", type: "uint32" },
        ],
        internalType: "struct ISlasher.MiddlewareDetails",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const DELEGATION_MANAGER = [
  {
    inputs: [
      {
        internalType: "contract IStrategyManager",
        name: "_strategyManager",
        type: "address",
      },
      { internalType: "contract ISlasher", name: "_slasher", type: "address" },
      {
        internalType: "contract IEigenPodManager",
        name: "_eigenPodManager",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint8", name: "version", type: "uint8" },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "previousValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "MinWithdrawalDelayBlocksSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "earningsReceiver",
            type: "address",
          },
          {
            internalType: "address",
            name: "delegationApprover",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "stakerOptOutWindowBlocks",
            type: "uint32",
          },
        ],
        indexed: false,
        internalType: "struct IDelegationManager.OperatorDetails",
        name: "newOperatorDetails",
        type: "tuple",
      },
    ],
    name: "OperatorDetailsModified",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "metadataURI",
        type: "string",
      },
    ],
    name: "OperatorMetadataURIUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "earningsReceiver",
            type: "address",
          },
          {
            internalType: "address",
            name: "delegationApprover",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "stakerOptOutWindowBlocks",
            type: "uint32",
          },
        ],
        indexed: false,
        internalType: "struct IDelegationManager.OperatorDetails",
        name: "operatorDetails",
        type: "tuple",
      },
    ],
    name: "OperatorRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IStrategy",
        name: "strategy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "OperatorSharesDecreased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IStrategy",
        name: "strategy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "OperatorSharesIncreased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newPausedStatus",
        type: "uint256",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IPauserRegistry",
        name: "pauserRegistry",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IPauserRegistry",
        name: "newPauserRegistry",
        type: "address",
      },
    ],
    name: "PauserRegistrySet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "StakerDelegated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "StakerForceUndelegated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "StakerUndelegated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IStrategy",
        name: "strategy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "StrategyWithdrawalDelayBlocksSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newPausedStatus",
        type: "uint256",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "withdrawalRoot",
        type: "bytes32",
      },
    ],
    name: "WithdrawalCompleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "oldWithdrawalRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "newWithdrawalRoot",
        type: "bytes32",
      },
    ],
    name: "WithdrawalMigrated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "withdrawalRoot",
        type: "bytes32",
      },
      {
        components: [
          { internalType: "address", name: "staker", type: "address" },
          { internalType: "address", name: "delegatedTo", type: "address" },
          { internalType: "address", name: "withdrawer", type: "address" },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          { internalType: "uint32", name: "startBlock", type: "uint32" },
          {
            internalType: "contract IStrategy[]",
            name: "strategies",
            type: "address[]",
          },
          { internalType: "uint256[]", name: "shares", type: "uint256[]" },
        ],
        indexed: false,
        internalType: "struct IDelegationManager.Withdrawal",
        name: "withdrawal",
        type: "tuple",
      },
    ],
    name: "WithdrawalQueued",
    type: "event",
  },
  {
    inputs: [],
    name: "DELEGATION_APPROVAL_TYPEHASH",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DOMAIN_TYPEHASH",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_STAKER_OPT_OUT_WINDOW_BLOCKS",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_WITHDRAWAL_DELAY_BLOCKS",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "STAKER_DELEGATION_TYPEHASH",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "beaconChainETHStrategy",
    outputs: [
      { internalType: "contract IStrategy", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "staker", type: "address" },
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "uint256", name: "expiry", type: "uint256" },
    ],
    name: "calculateCurrentStakerDelegationDigestHash",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "staker", type: "address" },
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "address", name: "_delegationApprover", type: "address" },
      { internalType: "bytes32", name: "approverSalt", type: "bytes32" },
      { internalType: "uint256", name: "expiry", type: "uint256" },
    ],
    name: "calculateDelegationApprovalDigestHash",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "staker", type: "address" },
      { internalType: "uint256", name: "_stakerNonce", type: "uint256" },
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "uint256", name: "expiry", type: "uint256" },
    ],
    name: "calculateStakerDelegationDigestHash",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "staker", type: "address" },
          { internalType: "address", name: "delegatedTo", type: "address" },
          { internalType: "address", name: "withdrawer", type: "address" },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          { internalType: "uint32", name: "startBlock", type: "uint32" },
          {
            internalType: "contract IStrategy[]",
            name: "strategies",
            type: "address[]",
          },
          { internalType: "uint256[]", name: "shares", type: "uint256[]" },
        ],
        internalType: "struct IDelegationManager.Withdrawal",
        name: "withdrawal",
        type: "tuple",
      },
    ],
    name: "calculateWithdrawalRoot",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "staker", type: "address" },
          { internalType: "address", name: "delegatedTo", type: "address" },
          { internalType: "address", name: "withdrawer", type: "address" },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          { internalType: "uint32", name: "startBlock", type: "uint32" },
          {
            internalType: "contract IStrategy[]",
            name: "strategies",
            type: "address[]",
          },
          { internalType: "uint256[]", name: "shares", type: "uint256[]" },
        ],
        internalType: "struct IDelegationManager.Withdrawal",
        name: "withdrawal",
        type: "tuple",
      },
      { internalType: "contract IERC20[]", name: "tokens", type: "address[]" },
      {
        internalType: "uint256",
        name: "middlewareTimesIndex",
        type: "uint256",
      },
      { internalType: "bool", name: "receiveAsTokens", type: "bool" },
    ],
    name: "completeQueuedWithdrawal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "staker", type: "address" },
          { internalType: "address", name: "delegatedTo", type: "address" },
          { internalType: "address", name: "withdrawer", type: "address" },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          { internalType: "uint32", name: "startBlock", type: "uint32" },
          {
            internalType: "contract IStrategy[]",
            name: "strategies",
            type: "address[]",
          },
          { internalType: "uint256[]", name: "shares", type: "uint256[]" },
        ],
        internalType: "struct IDelegationManager.Withdrawal[]",
        name: "withdrawals",
        type: "tuple[]",
      },
      {
        internalType: "contract IERC20[][]",
        name: "tokens",
        type: "address[][]",
      },
      {
        internalType: "uint256[]",
        name: "middlewareTimesIndexes",
        type: "uint256[]",
      },
      { internalType: "bool[]", name: "receiveAsTokens", type: "bool[]" },
    ],
    name: "completeQueuedWithdrawals",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "cumulativeWithdrawalsQueued",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "staker", type: "address" },
      { internalType: "contract IStrategy", name: "strategy", type: "address" },
      { internalType: "uint256", name: "shares", type: "uint256" },
    ],
    name: "decreaseDelegatedShares",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      {
        components: [
          { internalType: "bytes", name: "signature", type: "bytes" },
          { internalType: "uint256", name: "expiry", type: "uint256" },
        ],
        internalType: "struct ISignatureUtils.SignatureWithExpiry",
        name: "approverSignatureAndExpiry",
        type: "tuple",
      },
      { internalType: "bytes32", name: "approverSalt", type: "bytes32" },
    ],
    name: "delegateTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "staker", type: "address" },
      { internalType: "address", name: "operator", type: "address" },
      {
        components: [
          { internalType: "bytes", name: "signature", type: "bytes" },
          { internalType: "uint256", name: "expiry", type: "uint256" },
        ],
        internalType: "struct ISignatureUtils.SignatureWithExpiry",
        name: "stakerSignatureAndExpiry",
        type: "tuple",
      },
      {
        components: [
          { internalType: "bytes", name: "signature", type: "bytes" },
          { internalType: "uint256", name: "expiry", type: "uint256" },
        ],
        internalType: "struct ISignatureUtils.SignatureWithExpiry",
        name: "approverSignatureAndExpiry",
        type: "tuple",
      },
      { internalType: "bytes32", name: "approverSalt", type: "bytes32" },
    ],
    name: "delegateToBySignature",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "delegatedTo",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "operator", type: "address" }],
    name: "delegationApprover",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "bytes32", name: "", type: "bytes32" },
    ],
    name: "delegationApproverSaltIsSpent",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "domainSeparator",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "operator", type: "address" }],
    name: "earningsReceiver",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eigenPodManager",
    outputs: [
      { internalType: "contract IEigenPodManager", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "staker", type: "address" }],
    name: "getDelegatableShares",
    outputs: [
      { internalType: "contract IStrategy[]", name: "", type: "address[]" },
      { internalType: "uint256[]", name: "", type: "uint256[]" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      {
        internalType: "contract IStrategy[]",
        name: "strategies",
        type: "address[]",
      },
    ],
    name: "getOperatorShares",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IStrategy[]",
        name: "strategies",
        type: "address[]",
      },
    ],
    name: "getWithdrawalDelay",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "staker", type: "address" },
      { internalType: "contract IStrategy", name: "strategy", type: "address" },
      { internalType: "uint256", name: "shares", type: "uint256" },
    ],
    name: "increaseDelegatedShares",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "initialOwner", type: "address" },
      {
        internalType: "contract IPauserRegistry",
        name: "_pauserRegistry",
        type: "address",
      },
      { internalType: "uint256", name: "initialPausedStatus", type: "uint256" },
      {
        internalType: "uint256",
        name: "_minWithdrawalDelayBlocks",
        type: "uint256",
      },
      {
        internalType: "contract IStrategy[]",
        name: "_strategies",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_withdrawalDelayBlocks",
        type: "uint256[]",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "staker", type: "address" }],
    name: "isDelegated",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "operator", type: "address" }],
    name: "isOperator",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IStrategy[]",
            name: "strategies",
            type: "address[]",
          },
          { internalType: "uint256[]", name: "shares", type: "uint256[]" },
          { internalType: "address", name: "staker", type: "address" },
          {
            components: [
              { internalType: "address", name: "withdrawer", type: "address" },
              { internalType: "uint96", name: "nonce", type: "uint96" },
            ],
            internalType:
              "struct IStrategyManager.DeprecatedStruct_WithdrawerAndNonce",
            name: "withdrawerAndNonce",
            type: "tuple",
          },
          {
            internalType: "uint32",
            name: "withdrawalStartBlock",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "delegatedAddress",
            type: "address",
          },
        ],
        internalType:
          "struct IStrategyManager.DeprecatedStruct_QueuedWithdrawal[]",
        name: "withdrawalsToMigrate",
        type: "tuple[]",
      },
    ],
    name: "migrateQueuedWithdrawals",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "minWithdrawalDelayBlocks",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "earningsReceiver",
            type: "address",
          },
          {
            internalType: "address",
            name: "delegationApprover",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "stakerOptOutWindowBlocks",
            type: "uint32",
          },
        ],
        internalType: "struct IDelegationManager.OperatorDetails",
        name: "newOperatorDetails",
        type: "tuple",
      },
    ],
    name: "modifyOperatorDetails",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "operator", type: "address" }],
    name: "operatorDetails",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "earningsReceiver",
            type: "address",
          },
          {
            internalType: "address",
            name: "delegationApprover",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "stakerOptOutWindowBlocks",
            type: "uint32",
          },
        ],
        internalType: "struct IDelegationManager.OperatorDetails",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "contract IStrategy", name: "", type: "address" },
    ],
    name: "operatorShares",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "newPausedStatus", type: "uint256" },
    ],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pauseAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint8", name: "index", type: "uint8" }],
    name: "paused",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pauserRegistry",
    outputs: [
      { internalType: "contract IPauserRegistry", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    name: "pendingWithdrawals",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IStrategy[]",
            name: "strategies",
            type: "address[]",
          },
          { internalType: "uint256[]", name: "shares", type: "uint256[]" },
          { internalType: "address", name: "withdrawer", type: "address" },
        ],
        internalType: "struct IDelegationManager.QueuedWithdrawalParams[]",
        name: "queuedWithdrawalParams",
        type: "tuple[]",
      },
    ],
    name: "queueWithdrawals",
    outputs: [{ internalType: "bytes32[]", name: "", type: "bytes32[]" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "earningsReceiver",
            type: "address",
          },
          {
            internalType: "address",
            name: "delegationApprover",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "stakerOptOutWindowBlocks",
            type: "uint32",
          },
        ],
        internalType: "struct IDelegationManager.OperatorDetails",
        name: "registeringOperatorDetails",
        type: "tuple",
      },
      { internalType: "string", name: "metadataURI", type: "string" },
    ],
    name: "registerAsOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newMinWithdrawalDelayBlocks",
        type: "uint256",
      },
    ],
    name: "setMinWithdrawalDelayBlocks",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPauserRegistry",
        name: "newPauserRegistry",
        type: "address",
      },
    ],
    name: "setPauserRegistry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IStrategy[]",
        name: "strategies",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "withdrawalDelayBlocks",
        type: "uint256[]",
      },
    ],
    name: "setStrategyWithdrawalDelayBlocks",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "slasher",
    outputs: [{ internalType: "contract ISlasher", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "stakerNonce",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "operator", type: "address" }],
    name: "stakerOptOutWindowBlocks",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "strategyManager",
    outputs: [
      { internalType: "contract IStrategyManager", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "contract IStrategy", name: "", type: "address" }],
    name: "strategyWithdrawalDelayBlocks",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "staker", type: "address" }],
    name: "undelegate",
    outputs: [
      { internalType: "bytes32[]", name: "withdrawalRoots", type: "bytes32[]" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "newPausedStatus", type: "uint256" },
    ],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "metadataURI", type: "string" }],
    name: "updateOperatorMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
const STRATEGY_MANAGER = [
  {
    inputs: [
      {
        internalType: "contract IDelegationManager",
        name: "_delegation",
        type: "address",
      },
      {
        internalType: "contract IEigenPodManager",
        name: "_eigenPodManager",
        type: "address",
      },
      { internalType: "contract ISlasher", name: "_slasher", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IStrategy",
        name: "strategy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint8", name: "version", type: "uint8" },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newPausedStatus",
        type: "uint256",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IPauserRegistry",
        name: "pauserRegistry",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IPauserRegistry",
        name: "newPauserRegistry",
        type: "address",
      },
    ],
    name: "PauserRegistrySet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IStrategy",
        name: "strategy",
        type: "address",
      },
    ],
    name: "StrategyAddedToDepositWhitelist",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IStrategy",
        name: "strategy",
        type: "address",
      },
    ],
    name: "StrategyRemovedFromDepositWhitelist",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "StrategyWhitelisterChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newPausedStatus",
        type: "uint256",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IStrategy",
        name: "strategy",
        type: "address",
      },
      { indexed: false, internalType: "bool", name: "value", type: "bool" },
    ],
    name: "UpdatedThirdPartyTransfersForbidden",
    type: "event",
  },
  {
    inputs: [],
    name: "DEPOSIT_TYPEHASH",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DOMAIN_TYPEHASH",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "staker", type: "address" },
      { internalType: "contract IERC20", name: "token", type: "address" },
      { internalType: "contract IStrategy", name: "strategy", type: "address" },
      { internalType: "uint256", name: "shares", type: "uint256" },
    ],
    name: "addShares",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IStrategy[]",
        name: "strategiesToWhitelist",
        type: "address[]",
      },
      {
        internalType: "bool[]",
        name: "thirdPartyTransfersForbiddenValues",
        type: "bool[]",
      },
    ],
    name: "addStrategiesToDepositWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IStrategy[]",
            name: "strategies",
            type: "address[]",
          },
          { internalType: "uint256[]", name: "shares", type: "uint256[]" },
          { internalType: "address", name: "staker", type: "address" },
          {
            components: [
              { internalType: "address", name: "withdrawer", type: "address" },
              { internalType: "uint96", name: "nonce", type: "uint96" },
            ],
            internalType:
              "struct IStrategyManager.DeprecatedStruct_WithdrawerAndNonce",
            name: "withdrawerAndNonce",
            type: "tuple",
          },
          {
            internalType: "uint32",
            name: "withdrawalStartBlock",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "delegatedAddress",
            type: "address",
          },
        ],
        internalType:
          "struct IStrategyManager.DeprecatedStruct_QueuedWithdrawal",
        name: "queuedWithdrawal",
        type: "tuple",
      },
    ],
    name: "calculateWithdrawalRoot",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "delegation",
    outputs: [
      {
        internalType: "contract IDelegationManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract IStrategy", name: "strategy", type: "address" },
      { internalType: "contract IERC20", name: "token", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "depositIntoStrategy",
    outputs: [{ internalType: "uint256", name: "shares", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract IStrategy", name: "strategy", type: "address" },
      { internalType: "contract IERC20", name: "token", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "address", name: "staker", type: "address" },
      { internalType: "uint256", name: "expiry", type: "uint256" },
      { internalType: "bytes", name: "signature", type: "bytes" },
    ],
    name: "depositIntoStrategyWithSignature",
    outputs: [{ internalType: "uint256", name: "shares", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "domainSeparator",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eigenPodManager",
    outputs: [
      { internalType: "contract IEigenPodManager", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "staker", type: "address" }],
    name: "getDeposits",
    outputs: [
      { internalType: "contract IStrategy[]", name: "", type: "address[]" },
      { internalType: "uint256[]", name: "", type: "uint256[]" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "initialOwner", type: "address" },
      {
        internalType: "address",
        name: "initialStrategyWhitelister",
        type: "address",
      },
      {
        internalType: "contract IPauserRegistry",
        name: "_pauserRegistry",
        type: "address",
      },
      { internalType: "uint256", name: "initialPausedStatus", type: "uint256" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IStrategy[]",
            name: "strategies",
            type: "address[]",
          },
          { internalType: "uint256[]", name: "shares", type: "uint256[]" },
          { internalType: "address", name: "staker", type: "address" },
          {
            components: [
              { internalType: "address", name: "withdrawer", type: "address" },
              { internalType: "uint96", name: "nonce", type: "uint96" },
            ],
            internalType:
              "struct IStrategyManager.DeprecatedStruct_WithdrawerAndNonce",
            name: "withdrawerAndNonce",
            type: "tuple",
          },
          {
            internalType: "uint32",
            name: "withdrawalStartBlock",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "delegatedAddress",
            type: "address",
          },
        ],
        internalType:
          "struct IStrategyManager.DeprecatedStruct_QueuedWithdrawal",
        name: "queuedWithdrawal",
        type: "tuple",
      },
    ],
    name: "migrateQueuedWithdrawal",
    outputs: [
      { internalType: "bool", name: "", type: "bool" },
      { internalType: "bytes32", name: "", type: "bytes32" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "nonces",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "newPausedStatus", type: "uint256" },
    ],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pauseAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint8", name: "index", type: "uint8" }],
    name: "paused",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pauserRegistry",
    outputs: [
      { internalType: "contract IPauserRegistry", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "staker", type: "address" },
      { internalType: "contract IStrategy", name: "strategy", type: "address" },
      { internalType: "uint256", name: "shares", type: "uint256" },
    ],
    name: "removeShares",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IStrategy[]",
        name: "strategiesToRemoveFromWhitelist",
        type: "address[]",
      },
    ],
    name: "removeStrategiesFromDepositWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPauserRegistry",
        name: "newPauserRegistry",
        type: "address",
      },
    ],
    name: "setPauserRegistry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newStrategyWhitelister",
        type: "address",
      },
    ],
    name: "setStrategyWhitelister",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract IStrategy", name: "strategy", type: "address" },
      { internalType: "bool", name: "value", type: "bool" },
    ],
    name: "setThirdPartyTransfersForbidden",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "slasher",
    outputs: [{ internalType: "contract ISlasher", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "stakerStrategyList",
    outputs: [
      { internalType: "contract IStrategy", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "staker", type: "address" }],
    name: "stakerStrategyListLength",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "contract IStrategy", name: "", type: "address" },
    ],
    name: "stakerStrategyShares",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "contract IStrategy", name: "", type: "address" }],
    name: "strategyIsWhitelistedForDeposit",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "strategyWhitelister",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "contract IStrategy", name: "", type: "address" }],
    name: "thirdPartyTransfersForbidden",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "newPausedStatus", type: "uint256" },
    ],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "contract IStrategy", name: "strategy", type: "address" },
      { internalType: "uint256", name: "shares", type: "uint256" },
      { internalType: "contract IERC20", name: "token", type: "address" },
    ],
    name: "withdrawSharesAsTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    name: "withdrawalRootPending",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
];
const STRATEGY = [
  {
    inputs: [
      {
        internalType: "contract IStrategyManager",
        name: "_strategyManager",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint8", name: "version", type: "uint8" },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "previousValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "MaxPerDepositUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "previousValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "MaxTotalDepositsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newPausedStatus",
        type: "uint256",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IPauserRegistry",
        name: "pauserRegistry",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IPauserRegistry",
        name: "newPauserRegistry",
        type: "address",
      },
    ],
    name: "PauserRegistrySet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newPausedStatus",
        type: "uint256",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      { internalType: "contract IERC20", name: "token", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "deposit",
    outputs: [{ internalType: "uint256", name: "newShares", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "explanation",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getTVLLimits",
    outputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_maxPerDeposit", type: "uint256" },
      { internalType: "uint256", name: "_maxTotalDeposits", type: "uint256" },
      {
        internalType: "contract IERC20",
        name: "_underlyingToken",
        type: "address",
      },
      {
        internalType: "contract IPauserRegistry",
        name: "_pauserRegistry",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_underlyingToken",
        type: "address",
      },
      {
        internalType: "contract IPauserRegistry",
        name: "_pauserRegistry",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "maxPerDeposit",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxTotalDeposits",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "newPausedStatus", type: "uint256" },
    ],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pauseAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint8", name: "index", type: "uint8" }],
    name: "paused",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pauserRegistry",
    outputs: [
      { internalType: "contract IPauserRegistry", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPauserRegistry",
        name: "newPauserRegistry",
        type: "address",
      },
    ],
    name: "setPauserRegistry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "newMaxPerDeposit", type: "uint256" },
      { internalType: "uint256", name: "newMaxTotalDeposits", type: "uint256" },
    ],
    name: "setTVLLimits",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "user", type: "address" }],
    name: "shares",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountShares", type: "uint256" },
    ],
    name: "sharesToUnderlying",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountShares", type: "uint256" },
    ],
    name: "sharesToUnderlyingView",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "strategyManager",
    outputs: [
      { internalType: "contract IStrategyManager", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalShares",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountUnderlying", type: "uint256" },
    ],
    name: "underlyingToShares",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountUnderlying", type: "uint256" },
    ],
    name: "underlyingToSharesView",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "underlyingToken",
    outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "newPausedStatus", type: "uint256" },
    ],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "user", type: "address" }],
    name: "userUnderlying",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "user", type: "address" }],
    name: "userUnderlyingView",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "depositor", type: "address" },
      { internalType: "contract IERC20", name: "token", type: "address" },
      { internalType: "uint256", name: "amountShares", type: "uint256" },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
const ERC20 = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "_spender", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "_from", type: "address" },
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { name: "_owner", type: "address" },
      { name: "_spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  { payable: true, stateMutability: "payable", type: "fallback" },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "owner", type: "address" },
      { indexed: true, name: "spender", type: "address" },
      { indexed: false, name: "value", type: "uint256" },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "from", type: "address" },
      { indexed: true, name: "to", type: "address" },
      { indexed: false, name: "value", type: "uint256" },
    ],
    name: "Transfer",
    type: "event",
  },
];

export default {
  BLS_APK_REGISTRY,
  INDEX_REGISTRY,
  AVS_DIRECTORY,
  OPERATOR_STATE_RETRIEVER,
  REGISTRY_COORDINATOR,
  STAKE_REGISTRY,
  SERVICE_MANAGER,
  SLASHER,
  DELEGATION_MANAGER,
  STRATEGY_MANAGER,
  STRATEGY,
  ERC20,
};
