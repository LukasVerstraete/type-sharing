import ReactDOM from "react-dom";
import { Header } from "./components";

import "./index.scss";

const App = () => (
  <div>
    <Header />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
