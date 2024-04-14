import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaBed, FaLocationDot } from "react-icons/fa6";
import { FaBath } from "react-icons/fa6";
import { GiHomeGarage } from "react-icons/gi";

const PropertyDetails = () => {
  const { id } = useParams();

  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        const propertyData = data.find((item) => item.id === parseInt(id));
        setProperty(propertyData);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {property ? (
        <div className="max-w-7xl mx-auto bg-slate-200">
          <div className="mt-4 bg-gradient-to-r from-blue-300 via-green-400 to-red-300 text-black px-4 py-6 font-bold text-3xl text-center">
            <h2>{property.estate_title}</h2>
          </div>
          <div className="flex justify-between py-6 max-w-6xl mx-auto">
            <h2 className="text-2xl font-medium">{property.location}</h2>
            <h3 className="text-2xl font-medium text-green-600">
              {property.price}
            </h3>
          </div>
          <div className="flex gap-8 items-center px-6 max-w-6xl mx-auto">
            <div className="flex items-center text-2xl gap-2 font-bold">
              <FaBed />
              <p>{property.bed}</p>
            </div>
            <div className="flex items-center text-2xl gap-2 font-bold">
              <FaBath />
              <p>{property.bathroom}</p>
            </div>
            <div className="flex items-center text-3xl gap-2 font-bold">
              <GiHomeGarage />
            </div>
          </div>
          <div className="flex justify-center pt-6 ">
            <img src={property.image} alt="" />
          </div>
          <div className="max-w-6xl mx-auto px-2">
            <h3 className="text-4xl font-bold pt-5">Property Details</h3>
            <div className="pt-4 flex items-center text-2xl gap-2">
              <FaLocationDot />
              {property.location}
            </div>
            <h3 className="text-2xl text-green-600 font-semibold pt-4 pb-2">
              Price: {property.price}
            </h3>
            <hr className="py-2" />
          </div>
          <div className="max-w-6xl mx-auto mb-10 px-2">
            <h2 className="text-4xl font-bold">Description</h2>
            <hr className="my-2" />
            <p className="text-lg pb-6">{property.details}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PropertyDetails;
