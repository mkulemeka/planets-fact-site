import PropTypes from "prop-types";

const Stat = ({ title, stat }) => {
  return (
    <div className="stats-stat uppercase">
      <h3>{title}</h3>
      <p>{stat}</p>
    </div>
  );
};

Stat.propTypes = {
  title: PropTypes.string.isRequired,
  stat: PropTypes.string.isRequired,
};

export default Stat;
