import PropTypes from "prop-types";
import Table from "../../../../components/Table/Table";
import "./PeriodMandateTable.css";

const PeriodMandateTable = ({ data, title }) => {
  const columns = ["Foto", "Nombre", "Inicio de Mandato", "Fin de Mandato"];

  const rows = data?.map(
    ({ name, lastName, startPeriodDate, endPeriodDate, image }) => [
      <img
        key={name}
        src={image || "/No-Image-Available.jpg"}
        alt={name}
        className="table-img"
      />,
      `${name} ${lastName}`,
      startPeriodDate,
      endPeriodDate,
    ]
  );

  return (
    <div className="table-container">
      <h3 className="table-title">{title}</h3>
      <Table columns={columns} rows={rows} />
    </div>
  );
};

PeriodMandateTable.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default PeriodMandateTable;
