import { ethers } from 'ethers';
import Swal from 'sweetalert2';

export async function send_txn(hash, promise) {
  if (window.wallet) {
    try {
      const sur = await window.certificateInstance.connect(window.wallet).collect(hash);
      const receipt = await sur.wait();
      console.log('TXN Hash :', receipt);
      Swal.fire({
        icon: 'success',
        title: 'Great 👍',
        text: 'You have Register you Certificate ',
      });
    } catch (e) {
      const add = await window.wallet.getAddress();
      const x = new ethers.VoidSigner(add, window.providerESN);
      try {
        const A = await window.certificateInstance.connect(x).estimateGas.collect(hash);
        console.log(A);
      } catch (e) {
        console.log('Error is : ', e);

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${e}`,
        });
        console.log(e);
      }
    }
  } else
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please Connect to wallet!',
    });
}
