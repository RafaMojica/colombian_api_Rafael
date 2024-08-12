import PropTypes from "prop-types";
import Table from "../../../../components/Table/Table";
import "./AttractionByCityTable.css";

const AttractionByCityTable = ({ data, title }) => {
  const columns = ["Departamento", "Ciudad", "N° Atracciones"];

  const rows = Object.entries(data)
    .flatMap(([departamento, { cities }]) =>
      Object.entries(cities).map(([ciudad, { count }]) => [
        departamento,
        ciudad,
        count,
      ])
    )
    .sort((a, b) => b[2] - a[2]);

  return (
    <div className="table-container">
      <h3 className="table-title">{title}</h3>
      <Table columns={columns} rows={rows} />
    </div>
  );
};

AttractionByCityTable.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default AttractionByCityTable;
