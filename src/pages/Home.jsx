import Achivement from "../components/Achivement/Achivement";
import Banner from "../components/Banner/Banner";
import SalesCard from "../components/SalesCard/SalesCard";

const Home = () => {
  return (
    <div className="md:max-w-7xl mx-auto">
      <Banner></Banner>
      <SalesCard></SalesCard>
      <Achivement></Achivement>
    </div>
  );
};

export default Home;
