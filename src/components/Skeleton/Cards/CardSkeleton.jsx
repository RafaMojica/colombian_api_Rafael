import PropTypes from "prop-types";
import "./CardSkeleton.css";

const CardSkeleton = ({ repeat }) => {
  return (
    <>
      {Array.from({ length: repeat }).map((_, index) => (
        <div key={index} className="card-skeleton">
          <div className="card-skeleton-title"></div>
          <div className="card-skeleton-info"></div>
        </div>
      ))}
    </>
  );
};

CardSkeleton.propTypes = {
  repeat: PropTypes.number.isRequired,
};

export default CardSkeleton;
