// pages/index.js
import React from "react";

const IndexPage = () => {
  return (
    <div
      style={{
        background: 'url("/bg.jpg") center/cover no-repeat',
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(5px)",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h1>Ethio Students</h1>
        <p>Discover the power of education with our Ethio Students.</p>
        <div style={{ marginTop: "30px" }}>
          <a
            href="https://github.com/aMirD3v/Ethio_Students/releases/download/v1.0.0/Ethio.Students.apk"
            className="download-button"
            style={{
              backgroundColor: "#fff",
              color: "#493d8a",
              padding: "10px 20px",
              fontSize: "16px",
              textDecoration: "none",
              borderRadius: "5px",
              transition: "background-color 0.3s ease",
              display: "inline-block",
            }}
          >
            Download App
          </a>
        </div>
        <div className="app-details" style={{ marginTop: "30px" }}>
          <h2>App Details</h2>
          <p>
            Explore our amazing features and enhance your learning experience.
          </p>
        </div>
        <div className="contact" style={{ marginTop: "30px" }}>
          <h3>Contact Us</h3>
          <p style={{ fontSize: 12 }}>Email: elmezakaria@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
