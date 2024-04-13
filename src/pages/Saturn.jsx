import { PageLayout } from "../containers";
import PropTypes from "prop-types";

const Saturn = ({ planetData }) => {
  return <PageLayout planetData={planetData} />;
};

Saturn.propTypes = {
  planetData: PropTypes.object.isRequired,
};

export default Saturn;
