import "./pageLayout.scss";

import {
  ButtonsContainer,
  IllustrationContainer,
  IntroContainer,
  StatsContainer,
} from "./index";

import PropTypes from "prop-types";

const PageLayout = ({ planetData }) => {
  return (
    <section className="planet-section md:max-w-[90%] mx-auto gap-4 lg:gap-8 pb-4 md:mt-20">
      <ButtonsContainer planetName={planetData.name} />
      <IllustrationContainer
        planetImages={planetData.images}
        planetName={planetData.name}
        planetSizes={planetData.sizes}
      />
      <IntroContainer planetData={planetData} />
      <StatsContainer planetData={planetData} />
    </section>
  );
};

PageLayout.propTypes = {
  planetData: PropTypes.object.isRequired,
};

export default PageLayout;
