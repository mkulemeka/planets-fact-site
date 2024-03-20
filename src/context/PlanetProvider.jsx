import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import { createContext } from "react";
import planetData from "../../data.json";

const PlanetContext = createContext();

const PlanetProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const contextValue = {
    planetData,
    windowWidth,
  };

  return (
    <PlanetContext.Provider value={contextValue}>
      {children}
    </PlanetContext.Provider>
  );
};

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PlanetProvider, PlanetContext };
