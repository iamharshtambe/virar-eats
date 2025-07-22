import RestroCard from './RestroCard.tsx';
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRestaurants } from '../hooks/useRestaurants.ts';
import { useStatus } from '../hooks/useStatus.ts';

function RestroContainer() {
   const { restaurants, filteredRestaurants, setFilteredRestaurants } =
      useRestaurants();
   const [searchText, setSearchText] = useState('');
   const status = useStatus();

   function handleTopRatedRestros() {
      const filteredRestros = restaurants.filter(
         (restro) => restro.info.avgRating > 4.2
      );

      setFilteredRestaurants(filteredRestros);
   }

   function handleSearchRestros() {
      const filteredRestros = restaurants.filter((restro) =>
         restro.info.name.toLowerCase().includes(searchText.toLowerCase())
      );

      setFilteredRestaurants(filteredRestros);
   }

   if (status === false)
      return (
         <h2 className="mt-20 text-red-500 font-bold text-2xl">
            😵‍💫 Looks like you are offline, please check your internet connection
         </h2>
      );

   return restaurants.length === 0 ? (
      <div className="mt-20">Loading...</div>
   ) : (
      <>
         <div className="flex items-center justify-center gap-3">
            <input
               type="text"
               placeholder="Search..."
               value={searchText}
               onChange={(e) => setSearchText(e.target.value)}
               className="w-96 py-1 px-2 border rounded-4xl"
            />

            <Search
               onClick={handleSearchRestros}
               className="cursor-pointer"
               size={36}
            />
         </div>
         <button
            onClick={handleTopRatedRestros}
            className="border py-1 px-2 mt-8 rounded-2xl text-gray-500 shadow cursor-pointer"
         >
            Top Rated Restaurants
         </button>

         <div className="flex items-center justify-start flex-wrap gap-5 my-8">
            {filteredRestaurants.map((restro) => (
               <Link key={restro.info.id} to={`restaurants/${restro.info.id}`}>
                  <RestroCard restroObj={restro} />
               </Link>
            ))}
         </div>
      </>
   );
}

export default RestroContainer;
