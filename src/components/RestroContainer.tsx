import RestroCard from './RestroCard.tsx';
import { useEffect, useState } from 'react';
import axios from 'axios';

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

function RestroContainer() {
   const [listOfRestaurants, setListOfRestaurants] = useState<RestroInfo[]>([]);

   async function fetchRestroData() {
      try {
         const response = await axios.get(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.4563596&lng=72.79246119999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
         );

         setListOfRestaurants(
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

   function handleClick() {
      const filteredRestros = listOfRestaurants.filter(
         (restro) => restro.info.avgRating > 4.2
      );

      setListOfRestaurants(filteredRestros);
   }
   return (
      <>
         <button
            onClick={handleClick}
            className="border py-1 px-2 mt-8 rounded-2xl text-gray-500 shadow cursor-pointer"
         >
            Top Rated Restaurants
         </button>

         <div className="flex items-center justify-start flex-wrap gap-5 my-8">
            {listOfRestaurants.map((restro) => (
               <RestroCard restroObj={restro} key={restro.info.id} />
            ))}
         </div>
      </>
   );
}

export default RestroContainer;
