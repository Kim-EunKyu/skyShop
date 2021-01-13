import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";
import MainPages from "./pages/MainPages";

function App() {
  return <Route component={MainPages} path="/" exact />;
}

export default App;
