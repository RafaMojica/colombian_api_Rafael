import PropTypes from "prop-types";
import Table from "../../../../components/Table/Table";
import "./AirportsCountTable.css";

const AirportsCountTable = ({ data, title }) => {
  const columns = ["Region", "Departamento", "Ciudad", "Tipo", "Conteo"];

  const rows = Object.entries(data).flatMap(([region, departments]) =>
    Object.entries(departments).flatMap(([department, cities]) =>
      Object.entries(cities).flatMap(([city, types]) =>
        Object.entries(types).map(([type, count]) => [
          region,
          department,
          city,
          type,
          count,
        ])
      )
    )
  );

  return (
    <div className="table-container">
      <h3 className="table-title">{title}</h3>
      <Table columns={columns} rows={rows} />
    </div>
  );
};

AirportsCountTable.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default AirportsCountTable;
