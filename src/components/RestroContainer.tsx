import RestroCard from './RestroCard.tsx';
import { restroData } from '../utils/constants.ts';
import { useState } from 'react';

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
   const [listOfRestaurants, setListOfRestaurants] =
      useState<RestroInfo[]>(restroData);

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
