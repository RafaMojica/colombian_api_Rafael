import { getTouristicAttractionsByDepartmentAndCity } from "../../services/touristicAttractions";
import useFetchData from "../../hook/useFetchData";
import Card from "../../components/Card/Card";
import "./TouristicAttractions.css";
import AttractionTable from "./components/AttractionTable/AttractionTable";
import AttractionByCityTable from "./components/AttractionByCityTable/AttractionByCityTable";
import TableSkeleton from "../../components/Skeleton/Table/TableSkeleton";
import CardSkeleton from "../../components/Skeleton/Cards/CardSkeleton";

const TouristicAttractions = () => {
  const { data, loading } = useFetchData(
    getTouristicAttractionsByDepartmentAndCity
  );

  const { time, totalAttractions, attractions, groupedByDepartmentCity } =
    data || {};

  return (
    <div>
      <div className="attraction-container">
        <div className="attraction-card-container">
          {loading ? (
            <CardSkeleton repeat={2} />
          ) : (
            <>
              <Card
                title="Número total de atracciones turisticas"
                data={`${totalAttractions}`}
              />
              <Card title="Tiempo de respuesta" data={`${time} ms`} />
            </>
          )}
        </div>
        <div className="attraction-tables-container">
          {loading ? (
            <TableSkeleton repeat={2} />
          ) : (
            <>
              <AttractionTable
                title="Atracciones Turísticas"
                data={attractions}
              />
              <AttractionByCityTable
                title="Atracciones por Ubicación"
                data={groupedByDepartmentCity}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TouristicAttractions;
