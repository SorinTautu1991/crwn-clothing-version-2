import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IhdLdGVQte2ddRbJcukJNSnGbaQGV4bVzVf3KP9ogU69MtjWK39u7Qh8wBqF0aQOIRW3bMpyigF9zyDbqYfkWAY00Mm0BRU9Q';

  const onToken = (token) => {
    console.log(token);
    alert('Payment successfull!');
  };

  return (
    <StripeCheckout
      lebel="Pay Now"
      name="Crwn Clothing version 2.0"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
