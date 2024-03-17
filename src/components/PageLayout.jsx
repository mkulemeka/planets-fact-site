import "./pageLayout.scss";

import PropTypes from "prop-types";

const PageLayout = ({ planetData }) => {
  return (
    <section className="planet-section max-w-[90%]  mx-auto">
      <section className="planet-section__links">
        <a href="/">Overview</a>
        <a href="/">Internal Structure</a>
        <a href="/">Surface Geology</a>
      </section>
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
      <section className="planet-section__stats grid gap-2 md:grid-cols-4">
        <div className="stats-stat uppercase">
          <h3>Rotation Time</h3>
          <p>{planetData.rotation}</p>
        </div>
        <div className="stats-stat uppercase">
          <h3>Revolution Time</h3>
          <p>{planetData.revolution}</p>
        </div>
        <div className="stats-stat uppercase">
          <h3>Radius</h3>
          <p>{planetData.radius}</p>
        </div>
        <div className="stats-stat uppercase">
          <h3>Average Temp.</h3>
          <p>{planetData.temperature}</p>
        </div>
      </section>
    </section>
  );
};

PageLayout.propTypes = {
  planetData: PropTypes.object.isRequired,
};

export default PageLayout;
