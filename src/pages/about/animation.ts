const fadeInUp = {
  initial: { opacity: 0, display: "none", y: 40 },
  animate: { opacity: 1, display: "initial", y: 0 },
  exit: { opacity: 0, display: "none" },
  transition: {
    duration: 1,
    delay: 0.1,
    ease: [0.6, -0.5, 0.01, 0.99],
  },
};

export { fadeInUp };
