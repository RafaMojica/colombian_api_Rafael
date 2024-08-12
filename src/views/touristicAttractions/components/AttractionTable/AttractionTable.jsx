import PropTypes from "prop-types";
import Table from "../../../../components/Table/Table";

const AttractionTable = ({ data, title }) => {
  const columns = ["Imagen", "Nombre", "Ciudad"];

  const rows = data?.map(({ images, name, city }) => [
    <img
      key={name}
      src={images[0] || "/No-Image-Available.jpg"}
      alt={name}
      className="table-img"
    />,
    name,
    city.name,
  ]);

  return (
    <div className="table-container">
      <h3 className="table-title">{title}</h3>
      <Table columns={columns} rows={rows} />
    </div>
  );
};

AttractionTable.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default AttractionTable;
