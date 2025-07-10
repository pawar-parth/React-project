import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Data() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const { id: routeId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/students/${routeId}`
        );
        const data = await response.json();
        setId(data.id);
        setName(data.name);
        setAge(data.age);
        setEmail(data.email);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    if (routeId) {
      fetchData();
    }
  }, [routeId]);

  const updateStudent = async (e) => {
    e.preventDefault();
    const updatedStudent = { id, name, age, email };

    try {
      const response = await fetch(`http://localhost:3000/students/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedStudent),
      });

      if (response.ok) {
        alert("✅ Student data updated successfully");
        navigate("/");
      } else {
        alert("❌ Failed to update student");
      }
    } catch (error) {
      alert("Error: " + error.message);
      console.error("Update failed:", error);
    }
  };

  return (
    <div className="container py-5 px-3">
      <div className="text-center mb-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Edit Student"
          className="img-fluid mb-3"
          style={{ width: "80px" }}
        />
        <h2 className="fw-bold text-primary fs-3 fs-md-2">✏️ Edit Student</h2>
        <p className="text-muted fs-6 fs-md-5">
          Modify the student details and save your changes
        </p>
      </div>

      <div
        className="mx-auto bg-white shadow rounded p-4"
        style={{ maxWidth: "450px" }}
      >
        <form onSubmit={updateStudent}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Student ID</label>
            <input
              type="text"
              className="form-control"
              value={id}
              readOnly
              disabled
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Age</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-warning text-white fw-semibold w-100"
          >
            🔄 Update Student
          </button>
        </form>
      </div>

      <div className="text-center mt-4">
        <small className="text-muted">
          Built with 💻 React.js + Bootstrap 5 — Edit with ease!
        </small>
      </div>
    </div>
  );
}

export default Data;
