import React, {useState, useEffect} from "react";
import axios from "axios";
import { Container, Box } from "@mui/material";
import CardListItem from "../../components/CardListItem";
import ButtonPrimary from "../../components/ButtonPrimary";
import TittlePage from "../../components/TittlePage";
import AddIcon from "@mui/icons-material/Add";
import ActivityContent from "../../assets/activity.png";
import { dataListItem } from "../../helper/DataDummy";
import ModalAddItem from "../../components/ModalAddItem";
import ModalDelete from "../../components/ModalDelete";



const baseUrl = 'https://todo.api.devcode.gethired.id/todo-items'


export default function NewActivityWeb() {

  const [open, setOpen] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)
  const handleClose = () => setOpen(false)
  const handleCloseDelete = () => setOpenDelete(false)

  const [dataList, setDataList] = useState([])


  useEffect(()=>{
    axios.get(baseUrl).then((res)=>{
      console.log(res.data.data);
      setDataList(res.data.data)
    }).catch((e)=>{
      console.log(e)
    })
  },[])

  


  const MainContent = () => {
    if (dataListItem === null) {
      return (
        <>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingInline: 30,
              alignItems: "center",
            }}
          >
            <TittlePage tittle="New Activity" />
            <ButtonPrimary
              tittle="Tambah"
              icon={<AddIcon style={{ width: "24px", height: "24px" }} />}
            />
          </Box>
          <Box
            style={{ display: "flex", justifyContent: "center", marginTop: 65 }}
          >
            <img alt="" src={ActivityContent} width={767} height={490} />
          </Box>
        </>
      );
    } else {
      return (
        <>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingInline: 30,
              alignItems: "center",
            }}
          >
            <TittlePage tittle="Daftar Belanja Bulanan" />
            <ButtonPrimary
              tittle="Tambah"
              onClick={()=>setOpen(true)}
              icon={<AddIcon style={{ width: "24px", height: "24px" }} />}
            />
          </Box>
            {open && <ModalAddItem open={setOpen} handleClose={handleClose}/>}
          <Box style={{ marginBlock: 30, alignItems:'center', display:'flex', flexDirection:'column'}}>
              {dataList.map((x, y) => {
                const CardValues = Object.values(x)
                console.log(CardValues[1], 'values')
                return (
                  <Box>
                    <CardListItem key={y} tittle={CardValues[1]} onClick={()=>setOpenDelete(true) }/>
                  </Box>
                );
              })}
          {openDelete && <ModalDelete open={setOpenDelete} handleClose={handleCloseDelete}/>}
          </Box>
        </>
      );
    }
  };
  return (
    <Container maxWidth={"xl"} sx={{ marginTop: 18 }}>
      {MainContent()}
    </Container>
  );
}
