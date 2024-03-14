import { Navbar } from "../components";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const AppLayout = ({ planets }) => {
  return (
    <section className=" bg-bg-stars bg-darkBlue h-full w-full text-white">
      <Navbar planets={planets} />
      <Outlet />
    </section>
  );
};

AppLayout.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AppLayout;
