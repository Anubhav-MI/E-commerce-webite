import Titlebar from "./components/titlebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Titlebar />
      </div>
    </Router>
  );
}

export default App;
