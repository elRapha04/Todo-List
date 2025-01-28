import { useEffect, useRef } from "react";

const MouseFollower = () => {
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    const speed = 0.1; // Adjust for smoother or snappier animation

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const animateFollower = () => {
      followerX += (mouseX - followerX) * speed;
      followerY += (mouseY - followerY) * speed;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${followerX}px, ${followerY}px)`;
      }

      requestAnimationFrame(animateFollower);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animateFollower(); // Start the animation loop

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      style={{
        position: "absolute",
        width: "10px",
        height: "10px",
        backgroundColor: "white",
        borderRadius: "50%",
        pointerEvents: "none", // Prevent interaction
        transform: "translate(-50%, -50%)", // Center the follower
      }}
    ></div>
  );
};

const MouseAnim = () => {
  return (
    <div>
      <MouseFollower />
    </div>
  );
};

export default MouseAnim;
