import { motion } from "framer-motion";
import React from "react";

import classes from "./title.module.scss";

const container = {
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0 },
};

function Title({ data }: { data: string[] }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={classes.TitlesContainer}
    >
      {data.map((title, index) => (
        <motion.p variants={item} key={`${title}-${index}`}>
          {title}
        </motion.p>
      ))}
    </motion.div>
  );
}

Title.displayName = "Title";

export default Title;
