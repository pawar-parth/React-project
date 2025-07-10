import { Routes, Route, Link } from "react-router-dom";
import Display from "./pages/Display";
import AddData from "./pages/AddData";
import Data from "./pages/Data";
import "./App.css";

function App() {
  return (
    <div className="container mt-4">
      <div className="mb-4 container text-center">
        <Link className="btn btn-primary me-2" to="/">
          Display Data
        </Link>
        <Link className="btn btn-success color-primary" to="/add">
          Add New Data
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Display />} />
        <Route path="/add" element={<AddData />} />
        <Route path="/edit/:id" element={<Data />} />
      </Routes>
    </div>
  );
}

export default App;
