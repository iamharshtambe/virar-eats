import SearchBar from './SearchBar.tsx';

function Header() {
   return (
      <>
         <div className="flex items-center justify-between my-8">
            <h1 className="font-mysoul text-5xl cursor-pointer">Virar Eats</h1>
            <div className="flex gap-20 text-lg">
               <a className="cursor-pointer">Home</a>
               <a className="cursor-pointer">About Us</a>
               <a className="cursor-pointer">Cart</a>
            </div>
         </div>

         <SearchBar />
      </>
   );
}

export default Header;
