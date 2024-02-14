import { useEffect } from 'react';

import {
  SQUARE_CONFIG
} from '../../constants';

import './index.css';

const PaymentForm = ({
  email,
  setEmail,
  onPayment,
  onClickPaymentForm
}) => {
  useEffect(() => {
    const frond = window.FernSDK.Frond({
      rootElement: document.getElementById('buy'),
      squareAppId: SQUARE_CONFIG.SQUARE_APP_ID,
      squareLocationId: SQUARE_CONFIG.SQUARE_LOCATION_ID,
      onPayment
    });

    frond.onShow({ cards: [] });
  }, []);

  return (
    <div className="payment-form" onClick={onClickPaymentForm}>
      <div id="buy">
        <h3>Pre-Order &mdash; $9.99 USD</h3>
        <p>Your email address is linked to your proof-of-purchase.</p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default PaymentForm;
