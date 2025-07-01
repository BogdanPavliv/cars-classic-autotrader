import { useParams } from "react-router-dom";
import SectionCar from "../../components/modules/CarPage/SectionCar";
import SectionServices from "../../components/modules/CarPage/SectionServices";
import SectionFaq from "../../components/modules/CarPage/SectionFaq";
import SectionMap from "../../components/modules/CarPage/SectionMap";

const CarPage = () => {
  const { id } = useParams();
  return (
    <>
      <SectionCar id={id} />
      <SectionServices />
      <SectionFaq />
      <SectionMap />
    </>
  );
};

export default CarPage;
