import * as Pages from "./pages";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { AppLayout } from "./components";
import { PlanetProvider } from "./context/PlanetProvider";
import data from "../data.json";

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

const App = () => {
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
  return (
    <PlanetProvider>
      <RouterProvider router={router} />
    </PlanetProvider>
  );
};

export default App;
