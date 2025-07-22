import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import RestroContainer from "./components/RestroContainer";
import About from "./components/About";
import RestroMenu from "./components/RestroMenu";
import Error from "./components/Error.tsx";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <RestroContainer />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "restaurants/:restroId",
        element: <RestroMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
