import "./index.css";
import Header from "./components/Header.tsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg mx-auto max-w-screen-xl px-10">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
