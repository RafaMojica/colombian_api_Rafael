import PropTypes from "prop-types";
import Table from "../../../../components/Table/Table";
import "./AirportsTable.css";

const AirportsTable = ({ data, title }) => {
  const columns = ["Codigo", "Nombre", "Ciudad"];

  const rows = Object.entries(data).flatMap(([__, { cities }]) =>
    Object.entries(cities).flatMap(([__, { airports }]) =>
      airports.map((airport) => [
        airport.iataCode,
        airport.name,
        airport.city.name,
      ])
    )
  );

  return (
    <div className="table-container">
      <h3 className="table-title">{title}</h3>
      <Table columns={columns} rows={rows} />
    </div>
  );
};

AirportsTable.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default AirportsTable;
