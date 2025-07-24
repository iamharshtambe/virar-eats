import { ArrowDown } from "lucide-react";
import MenuAccordianItem from "./MenuAccordianItem.tsx";
import { useState } from "react";

type MenuAccordianProps = {
  data?: {
    title?: string;
    itemCards?: {
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
  };
};

function MenuAccordian({ data }: MenuAccordianProps) {
  const [accordian, setAccordian] = useState(false);

  function handleClick() {
    setAccordian(!accordian);
  }

  if (!data || !data.itemCards) {
    return null;
  }

  return (
    <div className="my-6 w-full rounded-2xl border border-gray-200 px-6 py-4 shadow-md transition-all duration-300 hover:shadow-xl">
      <div
        onClick={handleClick}
        className="flex cursor-pointer items-center justify-between text-xl font-semibold text-gray-800"
      >
        <p>
          {data.title}
          <span className="text-gray-500">({data.itemCards.length})</span>
        </p>
        <ArrowDown
          className={`h-5 w-5 text-gray-600 transition-transform duration-200 ${
            accordian ? "rotate-180" : ""
          }`}
        />
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {accordian && <MenuAccordianItem data={data.itemCards} />}
      </div>
    </div>
  );
}

export default MenuAccordian;
