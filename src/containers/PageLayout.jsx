import "./pageLayout.scss";

import {
  ButtonsContainer,
  IllustrationContainer,
  IntroContainer,
  StatsContainer,
} from "./index";

import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { pageVariant } from "../animations/variants";

const PageLayout = ({ planetData }) => {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={pageVariant}
      className="planet-section md:max-w-[90%] mx-auto gap-4 lg:gap-8 pb-4 md:mt-20"
    >
      <ButtonsContainer planetName={planetData.name} />
      <IllustrationContainer
        planetImages={planetData.images}
        planetName={planetData.name}
        planetSizes={planetData.sizes}
      />
      <IntroContainer planetData={planetData} />
      <StatsContainer planetData={planetData} />
    </motion.section>
  );
};

PageLayout.propTypes = {
  planetData: PropTypes.object.isRequired,
};

export default PageLayout;
