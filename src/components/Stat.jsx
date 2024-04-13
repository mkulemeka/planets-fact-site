import PropTypes from "prop-types";

const Stat = ({ title, stat }) => {
  return (
    <article className="stats-stat uppercase border border-lightGrey px-5 py-1 justify-between items-center md:flex-col md:justify-center md:items-start lg:h-[123px] lg:justify-center lg:items-start">
      <h3 className=" font-leagueSpartan font-bold text-subHeading text-lightGrey tracking-little">
        {title}
      </h3>
      <p>{stat}</p>
    </article>
  );
};

Stat.propTypes = {
  title: PropTypes.string.isRequired,
  stat: PropTypes.string.isRequired,
};

export default Stat;
