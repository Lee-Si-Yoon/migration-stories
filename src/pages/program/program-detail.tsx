import { motion } from "framer-motion";
import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import { programs, type ProgramJSON } from "./programs-23";
import classes from "./programs-detail.module.scss";
import Button from "../../components/buttons/button";
import { ReactComponent as XCancelIcon } from "../../components/svg/x-cancel.svg";

function ProgramDetailPage() {
  const navigate = useNavigate();
  const { programName = "" } = useParams();

  const currentProgram = programs.find((p) => String(p.id) === programName) as
    | ProgramJSON
    | undefined;

  if (currentProgram === undefined) return <Navigate to=".." />;

  return (
    <div className={classes.Layout}>
      <Button
        onPress={() => {
          navigate("..");
        }}
        className={classes.BackButton}
      >
        <XCancelIcon width={24} height={24} />
      </Button>
      <div className={classes.GroupContainer}>
        <motion.div
          initial={{ x: -150 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "linear" }}
          className={classes.ProgramContentContainer}
        >
          {parsedProgramDetailTexts(currentProgram)}
        </motion.div>
        <div className={classes.ProgramImageContainer}>
          <motion.img
            initial={{ x: 150 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
            alt={currentProgram.imgSrc}
            src={currentProgram.imgSrc}
          />
        </div>
      </div>
    </div>
  );
}

const parsedProgramDetailTexts = (data: ProgramJSON) => {
  const { id, imgSrc, ...rest } = data;

  return (
    <div className={classes.ProgramText}>
      {Object.entries(rest).map(([key, value]) => {
        if (key.includes("name")) return <span key={`${key}`}>{value}</span>;

        return <span key={`${key}`}>{`${key + " :"} ${value}`}</span>;
      })}
    </div>
  );
};

ProgramDetailPage.displayName = "ProgramDetailPage";

export default ProgramDetailPage;
