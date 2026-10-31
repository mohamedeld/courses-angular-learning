import { Component } from '@angular/core';
import { PAYMENT_METHOD } from '../tokens/payment-method-tokens';

@Component({
  selector: 'app-credit-card',
  providers: [
    {
      provide: PAYMENT_METHOD,
      useValue: 'credit-card',
    },
  ],
  template: `
    <div class="rounded-xl border p-4">
      <h3 class="font-semibold">Credit Card</h3>

      <input class="mt-3 w-full rounded border p-2" placeholder="Card number" />
    </div>
  `,
})
export class CreditCardComponent {}
