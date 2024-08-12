import PropTypes from "prop-types";
import Table from "../../../../components/Table/Table";
import "./PoliticalPartiesTable.css";

const PoliticalPartiesTable = ({ data, title }) => {
  const columns = [
    "Posición",
    "Nombre del Partido",
    "Cantidad de Presidentes Electos",
  ];

  const rows = data?.map((party, index) => [
    (index + 1).toString(),
    party.party.charAt(0).toUpperCase() + party.party.slice(1),
    party.count.toString(),
  ]);

  return (
    <div className="table-container">
      <h3 className="table-title">{title}</h3>
      <Table columns={columns} rows={rows} />
    </div>
  );
};

PoliticalPartiesTable.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default PoliticalPartiesTable;
