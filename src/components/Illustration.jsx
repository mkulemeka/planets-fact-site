import { AnimatePresence, motion } from "framer-motion";

import PropTypes from "prop-types";
import { planetItemVariant } from "../animations/variants";

const Illustration = ({
  beforeStyles,
  imageStyles,
  activeButton,
  planetName,
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.figure
        key={activeButton}
        variants={planetItemVariant}
        initial="hidden"
        animate="show"
        exit="exit"
        className="planet-section__image px-[1.5rem] relative h-[300px]"
      >
        <div id={planetName} style={imageStyles}></div>
        {activeButton === "Surface" && <span style={beforeStyles}></span>}
      </motion.figure>
    </AnimatePresence>
  );
};

Illustration.propTypes = {
  beforeStyles: PropTypes.object.isRequired,
  imageStyles: PropTypes.object.isRequired,
  activeButton: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};

export default Illustration;
