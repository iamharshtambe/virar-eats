import RestroCard from './RestroCard.tsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

type RestroInfo = {
   info: {
      id?: string;
      name: string;
      cloudinaryImageId: string;
      areaName: string;
      cuisines: string[];
      avgRating: number;
      sla: {
         deliveryTime: number;
      };
   };
};

type Restaurants = {
   data: {
      cards: {
         card: {
            card: {
               gridElements: {
                  infoWithStyle: {
                     restaurants: RestroInfo[];
                  };
               };
            };
         };
      }[];
   };
};

function RestroContainer() {
   const [restaurants, setRestaurants] = useState<RestroInfo[]>([]);
   const [filteredRestaurants, setFilteredRestaurants] = useState<RestroInfo[]>(
      []
   );
   const [searchText, setSearchText] = useState('');

   async function fetchRestroData() {
      try {
         const response = await axios.get<Restaurants>(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.4563596&lng=72.79246119999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
         );

         setRestaurants(
            response?.data?.data?.cards[4]?.card?.card?.gridElements
               ?.infoWithStyle?.restaurants
         );

         setFilteredRestaurants(
            response?.data?.data?.cards[4]?.card?.card?.gridElements
               ?.infoWithStyle?.restaurants
         );
      } catch (error) {
         console.error('Error fetching data:', error);
      }
   }

   useEffect(() => {
      fetchRestroData();
   }, []);

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
