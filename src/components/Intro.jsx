import { AnimatePresence, motion } from "framer-motion";

import PropTypes from "prop-types";
import { componentVariant } from "../animations/variants";

const Intro = ({ sourceLink, content, planetName, activeButton, source }) => {
  return (
    <section className="planet-section__details px-[1.5rem] flex flex-col text-center gap-6 md:text-left">
      <h1 className=" text-[3rem] uppercase font-medium font-antonio tracking-normal lg:text-heading">
        {planetName}
      </h1>
      <AnimatePresence mode="wait">
        <motion.p
          initial="hidden"
          animate="show"
          exit="exit"
          variants={componentVariant}
          key={activeButton}
        >
          {content()}
        </motion.p>
      </AnimatePresence>
      <div className="planet-section__details__source mt-3">
        <p className="inline">Source : </p>
        <a href={sourceLink()} className="font-medium underline">
          Wikipedia
        </a>
        <img src={source} alt="source" className="inline ml-1" />
      </div>
    </section>
  );
};

Intro.propTypes = {
  sourceLink: PropTypes.func.isRequired,
  content: PropTypes.func.isRequired,
  planetName: PropTypes.string.isRequired,
  activeButton: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default Intro;
