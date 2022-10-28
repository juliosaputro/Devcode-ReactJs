import React, { useState } from "react";
import {
  Modal,
  Typography,
  Box,
  IconButton,
  TextField,
  FormControl,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import { IsMobile } from "../helper/utils";
import CloseIcon from "@mui/icons-material/Close";
import CircleIcon from "@mui/icons-material/Circle";
import { PriorityOption } from "../helper/DataDummy";
import ButtonPrimary from "./ButtonPrimary";
import axios from "axios";
import { urlListItem } from "../helper/utils";

export default function ModalAddItem({ open, handleClose }) {
  const [prioritas, setPrioritas] = useState();
  const [namaList, setNamaList] = useState();
  console.log(namaList, "disabled");
  const handleChange = (e) => {
    setPrioritas(e.target.value);
  };

  const SaveButton = () => {
    if (namaList === undefined) {
      return <ButtonPrimary tittle="Simpan" disabled={true} />;
    } else {
      return <ButtonPrimary tittle="Simpan" onClick={() => AddActivity()} />;
    }
  };

  const AddActivity = () => {
    axios
      .post(urlListItem, {
        tittle: "cobain",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      {IsMobile() ? (
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "15%",
              left: "10%",
            }}
          >
            <Box
              sx={{
                height: 382,
                width: 320,
                backgroundColor: "#fff",
                borderRadius: 8,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  height: 60,
                  paddingInline: 3,
                  alignItems: "center",
                  borderBottom: "1px solid #E5E5E5",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                >
                  Tambah List Item
                </Typography>
                <IconButton onClick={handleClose} size="medium">
                  <CloseIcon color="#E5E5E5" />
                </IconButton>
              </Box>
              <Box
                style={{
                  height: 245,
                  padding: 25,
                  borderBottom: "1px solid #E5E5E5",
                }}
              >
                <Box>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontSize: 10,
                      fontWeight: "600",
                    }}
                  >
                    NAMA LIST ITEM
                  </Typography>
                  <TextField
                    variant="outlined"
                    fullWidth
                    style={{ height: 52, marginTop: 9 }}
                    placeholder="Tambahkan nama list item"
                    onChange={(e) => setNamaList(e.target.value)}
                  />
                </Box>
                <Box sx={{ marginTop: 5 }}>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontSize: 10,
                      fontWeight: "600",
                    }}
                  >
                    PRIORITY
                  </Typography>
                  <FormControl>
                    <Select
                      sx={{
                        width: 278,
                        height: 52,
                        borderRadius: 6,
                        marginTop: 1,
                      }}
                      value={prioritas}
                      onChange={handleChange}
                    >
                      {PriorityOption.map((x, y) => {
                        return (
                          <MenuItem
                            key={y}
                            value={x.priority}
                            sx={{ alignItems: "center" }}
                          >
                            <Button
                              startIcon={
                                <CircleIcon
                                  sx={{ color: `${x.color}`, marginRight: 2 }}
                                />
                              }
                            >
                              <Typography
                                style={{
                                  fontFamily: "Poppins",
                                  fontSize: 16,
                                  fontWeight: "600",
                                  color: "#111111",
                                }}
                              >
                                {x.priority}
                              </Typography>
                            </Button>
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "right",
                  paddingInline: 3,
                  paddingBlock: 2,
                }}
              >
                {SaveButton()}
              </Box>
            </Box>
          </Box>
        </Modal>
      ) : (
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "25%",
              left: "30%",
            }}
          >
            <Box
              sx={{
                height: 403,
                width: 830,
                backgroundColor: "#fff",
                borderRadius: 12,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  height: 70,
                  paddingInline: 5,
                  alignItems: "center",
                  borderBottom: "1px solid #E5E5E5",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: 18,
                    fontWeight: "600",
                  }}
                >
                  Tambah List Item
                </Typography>
                <IconButton onClick={handleClose} size="large">
                  <CloseIcon color="#E5E5E5" />
                </IconButton>
              </Box>
              <Box
                style={{
                  height: 245,
                  padding: 25,
                  borderBottom: "1px solid #E5E5E5",
                }}
              >
                <Box>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontSize: 12,
                      fontWeight: "600",
                    }}
                  >
                    NAMA LIST ITEM
                  </Typography>
                  <TextField
                    variant="outlined"
                    fullWidth
                    style={{ height: 52, marginTop: 9 }}
                    placeholder="Tambahkan nama list item"
                    onChange={(e) => setNamaList(e.target.value)}
                  />
                </Box>
                <Box sx={{ marginTop: 5 }}>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontSize: 12,
                      fontWeight: "600",
                    }}
                  >
                    PRIORITY
                  </Typography>
                  <FormControl>
                    <Select
                      sx={{
                        width: 205,
                        height: 52,
                        borderRadius: 6,
                        marginTop: 1,
                      }}
                      value={prioritas}
                      onChange={handleChange}
                    >
                      {PriorityOption.map((x, y) => {
                        return (
                          <MenuItem
                            key={y}
                            value={x.priority}
                            sx={{ alignItems: "center" }}
                          >
                            <Button
                              startIcon={
                                <CircleIcon
                                  sx={{ color: `${x.color}`, marginRight: 2 }}
                                />
                              }
                            >
                              <Typography
                                style={{
                                  fontFamily: "Poppins",
                                  fontSize: 16,
                                  fontWeight: "600",
                                  color: "#111111",
                                }}
                              >
                                {x.priority}
                              </Typography>
                            </Button>
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "right",
                  paddingInline: 8,
                  paddingBlock: 2,
                }}
              >
                {SaveButton()}
              </Box>
            </Box>
          </Box>
        </Modal>
      )}
    </>
  );
}
