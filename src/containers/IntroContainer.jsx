import { PlanetContext } from "../context/PlanetProvider";
import PropTypes from "prop-types";
import { componentVariant } from "../animations/variants";
import { images } from "../assets";
import { motion } from "framer-motion";
import { useContext } from "react";

const IntroContainer = ({ planetData }) => {
  const { activeButton } = useContext(PlanetContext);
  const { overview, structure, geology } = planetData;
  const { source } = images;

  // Function to return the source link based on the active button
  const sourceLink = () => {
    if (activeButton === "Overview") return overview.source;
    if (activeButton === "Structure") return structure.source;
    if (activeButton === "Surface") return geology.source;
  };

  // Function to return the content based on the active button
  const content = () => {
    if (activeButton === "Overview") return overview.content;
    if (activeButton === "Structure") return structure.content;
    if (activeButton === "Surface") return geology.content;
  };

  return (
    <section className="planet-section__details px-[1.5rem] flex flex-col text-center gap-6 md:text-left">
      <h1 className=" text-[3rem] uppercase font-medium font-antonio tracking-normal lg:text-heading">
        {planetData.name}
      </h1>
      <motion.p
        initial="hidden"
        animate="show"
        variants={componentVariant}
        key={activeButton}
      >
        {content()}
      </motion.p>
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

IntroContainer.propTypes = {
  planetData: PropTypes.object.isRequired,
};

export default IntroContainer;
