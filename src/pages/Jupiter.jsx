import { PageLayout } from "../containers";
import PropTypes from "prop-types";

const Jupiter = ({ planetData }) => {
  return <PageLayout planetData={planetData} />;
};

Jupiter.propTypes = {
  planetData: PropTypes.object.isRequired,
};

export default Jupiter;
