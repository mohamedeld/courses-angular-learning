import { Component } from '@angular/core';
import { PAYMENT_METHOD } from '../tokens/payment-method-tokens';

@Component({
  selector: 'app-wallet',
  providers: [
    {
      provide: PAYMENT_METHOD,
      useValue: 'wallet',
    },
  ],
  template: `
    <div class="rounded-xl border p-4">
      <h3 class="font-semibold">Digital Wallet</h3>

      <p>Pay using your digital wallet.</p>
    </div>
  `,
})
export class WalletComponent {}
