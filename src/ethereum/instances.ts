// import { ethers } from 'ethers';
// import { CustomWallet } from './custom-wallet';
import { es } from 'eraswap-sdk';
// import { CertificateFactory } from './CertificateFactory';
import { CertiDappFactory } from './CertiDappFactory';

window.providerESN = new es.CustomProvider('mainnet');

window.certificateInstance = CertiDappFactory.connect(
  // providerESN.resolveAddress(es.addresses[process.env.NODE_ENV].ESN.buildSurvey),
  '0xcc54c1D460D3f0cC35605EdD2A8A25324fb5da22',
  window.providerESN
);
