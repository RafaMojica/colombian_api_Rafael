import PropTypes from "prop-types";
import "./Tab.css";

const Tab = ({ title }) => {
  return <button>{title}</button>;
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Tab;
