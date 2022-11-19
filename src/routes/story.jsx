import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import { Model } from "../components/Draco";

const Layout = styled.div`
  width: 100%;
  height: 100%;
`;

const HTMLContent = () => {
  return <h1 style={{ color: "white" }}>hi</h1>;
};

export default function Story() {
  return (
    <Layout>
      <HTMLContent />
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.2} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </Layout>
  );
}
