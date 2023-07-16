import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const Handler = () => {
    setShowItems(!showItems);
  };

  return (
    <div>
      <div className="bg-orange-50 shadow-lg my-4 p-3">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => Handler()}
        >
          <span className="font-bold">
            {data.title} ({data.itemCards?.length})
          </span>
          <span>⬇ </span>
        </div>

        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
