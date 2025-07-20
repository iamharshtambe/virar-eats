import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MENU_IMG_URL } from '../utils/constants';

type RestroInfo = {
   id?: string;
   name: string;
   areaName: string;
   cuisines: string[];
   avgRating: number;
   sla: {
      deliveryTime: number;
   };
   totalRatingsString: string;
   costForTwoMessage: string;
};

type MenuItem = {
   card: {
      info: {
         id: string;
         name: string;
         imageId: string;
      };
   };
};

type Menu = {
   data: {
      cards: {
         card?: {
            card?: {
               info?: RestroInfo;
            };
         };
         groupedCard?: {
            cardGroupMap?: {
               REGULAR?: {
                  cards?: {
                     card?: {
                        card?: {
                           itemCards?: MenuItem[];
                        };
                     };
                  }[];
               };
            };
         };
      }[];
   };
};

function RestroMenu() {
   const [menu, setMenu] = useState<Menu | null>(null);
   const { restroId } = useParams();

   useEffect(() => {
      async function fetchMenuData() {
         try {
            const response = await axios.get<Menu>(
               `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.4563596&lng=72.79246119999999&restaurantId=${restroId}&catalog_qa=undefined&submitAction=ENTER`
            );
            setMenu(response.data);
         } catch (error) {
            console.error('Error fetching menu:', error);
         }
      }

      fetchMenuData();
   }, [restroId]);

   if (!menu) return <div className="mt-20">Loading...</div>;

   const cardInfo = menu.data.cards[2]?.card?.card?.info;

   const itemCards =
      menu.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
         ?.card?.itemCards;

   if (!cardInfo) {
      return (
         <div className="mt-20 text-red-500">Restaurant info not available</div>
      );
   }

   const {
      name,
      avgRating,
      totalRatingsString,
      costForTwoMessage,
      cuisines,
      areaName,
      sla,
   } = cardInfo;

   return (
      <div className="mt-10 px-4">
         <p className="text-2xl font-bold">{name}</p>
         <div className="border border-gray-300 mt-6 p-2 w-1/2 h-30 rounded-2xl shadow-lg">
            <p className="font-bold">
               ⭐ {avgRating} ({totalRatingsString}) | {costForTwoMessage}
            </p>
            <p className="text-orange-600">{cuisines.join(', ')}</p>
            <div className="mt-2">
               <p className="text-sm">Outlet: {areaName}</p>
               <p className="text-sm">⏱ {sla.deliveryTime} mins</p>
            </div>
         </div>
         <p className="text-xl font-semibold mt-6">Our Menu</p>
         <ul className="space-y-4 mt-4">
            {itemCards?.length ? (
               itemCards.map((item) => (
                  <li
                     key={item.card.info.id}
                     className="flex items-center gap-4 p-4 border border-gray-300 rounded-2xl"
                  >
                     <img
                        className="p-1 w-18 h-18 object-cover border border-gray-300 rounded-full"
                        src={MENU_IMG_URL + item.card.info.imageId}
                        alt={item.card.info.name}
                     />
                     <span className="text-lg font-medium">
                        {item.card.info.name}
                     </span>
                  </li>
               ))
            ) : (
               <p className="text-gray-500">No items found</p>
            )}
         </ul>
      </div>
   );
}

export default RestroMenu;
