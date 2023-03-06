import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { Diffs } from "../types/types";

type JsonDiffProps = {
  diffs: Diffs;
};

const JsonDiff = ({ diffs }: JsonDiffProps) => {
  return (
    <div>
      <Typography variant="h5" fontWeight={700}>
        Your JSON diff:
      </Typography>
      <Box
        sx={{
          fontSize: "medium",
          textAlign: "left",
          backgroundColor: "white",
          minHeight: "20rem",
          minWidth: "20rem",
          overflow: "auto",
          padding: "1rem 2rem",
          margin: "2rem",
          resize: "vertical",
        }}
      >
        {diffs &&
          diffs.length > 0 &&
          diffs.map((diff) => {
            return (
              <Box key={diff.name}>
                <h5>{diff.name} missing keys</h5>
                <div>
                  {diff.diff.size === 0 ? (
                    <p>(No missing keys)</p>
                  ) : (
                    Array.from(diff.diff).map((missingKey) => (
                      <p key={missingKey}>{missingKey}</p>
                    ))
                  )}
                </div>
              </Box>
            );
          })}
      </Box>
    </div>
  );
};

export default JsonDiff;
