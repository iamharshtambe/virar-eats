function Header() {
   return (
      <div className="flex items-center justify-between my-8">
         <h1 className="font-mysoul text-5xl cursor-pointer">Virar Eats</h1>
         <div className="flex gap-20 text-lg">
            <a>Home</a>
            <a>About Us</a>
            <a>Cart</a>
         </div>
      </div>
   );
}

export default Header;
