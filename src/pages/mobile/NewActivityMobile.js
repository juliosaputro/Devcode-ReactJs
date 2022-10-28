import React, {useState} from "react";
import { dataListItem } from "../../helper/DataDummy";
import { Container, Box, Grid } from "@mui/material";
import CardListItem from "../../components/CardListItem";
import TittlePage from "../../components/TittlePage";
import ButtonPrimary from "../../components/ButtonPrimary";
import AddIcon from "@mui/icons-material/Add";
import ActivityContent from "../../assets/activity.png";
import ModalAddItem from "../../components/ModalAddItem";
import ModalDelete from "../../components/ModalDelete";

export default function NewActivityMobile() {

  const [open, setOpen] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleCloseDelete = () => setOpenDelete(false)

  const MainContent = () => {
    if (dataListItem === null) {
      return (
        <>
          <Box>
              <TittlePage tittle="New Activity Name" />
              <Box
                style={{
                  display: "flex",
                  justifyContent: "right",
                  alignItems: "center",
                }}
              >
                <ButtonPrimary
                  tittle="Tambah"
                  icon={<AddIcon style={{ width: "18px", height: "18px" }} />}
                />
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 147,
              }}
            >
              <img src={ActivityContent} width={319} height={204} />
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                marginBlock: 15,
              }}
            >
              <TittlePage tittle="Buat activity pertamamu" />
            </Box>
          </Box>
        </>
      );
    } else {
      return (
        <Box>
          <TittlePage tittle="Daftar Belanja Bulanan" />
          <Box
            style={{
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
            }}
          >
            <ButtonPrimary
              tittle="Tambah"
              onClick={()=>setOpen(true)}
              icon={<AddIcon style={{ width: "18px", height: "18px" }} />}
            />
          </Box>
          {open && <ModalAddItem open={setOpen} handleClose={handleClose}/>}
          <Box style={{ marginBlock: 30, alignItems:'center', display:'flex', flexDirection:'column' }}>
              {dataListItem.map((x, y) => {
                return (
                  <Box>
                    <CardListItem key={y} tittle={x.tittle} onClick={()=>setOpenDelete(true)}/>
                  </Box>
                );
              })}
              {openDelete && <ModalDelete open={setOpenDelete} handleClose={handleCloseDelete}/>}
          </Box>
        </Box>
      );
    }
  };
  return <Container sx={{ marginTop: 12 }}>{MainContent()}</Container>;
}
