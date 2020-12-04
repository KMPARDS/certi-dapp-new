// import { ethers } from 'ethers';
// import { CustomWallet } from './custom-wallet';
import { es } from 'eraswap-sdk';
// import { CertificateFactory } from './CertificateFactory';
import { CertificateFlattenCertificateFactory } from './CertificateFlattenCertificateFactory';

window.providerESN = new es.CustomProvider('mainnet');

window.certificateInstance = CertificateFlattenCertificateFactory.connect(
  // providerESN.resolveAddress(es.addresses[process.env.NODE_ENV].ESN.buildSurvey),
  '0x4E6CCE8123c93341c57dea5FE8f298fE9eb6fAD4',
  window.providerESN
);
