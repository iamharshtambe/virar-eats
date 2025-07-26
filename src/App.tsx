import "./index.css";
import Header from "./components/Header.tsx";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./store/appStore.ts";

function App() {
  return (
    <Provider store={appStore}>
      <div className="bg mx-auto max-w-screen-xl px-10">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
