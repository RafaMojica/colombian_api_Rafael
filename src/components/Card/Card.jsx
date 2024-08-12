import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ title, data }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-info">{data}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default Card;
