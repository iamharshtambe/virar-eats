import axios from "axios";
import { useEffect, useState } from "react";
import { RESTAURANTS_LIST_URL } from "../utils/constants";

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

export function useRestaurants() {
  const [restaurants, setRestaurants] = useState<RestroInfo[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<RestroInfo[]>(
    [],
  );

  useEffect(() => {
    async function fetchRestaurants() {
      try {
        const response = await axios.get<Restaurants>(RESTAURANTS_LIST_URL);

        setRestaurants(
          response?.data?.data?.cards[4]?.card?.card?.gridElements
            ?.infoWithStyle?.restaurants,
        );

        setFilteredRestaurants(
          response?.data?.data?.cards[4]?.card?.card?.gridElements
            ?.infoWithStyle?.restaurants,
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchRestaurants();
  }, []);

  return { restaurants, filteredRestaurants, setFilteredRestaurants };
}
