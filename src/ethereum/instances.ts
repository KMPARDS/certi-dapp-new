// import { ethers } from 'ethers';
// import { CustomWallet } from './custom-wallet';
import { es } from 'eraswap-sdk';
// import { CertificateFactory } from './CertificateFactory';
import { CertificateFlattenCertificateFactory } from './CertificateFlattenCertificateFactory';

window.providerESN = new es.CustomProvider('mainnet');

window.certificateInstance = CertificateFlattenCertificateFactory.connect(
  // providerESN.resolveAddress(es.addresses[process.env.NODE_ENV].ESN.buildSurvey),
  '0x506c48B648665FD27842bFb0AC193524EE9B0368',
  window.providerESN
);
