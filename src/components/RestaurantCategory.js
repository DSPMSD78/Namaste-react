import ItemList from "./ItemList";

const RestaurantCategory = ({ data, x, y }) => {
  return (
    <div>
      <div className="bg-orange-50 shadow-lg my-4 p-3">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => y()}
        >
          <span className="font-bold">
            {data.title} ({data.itemCards?.length})
          </span>
          <span>⬇ </span>
        </div>

        {x && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
