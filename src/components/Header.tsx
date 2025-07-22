import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
   const [isLogin, setIsLogin] = useState(false);

   function handleClick() {
      setIsLogin(!isLogin);
   }

   return (
      <>
         <div className="flex items-center justify-between my-8">
            <h1 className="font-mysoul text-5xl cursor-pointer">Virar Eats</h1>
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
                  className="border px-3 rounded-2xl shadow cursor-pointer"
               >
                  {isLogin ? 'Logout' : 'Login'}
               </button>
            </div>
         </div>
      </>
   );
}

export default Header;
