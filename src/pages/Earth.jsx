import { PageLayout } from "../containers";
import PropTypes from "prop-types";

const Earth = ({ planetData }) => {
  return <PageLayout planetData={planetData} />;
};

Earth.propTypes = {
  planetData: PropTypes.object.isRequired,
};

export default Earth;
