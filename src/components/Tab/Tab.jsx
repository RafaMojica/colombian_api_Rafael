import PropTypes from "prop-types";
import "./Tab.css";

const Tab = ({ title, isActive, showTab }) => {
  return (
    <button className={`tab-button ${isActive && "active"}`} onClick={showTab}>
      {title}
    </button>
  );
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  showTab: PropTypes.func.isRequired,
};

export default Tab;
