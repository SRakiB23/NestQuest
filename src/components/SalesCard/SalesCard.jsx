import { useEffect, useState } from "react";
import SalesList from "./SalesList";
import "aos/dist/aos.css";
import AOS from "aos";

const SalesCard = () => {
  const [lists, setList] = useState([]);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setList(data));
  });
  return (
    <div data-aos="fade-down-left" data-aos-duration="2000">
      <div className="bg-slate-100 mt-8">
        <h2 className="text-4xl font-bold py-6 px-3">Estates in Sales</h2>
        <div className="md:grid grid-cols-3 gap-6">
          {lists.map((list) => (
            <SalesList key={list.id} list={list}></SalesList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesCard;
