import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Display() {
  const [studentData, setStudentData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    renderData();
  }, []);

  async function renderData() {
    const url = "http://localhost:3000/students";
    let response = await fetch(url);
    response = await response.json();
    setStudentData(response);
  }

  const handleDelete = async (id) => {
    const url = `http://localhost:3000/students/${id}`;
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Student Deleted Successfully");
        renderData();
      } else {
        alert("Failed to delete student");
      }
    } catch (error) {
      console.error("Error deleting student:", error);
      alert("An error occurred");
    }
  };

  const editStudentData = (id) => {
    navigate("/edit/" + id);
  };

  return (
    <div className="container py-4 px-3">
      <div className="text-center mb-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
          alt="Student Icon"
          className="img-fluid mb-3"
          style={{ width: "80px" }}
        />
        <h2 className="fw-bold text-primary fs-3 fs-md-2">
          🎓 Student Management
        </h2>
        <p className="text-muted fs-6 fs-md-5">
          Manage, edit, and view student information seamlessly
        </p>
      </div>

      <div className="bg-white shadow rounded p-3 p-md-4">
        <div
          className="row fw-semibold border-bottom pb-2 text-center d-none d-md-flex"
          style={{ fontSize: "1.1rem" }}
        >
          <div className="col-1">ID</div>
          <div className="col-3">Name</div>
          <div className="col-2">Age</div>
          <div className="col-4">Email</div>
          <div className="col-2">Actions</div>
        </div>

        {studentData.length === 0 ? (
          <div className="text-center text-secondary py-4 fs-6">
            No student records found.
          </div>
        ) : (
          studentData.map((student) => (
            <div
              key={student.id}
              className="row align-items-center border-bottom py-2 text-center"
              style={{ fontSize: "0.95rem" }}
            >
              <div className="col-12 col-md-1 mb-1 mb-md-0 fw-bold">
                {student.id}
              </div>
              <div className="col-12 col-md-3 mb-1 mb-md-0">{student.name}</div>
              <div className="col-12 col-md-2 mb-1 mb-md-0">
                <span className="badge bg-secondary">{student.age}</span>
              </div>
              <div className="col-12 col-md-4 mb-1 mb-md-0">
                {student.email}
              </div>
              <div className="col-12 col-md-2 d-flex justify-content-center gap-2">
                <button
                  onClick={() => editStudentData(student.id)}
                  className="btn btn-sm btn-info text-white"
                  style={{ minWidth: "70px" }}
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => handleDelete(student.id)}
                  className="btn btn-sm btn-danger"
                  style={{ minWidth: "70px" }}
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="text-center mt-4">
        <small className="text-muted">
          Powered by ⚛️ React.js and Bootstrap 5 — Smart & Simple CRUD System
        </small>
      </div>
    </div>
  );
}

export default Display;
