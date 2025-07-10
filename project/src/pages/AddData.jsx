// src/pages/AddData.jsx
import React, { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "../firebase";

export default function AddData() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMsg, setModalMsg] = useState("");

  // ✅ Updated validation function
  const validate = async () => {
    if (!/^[A-Za-z0-9\-]{3,10}$/.test(id)) {
      return "ID must be 3–10 letters, numbers or hyphens";
    }

    if (!/^[A-Za-z ]{1,60}$/.test(name)) {
      return "Name must be 1–60 letters or spaces only";
    }

    const num = Number(age);
    if (Number.isNaN(num) || num < 5 || num > 110) {
      return "Age must be between 5 and 110";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Please enter a valid email address";
    }

    // ✅ Check if student ID already exists in backend
    try {
      const existing = await fetch("http://localhost:3000/students");
      const students = await existing.json();
      const found = students.find((student) => student.id === id);
      if (found) {
        return "This Student ID already exists. Please use a unique one.";
      }
    } catch (err) {
      return "Error checking ID uniqueness.";
    }

    return null;
  };

  const AddStudent = async (e) => {
    e.preventDefault();

    const err = await validate();
    if (err) {
      setModalMsg(err);
      return setShowModal(true);
    }

    try {
      await createUserWithEmailAndPassword(auth, email, "Default#123");
    } catch (fbErr) {
      setModalMsg("Auth error: " + fbErr.message);
      return setShowModal(true);
    }

    try {
      const res = await fetch("http://localhost:3000/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, name, age, email }),
      });
      if (!res.ok) throw new Error("Server rejected data");

      setModalMsg("✅ Student added successfully!");
      setId("");
      setName("");
      setAge("");
      setEmail("");
    } catch (apiErr) {
      setModalMsg("Save error: " + apiErr.message);
    }

    setShowModal(true);
  };

  return (
    <div className="container py-5 px-3">
      <div className="text-center mb-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2165/2165001.png"
          alt="Add Student"
          width={80}
          className="mb-3"
        />
        <h2 className="fw-bold text-success">➕ Add New Student</h2>
        <p className="text-muted">Fill in the details to add a student</p>
      </div>

      <div
        className="mx-auto bg-white shadow rounded p-4"
        style={{ maxWidth: 450 }}
      >
        <form onSubmit={AddStudent}>
          <div className="mb-3">
            <label className="form-label">Student ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. STU-001"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              placeholder="5–110"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            ✅ Add Student
          </button>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex={-1}
          onClick={() => setShowModal(false)}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Notice</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                />
              </div>
              <div className="modal-body">
                <p>{modalMsg}</p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-primary"
                  onClick={() => setShowModal(false)}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="text-center mt-4">
        <small className="text-muted">Built with React.js + Bootstrap 5</small>
      </div>
    </div>
  );
}
