import "./RequestTime.css";
import PropTypes from "prop-types";

const RequestTime = ({ title, time }) => {
  return (
    <div className="time-container">
      <h2 className="time-title">{title}</h2>
      <p className="time-info">{time} ms</p>
    </div>
  );
};

RequestTime.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

export default RequestTime;
