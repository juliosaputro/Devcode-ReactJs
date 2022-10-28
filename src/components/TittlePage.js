import React from "react";
import { Typography } from "@mui/material";
import { IsMobile } from "../helper/utils";

export default function TittlePage({ tittle = "tittle" }) {
  return (
    <>
      {IsMobile() ? (
        <Typography
          style={{
            // fontFamily: "poppins",
            fontSize: 16,
            fontWeight: "700",
            lineHeight: "24px",
          }}
        >
          {tittle}
        </Typography>
      ) : (
        <Typography
          style={{
            // fontFamily: "poppins",
            fontSize: 36,
            fontWeight: "700",
            lineHeight: "54px",
          }}
        >
          {tittle}
        </Typography>
      )}
    </>
  );
}
