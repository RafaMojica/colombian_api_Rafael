import { getTouristicAttractionsByDepartmentAndCity } from "../../services/touristicAttractions";
import SkeletonTouristicAttractions from "./components/SkeletonTouristicAttractions/SkeletonTouristicAttractions";
import useFetchData from "../../hook/useFetchData";
import Card from "../../components/Card/Card";
import "./TouristicAttractions.css";
import AttractionTable from "./components/AttractionTable/AttractionTable";
import AttractionByCityTable from "./components/AttractionByCityTable/AttractionByCityTable";

const TouristicAttractions = () => {
  const { data, loading } = useFetchData(
    getTouristicAttractionsByDepartmentAndCity
  );

  const { time, totalAttractions, attractions, groupedByDepartmentCity } =
    data || {};

  return (
    <div>
      {loading ? (
        <SkeletonTouristicAttractions />
      ) : (
        <>
          <div className="attraction-container">
            <div className="attraction-card-container">
              <Card
                title="Numero total de atracciones turisticas"
                data={`${totalAttractions}`}
              />
              <Card title="Tiempo de respuesta" data={`${time} ms`} />
            </div>
            <div className="attraction-tables-container">
              <AttractionTable
                title="Atracciones Turísticas"
                data={attractions}
              />
              <AttractionByCityTable
                title="Atracciones por Ciudad"
                data={groupedByDepartmentCity}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TouristicAttractions;
