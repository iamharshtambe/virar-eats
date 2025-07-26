import { useDispatch } from "react-redux";
import { MENU_IMG_URL } from "../utils/constants.ts";
import { addItem } from "../store/cartSlice.ts";

type MenuItemData = {
  card: {
    info: {
      id: string;
      name: string;
      description?: string;
      defaultPrice?: number;
      price?: number;
      imageId: string;
    };
  };
}[];

type MenuAccordianItemProps = {
  data: MenuItemData;
};

function MenuAccordianItem({ data }: MenuAccordianItemProps) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(addItem("pizza"));
  }

  return (
    <div>
      {data.map((item, index) => {
        const { name, description, defaultPrice, price, imageId } =
          item.card.info;

        const finalPrice =
          (defaultPrice ?? price) ? (defaultPrice ?? price)! / 100 : 0;

        return (
          <div
            key={item.card.info.id || index}
            className="my-8 flex items-center justify-between gap-6"
          >
            <div className="flex-1">
              <p className="font-bold">{name}</p>
              <p>₹{finalPrice}</p>
              {description && <p className="text-gray-500">{description}</p>}
            </div>
            <div className="flex-shrink-0">
              {imageId && (
                <img
                  className="relative h-24 w-24 rounded-lg object-cover"
                  src={MENU_IMG_URL + imageId}
                  alt={name}
                />
              )}
              <button
                className="absolute mt-1 ml-5 h-6 w-14 cursor-pointer rounded-2xl bg-black px-1 text-center text-sm text-white"
                onClick={handleClick}
              >
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MenuAccordianItem;
