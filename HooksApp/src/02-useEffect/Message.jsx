import { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      const coords = { x, y };
      setCoords(coords);
    };

    window.addEventListener("mousemove", onMouseMove);
    console.log("Message mounted");

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  });
  return (
    <>
      <h3>User already exist</h3>
      {JSON.stringify(coords)}
    </>
  );
};
