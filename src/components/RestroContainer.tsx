import RestroCard from "./RestroCard.tsx";
import { useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useRestaurants } from "../hooks/useRestaurants.ts";
import { useStatus } from "../hooks/useStatus.ts";
import { withPromoted } from "../utils/withPromoted.tsx";

function RestroContainer() {
  const { restaurants, filteredRestaurants, setFilteredRestaurants } =
    useRestaurants();
  const [searchText, setSearchText] = useState("");
  const status = useStatus();

  const PromotedRestroCard = withPromoted(RestroCard);

  function handleTopRatedRestros() {
    const filteredRestros = restaurants.filter(
      (restro) => restro.info.avgRating > 4.2,
    );

    setFilteredRestaurants(filteredRestros);
  }

  function handleSearchRestros() {
    const filteredRestros = restaurants.filter((restro) =>
      restro.info.name.toLowerCase().includes(searchText.toLowerCase()),
    );

    setFilteredRestaurants(filteredRestros);
  }

  if (status === false)
    return (
      <h2 className="mt-20 text-2xl font-bold text-red-500">
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
          className="w-96 rounded-4xl border px-2 py-1"
        />

        <Search
          onClick={handleSearchRestros}
          className="cursor-pointer"
          size={36}
        />
      </div>
      <button
        onClick={handleTopRatedRestros}
        className="mt-8 cursor-pointer rounded-2xl border px-2 py-1 text-gray-500 shadow"
      >
        Top Rated Restaurants
      </button>

      <div className="my-8 flex flex-wrap items-center justify-start gap-5">
        {filteredRestaurants.map((restro) => (
          <Link key={restro.info.id} to={`restaurants/${restro.info.id}`}>
            {restro.info.avgRating > 4.2 ? (
              <PromotedRestroCard restroObj={restro} />
            ) : (
              <RestroCard restroObj={restro} />
            )}
          </Link>
        ))}
      </div>
    </>
  );
}

export default RestroContainer;
