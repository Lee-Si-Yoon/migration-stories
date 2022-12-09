import styled, { keyframes } from "styled-components";

const load8 = keyframes`
    0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  top: calc(50% - 4em);
  left: calc(50% - 4em);
  width: 5em;
  height: 5em;
  border: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #eee;
  border-radius: 50%;
  animation: ${load8} 1.1s infinite linear;
  transition: opacity 0.3s;
  margin-bottom: 1rem;
`;

export default function Circle() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        zIndex: "99999",
      }}
    >
      <Spinner />
      <p style={{ color: "white" }}>loading...</p>
    </div>
  );
}
