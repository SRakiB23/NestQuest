import { IoLocationOutline } from "react-icons/io5";

const SalesList = ({ list }) => {
  const { estate_title, location, facilities, segment_name, status, area } =
    list;
  return (
    <div>
      <div>
        <div className="card card-compact bg-slate-50">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">{estate_title}</h2>
            <div className="flex items-center">
              <IoLocationOutline className="text-2xl" />
              <p>{location}</p>
            </div>
            <div>
              <div className="flex gap-1">
                {list.facilities.map((facility, index) => (
                  <p className="" key={index}>
                    #{facility}
                  </p>
                ))}
              </div>
            </div>
            <hr />
            <div className="flex items-center gap-52 justify-between">
              <p>Size: {area}</p>
              <p className="text-red-500 text-xl">{status}!</p>
            </div>
            <p>{segment_name}</p>
            <div className="card-actions justify-center">
              <button className="btn bg-yellow-400 text-lg">
                View Property
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesList;
