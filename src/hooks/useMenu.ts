import axios from 'axios';
import { useEffect, useState } from 'react';
import { MENU_URL } from '../utils/constants';

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
         price: number;
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

export function useMenu(restroId?: string) {
   const [menu, setMenu] = useState<Menu | null>(null);

   useEffect(() => {
      if (!restroId) return;

      async function fetchMenu() {
         try {
            const response = await axios.get<Menu>(`${MENU_URL}${restroId}`);
            setMenu(response.data);
         } catch (error) {
            console.error('Error fetching menu:', error);
         }
      }

      fetchMenu();
   }, [restroId]);

   return menu;
}
