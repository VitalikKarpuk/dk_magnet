import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/modules";
import Layout from "./components/organisms/modules/layout";
import classNames from "classnames";
import Page404 from "./pages/404";

function App() {
  return (
    <div className={classNames("App")}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/404" element={<Page404 />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
