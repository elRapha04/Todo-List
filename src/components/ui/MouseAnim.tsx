import React, { useState, useEffect } from "react";

const MouseFollower = () => {
  // State to store the mouse position
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update position on mouse move
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    // Add event listener for mouse move
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: "all 0.1s ease",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none", // Prevent interaction with the element
        width: "10px",
        height: "10px",
        backgroundColor: "white",
        borderRadius: "50%",
      }}
    ></div>
  );
};

const MouseAnim = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <MouseFollower />
      {/* Other content of your Todo app */}
    </div>
  );
};

export default MouseAnim;
