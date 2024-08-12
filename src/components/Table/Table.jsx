import PropTypes from "prop-types";
import "./Table.css";

const Table = ({ columns, rows }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((col, colIndex) => (
            <th key={colIndex} className="table-header">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="table-cell">
                {typeof cell === "string" && cell.startsWith("http") ? (
                  <img src={cell} alt="Profile" className="table-img" />
                ) : (
                  cell
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default Table;
