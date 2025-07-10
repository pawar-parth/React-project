import React, { useState } from "react";

function AddData() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const AddStudent = async (e) => {
    e.preventDefault();

    const url = "http://localhost:3000/students";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, name, age, email }),
      });

      if (response.ok) {
        alert("✅ Student Added Successfully");
        const result = await response.json();
        console.log("Student added:", result);

        // Clear fields
        setId("");
        setName("");
        setAge("");
        setEmail("");
      } else {
        throw new Error("Failed to add student");
      }
    } catch (error) {
      console.error("❌ Error adding student:", error);
      alert("An error occurred while adding student");
    }
  };

  return (
    <div className="container py-5 px-3">
      <div className="text-center mb-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2165/2165001.png"
          alt="Add Student"
          className="img-fluid mb-3"
          style={{ width: "80px" }}
        />
        <h2 className="fw-bold text-success fs-3 fs-md-2">
          ➕ Add New Student
        </h2>
        <p className="text-muted fs-6 fs-md-5">
          Fill in the details to add a student to the database
        </p>
      </div>

      <div
        className="mx-auto bg-white shadow rounded p-4"
        style={{ maxWidth: "450px" }}
      >
        <form onSubmit={AddStudent}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Student ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
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

          <button type="submit" className="btn btn-success w-100 fw-semibold">
            ✅ Add Student
          </button>
        </form>
      </div>

      <div className="text-center mt-4">
        <small className="text-muted">
          Built with 💻 React.js + Bootstrap 5 — Add Students Easily!
        </small>
      </div>
    </div>
  );
}

export default AddData;
