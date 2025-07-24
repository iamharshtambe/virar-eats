import { useParams } from "react-router-dom";
import { useMenu } from "../hooks/useMenu.ts";
import MenuAccordian from "./MenuAccordian.tsx";

function RestroMenu() {
  const { restroId } = useParams<{ restroId: string }>();

  const menu = useMenu(restroId);

  if (!restroId) {
    return <div className="mt-20 text-red-500">Invalid restaurant ID</div>;
  }

  if (!menu) return <div className="mt-20">Loading...</div>;

  const cardInfo = menu.data.cards[2]?.card?.card?.info;

  const menuCategories =
    menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

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
      <div className="mt-6 w-full rounded-2xl border border-gray-300 p-2 shadow-lg">
        <p className="text-lg font-bold">
          ⭐ {avgRating} ({totalRatingsString}) | {costForTwoMessage}
        </p>
        <p className="text-lg text-orange-600">{cuisines.join(", ")}</p>
        <div className="mt-2">
          <p className="text-sm">Outlet: {areaName}</p>
          <p className="text-sm">⏱ {sla.deliveryTime} mins</p>
        </div>
      </div>
      <p className="mt-6 text-2xl font-bold">Our Menu</p>
      {menuCategories?.map((item) => (
        <MenuAccordian
          key={item.card?.card?.title || Math.random()}
          data={item.card?.card}
        />
      ))}
    </div>
  );
}

export default RestroMenu;
