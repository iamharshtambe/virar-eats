import { Search } from 'lucide-react';

function SearchBar() {
   return (
      <div className="flex items-center justify-center gap-3">
         <input
            type="text"
            placeholder="Search..."
            className="w-96 py-1 px-2 border rounded-4xl"
         />

         <Search className="cursor-pointer" size={36} />
      </div>
   );
}

export default SearchBar;
