import React from "react";
import { Html, useProgress } from "@react-three/drei";
// import { useEffect } from "react";

export default function Loader() {
  const { progress } = useProgress();
  // useEffect(() => {
  //   if (loaded) {
  //     loadingFunc(true);
  //   }
  // }, [loadingFunc, loaded]);
  return (
    <Html center>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ color: "white" }}>{+progress.toFixed(1)} %</p>
      </div>
    </Html>
  );
}
