import { ethers } from 'ethers';
import { CustomProvider } from 'eraswap-sdk/dist/custom-provider';
import { CertiDapp } from './ethereum/CertiDapp';

// import { CustomWallet } from './ethereum/custom-wallet';
// import { JsonRpcSigner } from 'ethers'

// mark the typings of your global variables
declare global {
  interface Window {
    provider: ethers.providers.JsonRpcProvider;
    providerESN: CustomProvider;
    wallet: any;
    ethereum: ethers.providers.ExternalProvider;
    certificateInstance: CertiDapp;
  }
}
