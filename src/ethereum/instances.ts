// import { ethers } from 'ethers';
// import { CustomWallet } from './custom-wallet';
import { es } from 'eraswap-sdk';
// import { CertificateFactory } from './CertificateFactory';
import { CertificateFlattenCertificateFactory } from './CertificateFlattenCertificateFactory';

window.providerESN = new es.CustomProvider('mainnet');

window.certificateInstance = CertificateFlattenCertificateFactory.connect(
  // providerESN.resolveAddress(es.addresses[process.env.NODE_ENV].ESN.buildSurvey),
  '0xC95f044e001d6A0B2f3c37234ff4A734A1A2Da17',
  window.providerESN
);
