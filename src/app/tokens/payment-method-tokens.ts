import { InjectionToken } from '@angular/core';

export type PaymentMethodType = 'credit-card' | 'wallet';

export const PAYMENT_METHOD = new InjectionToken<PaymentMethodType>('PAYMENT_METHOD');
