import { IMG_URL } from "../utils/constants.ts";

type RestroInfo = {
  info: {
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

export type RestroCardProps = {
  restroObj: RestroInfo;
};

function RestroCard({ restroObj }: RestroCardProps) {
  const { name, cloudinaryImageId, areaName, cuisines, avgRating, sla } =
    restroObj.info;

  return (
    <div className="h-70 w-56 transition-transform duration-300">
      <img
        src={IMG_URL + cloudinaryImageId}
        alt=""
        className="h-36 w-full rounded-2xl object-cover"
      />
      <div className="p-2">
        <p className="font-bold">{name}</p>
        <p>
          ⭐{avgRating} • {sla?.deliveryTime} mins
        </p>
        <p className="text-sm text-gray-500">{cuisines.join(", ")}</p>
        <p className="text-sm text-gray-500">{areaName}</p>
      </div>
    </div>
  );
}

export default RestroCard;
