import PropTypes from "prop-types";
import { Stat } from "./index";

const StatsContainer = ({ planetData }) => {
  const { rotation, revolution, radius, temperature } = planetData;
  return (
    <section className="planet-section__stats grid gap-2 md:grid-cols-4">
      <Stat title="Rotation Time" stat={rotation} />
      <Stat title="Revolution Time" stat={revolution} />
      <Stat title="Radius" stat={radius} />
      <Stat title="Average Temp." stat={temperature} />
    </section>
  );
};

StatsContainer.propTypes = {
  planetData: PropTypes.object.isRequired,
};

export default StatsContainer;
