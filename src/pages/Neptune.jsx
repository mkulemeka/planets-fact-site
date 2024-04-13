import { PageLayout } from "../containers";
import PropTypes from "prop-types";

const Neptune = ({ planetData }) => {
  return <PageLayout planetData={planetData} />;
};

Neptune.propTypes = {
  planetData: PropTypes.object.isRequired,
};

export default Neptune;
