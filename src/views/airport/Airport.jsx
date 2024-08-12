import {
  getAirportsByDepartmentAndCity,
  getAirportsByRegionDepartmentCityType,
} from "../../services/airports";
import useFetchData from "../../hook/useFetchData";
import Card from "../../components/Card/Card";
import AirportsTable from "./components/AirportsTable/AirportsTable";
import AirportsCountTable from "./components/AirportsCountTable/AirportsCountTable";
import "./Airport.css";
import TableSkeleton from "../../components/Skeleton/Table/TableSkeleton";
import CardSkeleton from "../../components/Skeleton/Cards/CardSkeleton";

const Airport = () => {
  const { data, loading: loadingAirport } = useFetchData(
    getAirportsByDepartmentAndCity
  );
  const { data: AirportsWhitType, loading: loadingWithType } = useFetchData(
    getAirportsByRegionDepartmentCityType
  );

  const { time: timeWhitType, groupedByRegionDeptCityType } =
    AirportsWhitType || {};
  const { time, totalAirports, groupedByDepartmentCity } = data || {};

  return (
    <div>
      <div className="airport-container">
        <div className="airport-card-container">
          {loadingAirport ? (
            <CardSkeleton repeat={3} />
          ) : (
            <>
              <Card
                title="Número total de aeropuertos"
                data={`${totalAirports}`}
              />
              <Card
                title="Tiempo de respuesta Aeropuertos"
                data={`${time} ms`}
              />
              <Card
                title="Tiempo de respuesta Cantidad de Aeropuerto"
                data={`${timeWhitType} ms`}
              />
            </>
          )}
        </div>
        <div className="airport-tables-container">
          {loadingAirport ? (
            <TableSkeleton repeat={1} />
          ) : (
            <AirportsTable title="Aeropuertos" data={groupedByDepartmentCity} />
          )}
          {loadingWithType ? (
            <TableSkeleton repeat={1} />
          ) : (
            <AirportsCountTable
              title="Especificaciones"
              data={groupedByRegionDeptCityType}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Airport;
