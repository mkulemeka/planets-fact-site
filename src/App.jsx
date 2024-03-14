import * as Pages from "./pages";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { AppLayout } from "./components";
import data from "../data.json";

const App = () => {
  const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];

  const routes = planets.map((planetName) => {
    const Planet = Pages[planetName];
    const planetData = data.find((planet) => planet.name === planetName);
    return {
      path: `${
        planetName === "Mercury" ? "/" : `/${planetName.toLowerCase()}`
      }`,
      element: (
        <Planet key={planetName.toLocaleLowerCase()} planetData={planetData} />
      ),
    };
  });

  const router = createBrowserRouter([
    {
      element: <AppLayout planets={planets} />,
      children: routes,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
