import React from "react";
import { IsMobile } from "../helper/utils";
import { Box, TypographyProps, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CardListItem({ tittle = "Daftar Belanja Bulanan", onClick }) {
  return (
    <>
      {IsMobile() ? (
        <Box
          style={{
            width: 319,
            height: 59,
            marginBlock: 9,
            paddingBlock: 13,
            paddingInline: 17,
            borderRadius: 12,
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
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
          <IconButton aria-label="delete" size="medium" onClick={onClick}>
            <DeleteIcon color="#888888" style={{ width: 20, height: 20 }}/>
          </IconButton>
        </Box>
      ) : (
        <Box
          style={{
            width: 1000,
            height: 80,
            marginBlock:10,
            paddingBlock: 22,
            paddingInline: 27,
            borderRadius: 12,
            backgroundColor: "#fff",
            display: "flex",
            alignItems:'center',
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
          <IconButton aria-label="delete" size="large" onClick={onClick}>
            <DeleteIcon color="#888888" />
          </IconButton>
        </Box>
      )}
    </>
  );
}
