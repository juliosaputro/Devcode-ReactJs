import React from "react";
import { IsMobile } from "../helper/utils";
import { Box, TypographyProps, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CardActivity({
  tittle = "Daftar Belanja Bulanan",
  date = "5 Oktober 2021",
}) {
  return (
    <>
      {IsMobile() ? (
        <Box
          style={{
            width: 150,
            height: 150,
            paddingBlock: 13,
            paddingInline: 17,
            borderRadius: 12,
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{
              fontSize: 14,
              fontWeight: "700",
              fontFamily: "Poppins",
              color: "#111111",
            }}
          >
            {tittle}
          </Typography>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              style={{
                fontSize: 10,
                fontWeight: "500",
                fontFamily: "Poppins",
                color: "#888888",
              }}
            >
              {date}
            </Typography>
            <IconButton aria-label="delete" size="medium">
              <DeleteIcon color="#888888" style={{width:20, height:20}}/>
            </IconButton>
          </Box>
        </Box>
      ) : (
        <Box
          style={{
            width: 234,
            height: 234,
            paddingBlock: 22,
            paddingInline: 27,
            borderRadius: 12,
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{
              fontSize: 18,
              fontWeight: "700",
              fontFamily: "Poppins",
              color: "#111111",
            }}
          >
            {tittle}
          </Typography>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              style={{
                fontSize: 14,
                fontWeight: "500",
                fontFamily: "Poppins",
                color: "#888888",
              }}
            >
              {date}
            </Typography>
            <IconButton aria-label="delete" size="large">
              <DeleteIcon color="#888888" />
            </IconButton>
          </Box>
        </Box>
      )}
    </>
  );
}
