import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isLogin, setIsLogin] = useState(false);

  function handleClick() {
    setIsLogin(!isLogin);
  }

  return (
    <>
      <div className="my-8 flex items-center justify-between">
        <h1 className="font-mysoul cursor-pointer text-5xl">Virar Eats</h1>
        <div className="flex gap-20 text-lg">
          <Link className="cursor-pointer" to="/">
            Home
          </Link>
          <Link className="cursor-pointer" to="/about">
            About Us
          </Link>
          <a className="cursor-pointer">Cart</a>
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
