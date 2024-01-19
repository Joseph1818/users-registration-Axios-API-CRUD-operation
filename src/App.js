import "./App.css";
import Create from "./component/create";
import Read from "./component/read";
import Update from "./component/update";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">Users Registration form</h2>
        <Routes>
          <Route exact path="*" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
