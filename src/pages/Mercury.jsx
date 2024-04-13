import { PageLayout } from "../containers";
import PropTypes from "prop-types";

const Mercury = ({ planetData }) => {
  return <PageLayout planetData={planetData} />;
};

Mercury.propTypes = {
  planetData: PropTypes.object.isRequired,
};

export default Mercury;
