import {
  getAirportsByDepartmentAndCity,
  getAirportsByRegionDepartmentCityType,
} from "../../services/airports";
import useFetchData from "../../hook/useFetchData";
import Card from "../../components/Card/Card";
import SkeletonAirport from "./components/SkeletonAirport/SkeletonAirport";
import AirportsTable from "./components/AirportsTable/AirportsTable";
import AirportsCountTable from "./components/AirportsCountTable/AirportsCountTable";
import "./Airport.css";

const Airport = () => {
  const { data, loading } = useFetchData(getAirportsByDepartmentAndCity);
  const { data: AirportsWhitType } = useFetchData(
    getAirportsByRegionDepartmentCityType
  );

  const { groupedByRegionDeptCityType } = AirportsWhitType || {};
  const { time, totalAirports, groupedByDepartmentCity } = data || {};

  return (
    <div>
      {loading ? (
        <SkeletonAirport />
      ) : (
        <>
          <div className="airport-container">
            <div className="airport-card-container">
              <Card
                title="Número total de aeropuertos"
                data={`${totalAirports}`}
              />
              <Card title="Tiempo de respuesta" data={`${time} ms`} />
            </div>
            <div className="airport-tables-container">
              <AirportsTable
                title="Aeropuertos"
                data={groupedByDepartmentCity}
              />
              <AirportsCountTable
                title="Cantidad de Aeropuerto"
                data={groupedByRegionDeptCityType}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Airport;
