// STYLING
// import styled from "styled-components";
import { motion } from "framer-motion";

export default function ScrollRequest() {
  return (
    <motion.div
      style={{
        width: "10rem",
        height: "4rem",
        position: "absolute",
        bottom: "10rem",
      }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <motion.div
        style={{
          color: "white",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        initial={{
          y: -4,
        }}
        animate={{
          y: 4,
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <div
          style={{
            width: "4rem",
            marginBottom: "1rem",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <h1>스크롤을 내려주세요</h1>
      </motion.div>
    </motion.div>
  );
}
