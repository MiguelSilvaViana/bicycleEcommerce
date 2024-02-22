import { useShoppingCart } from 'use-shopping-cart';

const CheckoutBtn = () => {
  const handleCheckout = async () => {
    try {
      const res = await redirectToCheckout();
      if (res?.error) {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { redirectToCheckout } = useShoppingCart();

  return (
    <button
      className='w-full btn btn-primary'
      onClick={handleCheckout}
    >
      Proceed to checkout
    </button>
  );
};

export default CheckoutBtn;
