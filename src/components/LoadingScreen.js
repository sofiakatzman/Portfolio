import React from "react";

const LoadingScreen = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "#fff", // Replace with your preferred background color or image
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999, // Ensure it appears above other content
      }}
    >
      <h2>Loading...</h2>
      {/* You can add a spinner or any other loading animation here */}
    </div>
  );
};

export default LoadingScreen;
