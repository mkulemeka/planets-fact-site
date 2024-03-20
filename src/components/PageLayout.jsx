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
    <section className="planet-section md:max-w-[90%]  mx-auto">
      <ButtonsContainer planetName={planetData.name} />
      <figure className="planet-section__image">
        <img
          src={planetData.images.planet}
          alt={planetData.name}
          className=""
        />
      </figure>
      <section className="planet-section__details">
        <h1>{planetData.name}</h1>
        <p>{planetData.overview.content}</p>
        <div className="planet-section__details__source">
          <p>Source:</p>
          <a href={planetData.overview.source}>Wikipedia</a>
        </div>
      </section>
      <StatsContainer planetData={planetData} />
    </section>
  );
};

PageLayout.propTypes = {
  planetData: PropTypes.object.isRequired,
};

export default PageLayout;
