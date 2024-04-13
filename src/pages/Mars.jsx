import { PageLayout } from "../containers";
import PropTypes from "prop-types";

const Mars = ({ planetData }) => {
  return <PageLayout planetData={planetData} />;
};

Mars.propTypes = {
  planetData: PropTypes.object.isRequired,
};

export default Mars;
