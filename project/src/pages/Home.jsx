import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff",
        background:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1584697964191-6a3d7bc72b3b')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "2.8rem", fontWeight: "700" }}>
        📘 Student Management System
      </h1>
      <p
        style={{
          maxWidth: "600px",
          fontSize: "1.1rem",
          marginTop: "1rem",
          marginBottom: "2rem",
        }}
      >
        Manage your student records with ease using this CRUD app built in
        React. Add, edit, and view all student data on a clean and responsive
        UI.
      </p>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => navigate("/add")}
          style={{
            padding: "0.75rem 2rem",
            fontSize: "1rem",
            fontWeight: "600",
            backgroundColor: "#28a745",
            border: "none",
            color: "white",
            borderRadius: "0.3rem",
            cursor: "pointer",
          }}
        >
          ➕ Add Student
        </button>

        <button
          onClick={() => navigate("/display")}
          style={{
            padding: "0.75rem 2rem",
            fontSize: "1rem",
            fontWeight: "600",
            backgroundColor: "#007bff",
            border: "none",
            color: "white",
            borderRadius: "0.3rem",
            cursor: "pointer",
          }}
        >
          📋 View Students
        </button>
      </div>

      <p style={{ marginTop: "3rem", fontSize: "0.85rem", color: "#ccc" }}>
        Designed and Developed by Parth Pawar | React.js Project | 2025
      </p>
    </div>
  );
}

export default Home;
