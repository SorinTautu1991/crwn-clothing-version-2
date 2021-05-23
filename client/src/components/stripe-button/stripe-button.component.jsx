import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IhdLdGVQte2ddRbJcukJNSnGbaQGV4bVzVf3KP9ogU69MtjWK39u7Qh8wBqF0aQOIRW3bMpyigF9zyDbqYfkWAY00Mm0BRU9Q';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert('Payment successfull!');
      })
      .catch((error) => {
        console.log('Payment error: ' + JSON.parse(error));
        alert(
          'There was a issue to your payment. Please use the provided credit card!'
        );
      });
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
