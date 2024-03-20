import PropTypes from "prop-types";

const Button = ({ text, activeButton, handleClick, planetName }) => {
  const borderStyle =
    activeButton === text
      ? `border-b-2 border-${planetName.toLowerCase()} border-opacity-100 font-bold`
      : "border-b-2 border-transparent border-opacity-0";

  return (
    <button
      className={`uppercase py-[1.25rem] transition-all duration-500 ${borderStyle}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  activeButton: PropTypes.string,
  handleClick: PropTypes.func,
  planetName: PropTypes.string,
};

export default Button;
