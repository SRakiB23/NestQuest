import { useEffect, useState } from "react";
import SalesList from "./SalesList";

const SalesCard = () => {
  const [lists, setList] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setList(data));
  });
  return (
    <div className="bg-slate-100">
      <h2 className="text-4xl font-bold py-6 px-3">Latest in Sales</h2>
      <div className="md:grid grid-cols-3 gap-6">
        {lists.map((list) => (
          <SalesList key={list.id} list={list}></SalesList>
        ))}
      </div>
    </div>
  );
};

export default SalesCard;
