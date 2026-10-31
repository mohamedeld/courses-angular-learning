import { Component, contentChild, inject } from '@angular/core';
import { PAYMENT_METHOD } from '../tokens/payment-method-tokens';

@Component({
  selector: 'app-payment-container',
  template: `
    <section class="rounded-2xl bg-white p-6 shadow">
      <h2 class="mb-4 text-xl font-bold">Checkout</h2>

      <ng-content />

      <p class="mt-4 text-sm text-gray-500">
        Selected method: {{ paymentMethod() ?? 'Not selected' }}
      </p>

      @if (paymentMethod() === 'credit-card') {
        <button class="mt-3 rounded-lg bg-violet-600 px-4 py-2 text-white">Pay by Card</button>
      } @else if (paymentMethod() === 'wallet') {
        <button class="mt-3 rounded-lg bg-emerald-600 px-4 py-2 text-white">Pay by Wallet</button>
      }
    </section>
  `,
})
export class PaymentContainerComponent {
  paymentMethod = contentChild(PAYMENT_METHOD);
}
