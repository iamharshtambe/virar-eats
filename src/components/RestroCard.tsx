import { IMG_URL } from '../utils/constants.ts';

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

type RestroCardProps = {
   restroObj: RestroInfo;
};

function RestroCard({ restroObj }: RestroCardProps) {
   const { name, cloudinaryImageId, areaName, cuisines, avgRating, sla } =
      restroObj.info;

   return (
      <div className="w-56 h-70 hover:scale-105 transition-transform duration-300">
         <img
            src={IMG_URL + cloudinaryImageId}
            alt=""
            className="w-full h-36 object-cover rounded-2xl"
         />
         <div className="p-2">
            <p className="font-bold">{name}</p>
            <p>
               ⭐{avgRating} • {sla?.deliveryTime} mins
            </p>
            <p className="text-gray-500 text-sm">{cuisines.join(', ')}</p>
            <p className="text-gray-500 text-sm">{areaName}</p>
         </div>
      </div>
   );
}

export default RestroCard;
