import { PageLayout } from "../containers";
import PropTypes from "prop-types";

const Uranus = ({ planetData }) => {
  return <PageLayout planetData={planetData} />;
};

Uranus.propTypes = {
  planetData: PropTypes.object.isRequired,
};

export default Uranus;
