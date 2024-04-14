import { useParams } from "react-router-dom";

const PropertyDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>News Details</h2>
      <p>{id}</p>
    </div>
  );
};

export default PropertyDetails;
