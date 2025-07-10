import { Routes, Route, Link } from "react-router-dom";
import Display from "./pages/Display";
import AddData from "./pages/AddData";
import Data from "./pages/Data";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div
      className="container-fluid p-0 d-flex flex-column"
      style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}
    >
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 py-2 sticky-top">
        <Link
          className="navbar-brand fw-bold text-primary fs-4 d-flex align-items-center"
          to="/"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Student Logo"
            width="40"
            height="40"
            className="me-2"
          />
          Student Dashboard
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link text-dark fw-semibold d-flex align-items-center"
                to="/"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
                  alt="Home Icon"
                  width="20"
                  height="20"
                  className="me-1"
                />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark fw-semibold d-flex align-items-center"
                to="/display"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
                  alt="View Icon"
                  width="20"
                  height="20"
                  className="me-1"
                />
                View Students
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark fw-semibold d-flex align-items-center"
                to="/add"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
                  alt="Add Icon"
                  width="20"
                  height="20"
                  className="me-1"
                />
                Add Student
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Page Content */}
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/display" element={<Display />} />
          <Route path="/add" element={<AddData />} />
          <Route path="/edit/:id" element={<Data />} />
        </Routes>
      </div>

      {/* Footer */}
      <footer
        className="text-center py-4 text-muted bg-white border-top mt-auto"
        style={{ fontSize: "0.9rem" }}
      >
        <p className="mb-1">
          &copy; {new Date().getFullYear()} Student Management System
        </p>
        <p className="mb-0">Built with ❤️ using React.js & Bootstrap 5</p>
      </footer>
    </div>
  );
}

export default App;
