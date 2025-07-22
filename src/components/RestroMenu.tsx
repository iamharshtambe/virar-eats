import { useParams } from "react-router-dom";
import { MENU_IMG_URL } from "../utils/constants";
import { useMenu } from "../hooks/useMenu.ts";

function RestroMenu() {
  const { restroId } = useParams<{ restroId: string }>();

  const menu = useMenu(restroId);

  if (!restroId) {
    return <div className="mt-20 text-red-500">Invalid restaurant ID</div>;
  }

  if (!menu) return <div className="mt-20">Loading...</div>;

  const cardInfo = menu.data.cards[2]?.card?.card?.info;

  const itemCards = menu.data.cards
    .find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
      (innerCard) => innerCard?.card?.card?.itemCards,
    )?.card?.card?.itemCards;

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
      <div className="mt-6 h-30 w-1/2 rounded-2xl border border-gray-300 p-2 shadow-lg">
        <p className="font-bold">
          ⭐ {avgRating} ({totalRatingsString}) | {costForTwoMessage}
        </p>
        <p className="text-orange-600">{cuisines.join(", ")}</p>
        <div className="mt-2">
          <p className="text-sm">Outlet: {areaName}</p>
          <p className="text-sm">⏱ {sla.deliveryTime} mins</p>
        </div>
      </div>
      <p className="mt-6 text-xl font-semibold">Our Menu</p>
      <ul className="mt-4 space-y-4">
        {itemCards?.length ? (
          itemCards.map((item) => (
            <li
              key={item.card.info.id}
              className="flex items-center gap-4 rounded-2xl border border-gray-300 p-4"
            >
              <img
                className="h-18 w-18 rounded-full border border-gray-300 object-cover p-1"
                src={MENU_IMG_URL + item.card.info.imageId}
                alt={item.card.info.name}
              />
              <span className="text-lg font-medium">{item.card.info.name}</span>
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
