/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {Signer} from "ethers";
import {Provider, TransactionRequest} from "@ethersproject/providers";
import {Contract, ContractFactory, Overrides} from "@ethersproject/contracts";

import type {CertificateFlattenCertificate} from "./CertificateFlattenCertificate"; 

export class CertificateFlattenCertificateFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<CertificateFlattenCertificate> {
    return super.deploy(overrides || {}) as Promise<
      CertificateFlattenCertificate
    >;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CertificateFlattenCertificate {
    return super.attach(address) as CertificateFlattenCertificate;
  }
  connect(signer: Signer): CertificateFlattenCertificateFactory {
    return super.connect(signer) as CertificateFlattenCertificateFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CertificateFlattenCertificate {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CertificateFlattenCertificate;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_auth",
        type: "address",
      },
    ],
    name: "Authorities",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "hashedinput",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "doner",
        type: "address",
      },
    ],
    name: "Donate",
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
        indexed: false,
        internalType: "bytes32",
        name: "hashedinput",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_signer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_verifier",
        type: "address",
      },
    ],
    name: "RegisterCertificates",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "hashedinput",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_signer",
        type: "address",
      },
    ],
    name: "SignCertificate",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "Incentives",
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
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_website",
        type: "string",
      },
      {
        internalType: "string",
        name: "_image",
        type: "string",
      },
    ],
    name: "addAuthority",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "announceIncentive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "authorities",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "website",
        type: "string",
      },
      {
        internalType: "string",
        name: "image",
        type: "string",
      },
      {
        internalType: "enum Certificate.List",
        name: "status",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "certificates",
    outputs: [
      {
        internalType: "string",
        name: "hash",
        type: "string",
      },
      {
        internalType: "address",
        name: "Signer",
        type: "address",
      },
      {
        internalType: "address",
        name: "Verifier",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "Balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "input",
        type: "bytes32",
      },
    ],
    name: "collect",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "dayswappers",
    outputs: [
      {
        internalType: "contract IDayswappers",
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
        internalType: "bytes32",
        name: "input",
        type: "bytes32",
      },
    ],
    name: "donate",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "input",
        type: "bytes32",
      },
    ],
    name: "getBalance",
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
    name: "kycDapp",
    outputs: [
      {
        internalType: "contract IKycDapp",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nrtManager",
    outputs: [
      {
        internalType: "contract INRTManager",
        name: "",
        type: "address",
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
    name: "prepaidEs",
    outputs: [
      {
        internalType: "contract IPrepaidEs",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "randomnessManager",
    outputs: [
      {
        internalType: "contract RandomnessManager",
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
        internalType: "string",
        name: "_hash",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_Signer",
        type: "address",
      },
    ],
    name: "registerCertificates",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_username",
        type: "bytes32",
      },
    ],
    name: "resolveAddress",
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
        internalType: "bytes32",
        name: "_username",
        type: "bytes32",
      },
    ],
    name: "resolveAddressStrict",
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
        name: "_wallet",
        type: "address",
      },
    ],
    name: "resolveUsername",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
    ],
    name: "resolveUsernameStrict",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_kycDapp",
        type: "address",
      },
    ],
    name: "setKycDapp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    name: "splitSignature",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "timeallyClub",
    outputs: [
      {
        internalType: "contract ITimeAllyClub",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timeallyManager",
    outputs: [
      {
        internalType: "contract ITimeAllyManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timeallyPromotionalBucket",
    outputs: [
      {
        internalType: "contract ITimeAllyPromotionalBucket",
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
    inputs: [],
    name: "validatorManager",
    outputs: [
      {
        internalType: "contract IValidatorManager",
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
        internalType: "string",
        name: "message",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "verifyString",
    outputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600061001b61006a565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006e565b3390565b6124c18061007d6000396000f3fe6080604052600436106101ac5760003560e01c80638e739461116100ec578063c37067fa1161008a578063f4213a9b11610064578063f4213a9b14610473578063f456795114610493578063fd9b0642146104a8578063fe55bde9146104bb576101ac565b8063c37067fa1461042b578063dccc1b081461043e578063f2fde38b14610453576101ac565b806398b1a44d116100c657806398b1a44d146103b2578063a7017b52146103d2578063a7bb5803146103e7578063bf8c314414610416576101ac565b80638e7394611461034257806391223d69146103625780639615774314610392576101ac565b8063497777d5116101595780636a14920a116101335780636a14920a146102c8578063722d2b3e146102e8578063742f0688146102fd5780638da5cb5b1461032d576101ac565b8063497777d51461027357806367b48b181461029357806368574e76146102a8576101ac565b80631d849b301161018a5780631d849b301461021e5780631f70693c1461023e578063208b38041461025e576101ac565b80630d541ecb146101b15780630df5202f146101e75780631c98dde214610209575b600080fd5b3480156101bd57600080fd5b506101d16101cc366004611c37565b6104d0565b6040516101de9190611f50565b60405180910390f35b3480156101f357600080fd5b506101fc61050a565b6040516101de9190611f1f565b61021c610217366004611dd0565b61053a565b005b34801561022a57600080fd5b506101fc610239366004611c8f565b6108e4565b34801561024a57600080fd5b506101d1610259366004611c37565b610918565b34801561026a57600080fd5b506101fc6109b2565b34801561027f57600080fd5b5061021c61028e366004611c8f565b6109dd565b34801561029f57600080fd5b506101fc610a69565b3480156102b457600080fd5b506101fc6102c3366004611cfa565b610a78565b3480156102d457600080fd5b506101fc6102e3366004611c8f565b610bd7565b3480156102f457600080fd5b506101fc610c71565b34801561030957600080fd5b5061031d610318366004611c8f565b610c9c565b6040516101de9493929190611fc0565b34801561033957600080fd5b506101fc610d56565b34801561034e57600080fd5b506101d161035d366004611c8f565b610d65565b34801561036e57600080fd5b5061038261037d366004611c37565b610d7a565b6040516101de9493929190611ff6565b34801561039e57600080fd5b5061021c6103ad366004611c8f565b610f54565b3480156103be57600080fd5b5061021c6103cd366004611c37565b610f87565b3480156103de57600080fd5b506101fc610fc2565b3480156103f357600080fd5b50610407610402366004611cbf565b610fed565b6040516101de9392919061242f565b34801561042257600080fd5b506101fc61101c565b61021c610439366004611c8f565b611047565b34801561044a57600080fd5b506101fc6113e1565b34801561045f57600080fd5b5061021c61046e366004611c37565b61140c565b34801561047f57600080fd5b506101d161048e366004611c37565b61144a565b34801561049f57600080fd5b506101fc61145c565b6101d16104b6366004611d5b565b611487565b3480156104c757600080fd5b506101fc61191d565b6000806104dc83610918565b9050806105045760405162461bcd60e51b81526004016104fb9061204b565b60405180910390fd5b92915050565b60006105357f4e52545f4d414e414745520000000000000000000000000000000000000000006108e4565b905090565b3360009081526003602081905260408220015460ff16600281111561055b57fe5b146105785760405162461bcd60e51b81526004016104fb9061224d565b34674563918244f400001461059f5760405162461bcd60e51b81526004016104fb9061213c565b33600090815260036020908152604090912084516105bf92860190611b2a565b5033600090815260036020908152604090912083516105e692600190920191850190611b2a565b50336000908152600360209081526040909120825161060d92600290920191840190611b2a565b5033600090815260036020819052604090912001805460ff19166001179055610634610a69565b6001600160a01b03166360f140d8336040518263ffffffff1660e01b815260040161065f9190611f1f565b60206040518083038186803b15801561067757600080fd5b505afa15801561068b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106af9190611c6f565b156106d35733600090815260036020819052604090912001805460ff191660021790555b7fe945b2cef49c2665d2844db1f30bb95235d51ac66ae619255867e798a414474b336040516107029190611f1f565b60405180910390a1336000908152600460205260408120546107359060649061072f903490600101611948565b90611982565b905061073f6109b2565b6001600160a01b0316623e8ec482336040518060600160405280603281526020016000815260200160328152506040518463ffffffff1660e01b8152600401610789929190611f33565b6000604051808303818588803b1580156107a257600080fd5b505af11580156107b6573d6000803e3d6000fd5b50505050506107c36109b2565b6001600160a01b0316637ef407056107e1606461072f856014611948565b604080516060810182526032808252600060208301528183015290516001600160e01b031960e085901b16815261081c913391600401611f33565b6000604051808303818588803b15801561083557600080fd5b505af1158015610849573d6000803e3d6000fd5b50505050506000610858610d56565b6001600160a01b031661086e34600285026119c4565b60405161087a90611f1c565b60006040518083038185875af1925050503d80600081146108b7576040519150601f19603f3d011682016040523d82523d6000602084013e6108bc565b606091505b50509050806108dd5760405162461bcd60e51b81526004016104fb906123d2565b5050505050565b6000806108f083610bd7565b90506001600160a01b0381166105045760405162461bcd60e51b81526004016104fb9061233e565b6001546040517f1f70693c0000000000000000000000000000000000000000000000000000000081526000916001600160a01b031690631f70693c90610962908590600401611f1f565b60206040518083038186803b15801561097a57600080fd5b505afa15801561098e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105049190611ca7565b60006105357f44415953574150504552530000000000000000000000000000000000000000006108e4565b600081815260026020819052604090912001546001600160a01b03163314610a175760405162461bcd60e51b81526004016104fb9061239b565b600081815260026020526040808220600301549051339282156108fc02929190818181858888f19350505050158015610a54573d6000803e3d6000fd5b50600090815260026020526040812060030155565b6001546001600160a01b031690565b6040805180820190915260208082527f19457468657265756d205369676e6564204d6573736167653a0a303030303030908201528251600091906039820190620f423f811115610ac757600080fd5b6000620186a05b8015610b1b576000818481610adf57fe5b04905080610af65782610af65750600a9004610ace565b80820290930392600190920191600a8260019096019504915060300180855350610ace565b81610b2957601b9150610b30565b601a820191505b8185526000806000610b418a610fed565b6040519295509093509150600090610b5f908a908e90602001611eed565b60405160208183030381529060405280519060200120905060018185858560405160008152602001604052604051610b9a9493929190611f8f565b6020604051602081039080840390855afa158015610bbc573d6000803e3d6000fd5b5050604051601f1901519d9c50505050505050505050505050565b6001546040517f6a14920a0000000000000000000000000000000000000000000000000000000081526000916001600160a01b031690636a14920a90610c21908590600401611f50565b60206040518083038186803b158015610c3957600080fd5b505afa158015610c4d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105049190611c53565b60006105357f54494d45414c4c595f4d414e41474552000000000000000000000000000000006108e4565b600260208181526000928352604092839020805484516001821615610100026000190190911693909304601f8101839004830284018301909452838352928391830182828015610d2d5780601f10610d0257610100808354040283529160200191610d2d565b820191906000526020600020905b815481529060010190602001808311610d1057829003601f168201915b505050506001830154600284015460039094015492936001600160a01b03918216939116915084565b6000546001600160a01b031690565b60009081526002602052604090206003015490565b60036020908152600091825260409182902080548351601f60026000196101006001861615020190931692909204918201849004840281018401909452808452909291839190830182828015610e115780601f10610de657610100808354040283529160200191610e11565b820191906000526020600020905b815481529060010190602001808311610df457829003601f168201915b505050505090806001018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610eaf5780601f10610e8457610100808354040283529160200191610eaf565b820191906000526020600020905b815481529060010190602001808311610e9257829003601f168201915b50505060028085018054604080516020601f6000196101006001871615020190941695909504928301859004850281018501909152818152959695945090925090830182828015610f415780601f10610f1657610100808354040283529160200191610f41565b820191906000526020600020905b815481529060010190602001808311610f2457829003601f168201915b5050506003909301549192505060ff1684565b6063811115610f755760405162461bcd60e51b81526004016104fb90612307565b33600090815260046020526040902055565b33610f90610d56565b6001600160a01b031614610fb65760405162461bcd60e51b81526004016104fb90612173565b610fbf81611a06565b50565b60006105357f54494d45414c4c595f50524f4d4f54494f4e414c5f4255434b455400000000006108e4565b6000806000835160411461100057600080fd5b5050506020810151604082015160609092015160001a92909190565b60006105357f52414e444f4d4e4553535f4d414e4147455200000000000000000000000000006108e4565b670de0b6b3a7640000341161106e5760405162461bcd60e51b81526004016104fb906120a8565b60008181526002602052604090819020600301805434019055517f9752c173c744da0a746d44f2183089047fe657bd541d8818604feea51b6fcc53906110b79083903390611f59565b60405180910390a16000818152600260208181526040808420909201546001600160a01b03168084526004909152908220549091906111019060649061072f903490600101611948565b905061110b6109b2565b6001600160a01b0316623e8ec4611128606461072f856014611948565b604080516060810182526032808252600060208301528183015290516001600160e01b031960e085901b168152611163918791600401611f33565b6000604051808303818588803b15801561117c57600080fd5b505af1158015611190573d6000803e3d6000fd5b505050505061119d6109b2565b6001600160a01b0316637ef407056111bb606461072f856014611948565b604080516060810182526032808252600060208301528183015290516001600160e01b031960e085901b1681526111f6918791600401611f33565b6000604051808303818588803b15801561120f57600080fd5b505af1158015611223573d6000803e3d6000fd5b50505050506112306109b2565b6001600160a01b0316623e8ec461124d606461072f856014611948565b604080516060810182526032808252600060208301528183015290516001600160e01b031960e085901b168152611288913391600401611f33565b6000604051808303818588803b1580156112a157600080fd5b505af11580156112b5573d6000803e3d6000fd5b50505050506112c26109b2565b6001600160a01b0316637ef407056112e0606461072f856014611948565b604080516060810182526032808252600060208301528183015290516001600160e01b031960e085901b16815261131b913391600401611f33565b6000604051808303818588803b15801561133457600080fd5b505af1158015611348573d6000803e3d6000fd5b50505050506000826001600160a01b031661136c83346119c490919063ffffffff16565b60405161137890611f1c565b60006040518083038185875af1925050503d80600081146113b5576040519150601f19603f3d011682016040523d82523d6000602084013e6113ba565b606091505b50509050806113db5760405162461bcd60e51b81526004016104fb906123d2565b50505050565b60006105357f54494d45414c4c595f434c5542000000000000000000000000000000000000006108e4565b611414611a35565b6000546001600160a01b039081169116146114415760405162461bcd60e51b81526004016104fb90612173565b610fbf81611a39565b60046020526000908152604090205481565b60006105357f505245504149445f4553000000000000000000000000000000000000000000006108e4565b600080833360405160200161149d929190611ea3565b60408051808303601f190181529181528151602092830120600081815260029093529120600101549091506001600160a01b03848116911614156114f35760405162461bcd60e51b81526004016104fb906120df565b34670de0b6b3a76400001461151a5760405162461bcd60e51b81526004016104fb906121df565b60006115268686610a78565b9050836001600160a01b0316816001600160a01b0316146115595760405162461bcd60e51b81526004016104fb906121a8565b6000828152600260209081526040909120875161157892890190611b2a565b50600082815260026020819052604080832060018101805473ffffffffffffffffffffffffffffffffffffffff199081166001600160a01b038b16179091559281018054339416841790556003019290925590517f0fca24cadf6a61caccbcfa6acd1610308626552bc06700db2923d96aaa34795f916115fb9185918891611f70565b60405180910390a16001600160a01b0384166000908152600460205260408120548591906116349060649061072f903490600101611948565b905061163e6109b2565b6001600160a01b0316623e8ec461165b606461072f856014611948565b604080516060810182526032808252600060208301528183015290516001600160e01b031960e085901b168152611696918b91600401611f33565b6000604051808303818588803b1580156116af57600080fd5b505af11580156116c3573d6000803e3d6000fd5b50505050506116d06109b2565b6001600160a01b0316637ef407056116ee606461072f856014611948565b604080516060810182526032808252600060208301528183015290516001600160e01b031960e085901b168152611729918b91600401611f33565b6000604051808303818588803b15801561174257600080fd5b505af1158015611756573d6000803e3d6000fd5b50505050506117636109b2565b6001600160a01b0316623e8ec4611780606461072f856014611948565b604080516060810182526032808252600060208301528183015290516001600160e01b031960e085901b1681526117bb913391600401611f33565b6000604051808303818588803b1580156117d457600080fd5b505af11580156117e8573d6000803e3d6000fd5b50505050506117f56109b2565b6001600160a01b0316637ef40705611813606461072f856014611948565b604080516060810182526032808252600060208301528183015290516001600160e01b031960e085901b16815261184e913391600401611f33565b6000604051808303818588803b15801561186757600080fd5b505af115801561187b573d6000803e3d6000fd5b50505050506000866001600160a01b031661189f83346119c490919063ffffffff16565b6040516118ab90611f1c565b60006040518083038185875af1925050503d80600081146118e8576040519150601f19603f3d011682016040523d82523d6000602084013e6118ed565b606091505b505090508061190e5760405162461bcd60e51b81526004016104fb906123d2565b509293505050505b9392505050565b60006105357f56414c494441544f525f4d414e414745520000000000000000000000000000006108e4565b60008261195757506000610504565b8282028284828161196457fe5b04146119165760405162461bcd60e51b81526004016104fb906122aa565b600061191683836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611ac7565b600061191683836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611afe565b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b3390565b6001600160a01b038116611a5f5760405162461bcd60e51b81526004016104fb90612216565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b60008183611ae85760405162461bcd60e51b81526004016104fb9190611fad565b506000838581611af457fe5b0495945050505050565b60008184841115611b225760405162461bcd60e51b81526004016104fb9190611fad565b505050900390565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611b6b57805160ff1916838001178555611b98565b82800160010185558215611b98579182015b82811115611b98578251825591602001919060010190611b7d565b50611ba4929150611ba8565b5090565b5b80821115611ba45760008155600101611ba9565b600082601f830112611bcd578081fd5b813567ffffffffffffffff80821115611be257fe5b6040516020601f19601f8501168201018181108382111715611c0057fe5b604052828152925082848301602001861015611c1b57600080fd5b8260208601602083013760006020848301015250505092915050565b600060208284031215611c48578081fd5b813561191681612476565b600060208284031215611c64578081fd5b815161191681612476565b600060208284031215611c80578081fd5b81518015158114611916578182fd5b600060208284031215611ca0578081fd5b5035919050565b600060208284031215611cb8578081fd5b5051919050565b600060208284031215611cd0578081fd5b813567ffffffffffffffff811115611ce6578182fd5b611cf284828501611bbd565b949350505050565b60008060408385031215611d0c578081fd5b823567ffffffffffffffff80821115611d23578283fd5b611d2f86838701611bbd565b93506020850135915080821115611d44578283fd5b50611d5185828601611bbd565b9150509250929050565b600080600060608486031215611d6f578081fd5b833567ffffffffffffffff80821115611d86578283fd5b611d9287838801611bbd565b94506020860135915080821115611da7578283fd5b50611db486828701611bbd565b9250506040840135611dc581612476565b809150509250925092565b600080600060608486031215611de4578283fd5b833567ffffffffffffffff80821115611dfb578485fd5b611e0787838801611bbd565b94506020860135915080821115611e1c578384fd5b611e2887838801611bbd565b93506040860135915080821115611e3d578283fd5b50611e4a86828701611bbd565b9150509250925092565b8060005b60038110156113db578151845260209384019390910190600101611e58565b60008151808452611e8f81602086016020860161244a565b601f01601f19169290920160200192915050565b60008351611eb581846020880161244a565b60609390931b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000169190920190815260140192915050565b60008351611eff81846020880161244a565b835190830190611f1381836020880161244a565b01949350505050565b90565b6001600160a01b0391909116815260200190565b6001600160a01b0383168152608081016119166020830184611e54565b90815260200190565b9182526001600160a01b0316602082015260400190565b9283526001600160a01b03918216602084015216604082015260600190565b93845260ff9290921660208401526040830152606082015260800190565b6000602082526119166020830184611e77565b600060808252611fd36080830187611e77565b6001600160a01b0395861660208401529390941660408201526060015292915050565b6000608082526120096080830187611e77565b828103602084015261201b8187611e77565b9050828103604084015261202f8186611e77565b9150506003831061203c57fe5b82606083015295945050505050565b6020808252602a908201527f52656769737472793a205245534f4c5645445f4e554c4c5f555345524e414d4560408201527f5f494e5f53545249435400000000000000000000000000000000000000000000606082015260800190565b6020808252600e908201527f496e76616c696420616d6f756e74000000000000000000000000000000000000604082015260600190565b60208082526027908201527f796f75206861766520616c7265616479205369676e207468697320436572746960408201527f6669636174657300000000000000000000000000000000000000000000000000606082015260800190565b6020808252601a908201527f596f75206e65656420746f206164642035455320617320506f53000000000000604082015260600190565b6020808252818101527f4f776e61626c653a2043414c4c45525f49535f4e4f545f5448455f4f574e4552604082015260600190565b60208082526018908201527f494e56414c494420436572746966696361746520686173680000000000000000604082015260600190565b60208082526016908201527f496e73756666696369656e742046756e64283145532900000000000000000000604082015260600190565b6020808252601f908201527f4f776e61626c653a204e45575f4f574e45525f49535f5a45524f5f4144445200604082015260600190565b60208082526024908201527f596f75206861766520616c7265616479206c6973746564206f6e20436572746960408201527f4441707000000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f60408201527f7700000000000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526018908201527f496e63656e74697665732063616e277420626520313030250000000000000000604082015260600190565b60208082526026908201527f52656769737472793a205245534f4c5645445f5a45524f5f414444525f494e5f60408201527f5354524943540000000000000000000000000000000000000000000000000000606082015260800190565b6020808252601d908201527f596f7520617265206e6f7420617574686f72697a656420666f72206974000000604082015260600190565b60208082526022908201527f4365727469444170703a2050524f4649545f5452414e534645525f4641494c4960408201527f4e47000000000000000000000000000000000000000000000000000000000000606082015260800190565b60ff9390931683526020830191909152604082015260600190565b60005b8381101561246557818101518382015260200161244d565b838111156113db5750506000910152565b6001600160a01b0381168114610fbf57600080fdfea26469706673582212203c72e13e6703c332e45767c6fbefad00e030124dd96b9779ff778f50f810d7b464736f6c63430007020033";