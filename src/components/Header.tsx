import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/appStore.ts";

function Header() {
  const [isLogin, setIsLogin] = useState(false);

  const cartItems = useSelector((store: RootState) => store.cart.items);

  function handleClick() {
    setIsLogin(!isLogin);
  }

  return (
    <>
      <div className="my-8 flex items-center justify-between">
        <Link className="cursor-pointer" to="/">
          <h1 className="font-mysoul cursor-pointer text-5xl">Virar Eats</h1>
        </Link>
        <div className="flex gap-20 text-lg">
          <Link className="cursor-pointer" to="/">
            Home
          </Link>
          <Link className="cursor-pointer" to="/about">
            About Us
          </Link>
          <Link to="/cart">
            <span className="inline-flex items-center gap-1">
              <ShoppingCart className="h-5 w-5" /> ({cartItems.length})
            </span>
          </Link>

          <button
            onClick={handleClick}
            className="cursor-pointer rounded-2xl border px-3 shadow"
          >
            {isLogin ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
