import { motion } from "framer-motion";
import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import type { ProgramJSON, ProgramsJSONProps } from "./program";
import ProgramsJSON from "./programs-23.json";
import classes from "./programs-detail.module.scss";
import Button from "../../components/buttons/button";
import { ReactComponent as XCancelIcon } from "../../components/svg/x-cancel.svg";
import balahnMarket from "../../imgs/programs/balahn-market.webp";
import docentTour from "../../imgs/programs/docent-tour.webp";
import helloNeighbor from "../../imgs/programs/hello-neighbor-talk.webp";
import jimchiWorkshop from "../../imgs/programs/jimchi-workshop.webp";
import mobileMaking from "../../imgs/programs/mobile-making-workshop.webp";
import singingTheater from "../../imgs/programs/singing-story-theater.webp";

const { programs } = JSON.parse(
  JSON.stringify(ProgramsJSON),
) as ProgramsJSONProps;

function ProgramDetailPage() {
  const navigate = useNavigate();
  const { programName = "" } = useParams();

  const currentProgram = programs.find((p) => String(p.id) === programName);

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
          {parsedProgramImage(currentProgram)}
        </div>
      </div>
    </div>
  );
}

const parsedProgramDetailTexts = (data: ProgramJSON) => {
  const { id, ...rest } = data;

  return (
    <div className={classes.ProgramText}>
      {Object.entries(rest).map(([key, value]) => {
        if (key.includes("name")) return <span key={`${key}`}>{value}</span>;

        return <span key={`${key}`}>{`${key + " :"} ${value}`}</span>;
      })}
    </div>
  );
};

const parsedProgramImage = (data: ProgramJSON) => {
  if (data.id === 0) {
    return (
      <motion.img
        initial={{ x: 150 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: "linear" }}
        alt="balahnMarket"
        src={balahnMarket}
      />
    );
  } else if (data.id === 1) {
    return (
      <motion.img
        initial={{ x: 150 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: "linear" }}
        alt="docentTour"
        src={docentTour}
      />
    );
  } else if (data.id === 2) {
    return (
      <motion.img
        initial={{ x: 150 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: "linear" }}
        alt="jimchiWorkshop"
        src={jimchiWorkshop}
      />
    );
  } else if (data.id === 3) {
    return (
      <motion.img
        initial={{ x: 150 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: "linear" }}
        alt="mobileMaking"
        src={mobileMaking}
      />
    );
  } else if (data.id === 4) {
    return (
      <motion.img
        initial={{ x: 150 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: "linear" }}
        alt="helloNeighbor"
        src={helloNeighbor}
      />
    );
  } else if (data.id === 5) {
    return (
      <motion.img
        initial={{ x: 150 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: "linear" }}
        alt="singingTheater"
        src={singingTheater}
      />
    );
  }

  return null;
};

ProgramDetailPage.displayName = "ProgramDetailPage";

export default ProgramDetailPage;
