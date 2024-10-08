import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

import { programs } from "./programs-23";
import classes from "./programs.module.scss";
import Paths from "../../routes/paths";

function ProgramPage() {
  return (
    <motion.main
      variants={container}
      initial="hidden"
      animate="show"
      className={classes.Container}
    >
      {programs.map((p, i) => (
        <motion.div
          key={p.id}
          variants={i % 2 === 0 ? leftToRight : rightToLeft}
        >
          <Link to={`${Paths[23].program}/${p.id}`} className={classes.Link}>
            {p.name}
          </Link>
        </motion.div>
      ))}
    </motion.main>
  );
}

const container = {
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const leftToRight = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0 },
};

const rightToLeft = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0 },
};

ProgramPage.displayName = "ProgramPage";

export default ProgramPage;
