import React from 'react'
import { Container, Box, Grid } from '@mui/material'
import CardActivity from '../../components/CardActivity'
import TittlePage from "../../components/TittlePage";
import ButtonPrimary from "../../components/ButtonPrimary";
import AddIcon from "@mui/icons-material/Add";
import { dataActivity } from "../../helper/DataDummy";
import ActivityContent from '../../assets/activity.png'

export default function ActivityMobile() {

  const MainContent = () => {
    if (dataActivity === null) {
      return (
        <>
        <Box style={{display:'flex', justifyContent:'center', marginTop:147}}>
        <img src={ActivityContent} width={319} height={204}/>
        </Box>
        <Box style={{display:'flex', justifyContent:'center', marginBlock:15}}>
        <TittlePage tittle='Buat activity pertamamu'/>
        </Box>
        </>
      )
    } else {
      return (
        <>
        <Box style={{ marginBlock: 30, paddingInline: 30 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 16 }}
        >
          {dataActivity.map((x, y) => {
            return (
              <Grid item xs={2} sm={4} md={3} key={y}>
                <CardActivity tittle={x.tittle} date={x.date} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
        </>
      )
    }
  }

  return (
    <Container sx={{marginTop:12}}>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingInline: 30,
          alignItems: "center",
        }}
      >
        <TittlePage tittle="Activity" />
        <ButtonPrimary
          tittle="Tambah"
          icon={<AddIcon style={{ width: "18px", height: "18px" }} />}
        />
      </Box>
      {MainContent()}
    </Container >
  )
}
