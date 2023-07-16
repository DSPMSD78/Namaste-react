import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  console.log(items[0].card?.info?.name);
  return (
    <div>
      {items.map((item) => (
        <div
          className="p-2 m-2 border-gray-300 border-b-2 flex justify-between"
          key={item.card?.info?.id}
        >
          <div className="w-9/12 py-2">
            <span>{item.card?.info?.name}</span>
            <span>
              {" "}
              - ₹
              {item.card?.info?.price
                ? item.card?.info?.price / 100
                : item.card?.info?.defaultPrice / 100}
            </span>
            <p className="p-2 text-xs">{item.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="mx-10 mt-16 absolute">
              <button className="bg-white rounded-lg text-emerald-600 font-bold py-1 px-3">
                ADD
              </button>
            </div>
            <img
              className="rounded-lg"
              src={CDN_URL + item.card?.info?.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
