import PropTypes from "prop-types";
import "./TableSkeleton.css";

const TableSkeleton = ({ repeat }) => {
  return (
    <>
      {Array.from({ length: repeat }).map((_, index) => (
        <div key={index} className="table-skeleton-container">
          <div className="table-skeleton-title"></div>
          <div className="table-skeleton-table"></div>
        </div>
      ))}
    </>
  );
};

TableSkeleton.propTypes = {
  repeat: PropTypes.number.isRequired,
};

export default TableSkeleton;
