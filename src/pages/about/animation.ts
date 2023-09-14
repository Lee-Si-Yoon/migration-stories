const fadeInUp = {
  hidden: {
    y: -60,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export { fadeInUp, stagger };
