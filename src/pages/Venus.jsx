import { PageLayout } from "../components";
import PropTypes from "prop-types";

const Venus = ({ planetData }) => {
  return <PageLayout planetData={planetData} />;
};

Venus.propTypes = {
  planetData: PropTypes.object.isRequired,
};

export default Venus;
