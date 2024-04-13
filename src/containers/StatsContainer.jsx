import PropTypes from "prop-types";
import { Stat } from "../components/index";

const StatsContainer = ({ planetData }) => {
  const { rotation, revolution, radius, temperature } = planetData;
  return (
    <section className="planet-section__stats grid gap-4 md:grid-cols-4 px-[1.5rem] lg:gap-8 lg:py-6">
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
