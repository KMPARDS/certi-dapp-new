// import { ethers } from 'ethers';
// import { CustomWallet } from './custom-wallet';
import { es } from 'eraswap-sdk';
import { CertificateFactory } from './CertificateFactory';

window.providerESN = new es.CustomProvider('testnet');

window.certificateInstance = CertificateFactory.connect(
  // providerESN.resolveAddress(es.addresses[process.env.NODE_ENV].ESN.buildSurvey),
  '0x3a458fB2953505132b0bb3d3E4aa01a3F0504c14',
  window.providerESN
);
