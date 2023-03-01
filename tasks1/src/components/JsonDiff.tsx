import Box from "@mui/material/Box";
import React from "react";
import { Diffs } from "../types/types";

type JsonDiffProps = {
  diffs: Diffs;
};

const JsonDiff = ({ diffs }: JsonDiffProps) => {
  return (
    <div>
      <h5>Your JSON diff:</h5>
      <Box
        sx={{
          // MozAppearance: "textfield-multiline",
          // WebkitAppearance: "textarea",
          // border: "1px solid gray",
          fontSize: "medium",
          textAlign: "left",
          // font: "-webkit-small-control",
          backgroundColor: "white",
          // minHeight: "30rem",
          minHeight: "20rem",
          minWidth: "20rem",
          overflow: "auto",
          padding: "1rem 2rem",
          margin: "5rem",
          resize: "both",
          // width: "400px",
        }}
      >
        {diffs &&
          diffs.length > 0 &&
          diffs.map((diff) => {
            if (diff.diff.size === 0) {
              return <></>;
            }
            return (
              <Box key={diff.name}>
                <h5>{diff.name} missing keys</h5>
                <div>
                  {Array.from(diff.diff).map((missingKey) => (
                    <p key={missingKey}>{missingKey}</p>
                  ))}
                </div>
              </Box>
            );
          })}
      </Box>
    </div>
  );
};

export default JsonDiff;
