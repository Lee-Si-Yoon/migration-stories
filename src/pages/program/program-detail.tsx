import { motion } from "framer-motion";
import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import type { ProgramsJSONProps } from "./program";
import ProgramsJSON from "./programs-23.json";
import classes from "./programs-detail.module.scss";
import Button from "../../components/buttons/button";
import { ReactComponent as XCancelIcon } from "../../components/svg/x-cancel.svg";
import balahnMarket from "../../imgs/programs/balahn-market.webp";

const { programs } = JSON.parse(
  JSON.stringify(ProgramsJSON),
) as ProgramsJSONProps;

function ProgramDetailPage() {
  const navigate = useNavigate();
  const { programName = "" } = useParams();

  const data = programs.find((p) => String(p.id) === programName);

  if (!data) return <Navigate to=".." />;

  const { id, ...rest } = data;

  return (
    <div className={classes.Container}>
      <motion.div
        initial={{ x: -150 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: "linear" }}
        className={classes.ProgramContent}
      >
        <Button
          onPress={() => {
            navigate("..");
          }}
        >
          <XCancelIcon width={24} height={24} />
        </Button>
        <div className={classes.ProgramText}>
          {Object.entries(rest).map(([key, value]) => {
            if (key.includes("name"))
              return <span key={`${key}`}>{value}</span>;

            return <span key={`${key}`}>{`${key + " :"} ${value}`}</span>;
          })}
        </div>
      </motion.div>
      <div className={classes.ProgramImageContainer}>
        {data.id === 0 && (
          <motion.img
            initial={{ x: 150 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
            alt="balahnMarket"
            src={balahnMarket}
          />
        )}
      </div>
    </div>
  );
}

ProgramDetailPage.displayName = "ProgramDetailPage";

export default ProgramDetailPage;
