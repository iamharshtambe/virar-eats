import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/appStore.ts";
import { MENU_IMG_URL } from "../utils/constants.ts";
import { clearCart } from "../store/cartSlice.ts";

function Cart() {
  const cartItems = useSelector((store: RootState) => store.cart.items);
  const disptach = useDispatch();

  function handleClick() {
    disptach(clearCart());
  }

  return (
    <>
      <h1 className="text-center text-2xl font-bold">My Cart</h1>
      {cartItems.length === 0 ? (
        <p className="my-6 text-center text-xl">
          Your cart is empty! <br /> Add items to your cart
        </p>
      ) : (
        <div>
          {cartItems.map((item, index) => {
            const { name, description, defaultPrice, price, imageId } =
              item.card.info;

            const finalPrice =
              (defaultPrice ?? price) ? (defaultPrice ?? price)! / 100 : 0;

            return (
              <div
                key={item.card.info.id || index}
                className="my-8 flex items-center justify-between gap-6"
              >
                <div className="flex-1">
                  <p className="font-bold">{name}</p>
                  <p>₹{finalPrice}</p>
                  {description && (
                    <p className="text-gray-500">{description}</p>
                  )}
                </div>
                <div className="flex-shrink-0">
                  {imageId && (
                    <img
                      className="relative h-24 w-24 rounded-lg object-cover"
                      src={MENU_IMG_URL + imageId}
                      alt={name}
                    />
                  )}
                </div>
              </div>
            );
          })}
          <div className="my-6 text-center">
            <button
              className="h-9 w-2/12 rounded-4xl bg-black text-xl text-white hover:bg-gray-500"
              onClick={handleClick}
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
