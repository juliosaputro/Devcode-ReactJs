import React from 'react'
import {
    Modal,
    Typography,
    Box,
    Button,
  } from "@mui/material";
  import { IsMobile } from '../helper/utils';
  import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export default function ModalDelete({ open, handleClose }) {

  return (
    <>
    {
        IsMobile () ? (
            <Modal open={open} onClose={handleClose}>
        <Box sx={{
            position: "absolute",
            top: "20%",
            left: "12%",
          }}>
            <Box sx={{width:320, height:300, borderRadius:12, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor:'#fff'}}>
                <WarningAmberIcon sx={{ width:82, height:82, color:'#ED4C5C'}}/>
                <Typography style={{fontFamily:'Poppins', fontSize:14, fontWeight:'500', lineHeight:2}}>Apakah anda yakin menghapus activity</Typography>
                <Typography style={{fontFamily:'Poppins', fontSize:14, fontWeight:'bold'}}>“Meeting dengan Client”?</Typography>
                <Box sx={{width:250 ,display:'flex', justifyContent:'space-between', marginTop:5}}>
                    <Button variant='contained' onClick={handleClose} color='inherit' sx={{
                        width:117,
                        height:48,
                        borderRadius:16,
                        backgroundColor:'#F4F4F4',
                        color:'#000',
                    }}>Batal</Button>
                    <Button variant='contained' color='error' sx={{
                        width:117,
                        height:48,
                        borderRadius:16,
                        backgroundColor:'#ED4C5C',
                        color:'#fff'
                    }}>Hapus</Button>
                </Box>
            </Box>
        </Box>
      </Modal>
        ) : (
      <Modal open={open} onClose={handleClose}>
        <Box sx={{
            position: "absolute",
            top: "25%",
            left: "40%",
          }}>
            <Box sx={{width:490, height:355, borderRadius:12, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor:'#fff'}}>
                <WarningAmberIcon sx={{ width:102, height:102, color:'#ED4C5C'}}/>
                <Typography style={{fontFamily:'Poppins', fontSize:18, fontWeight:'500', lineHeight:3}}>Apakah anda yakin menghapus activity</Typography>
                <Typography style={{fontFamily:'Poppins', fontSize:18, fontWeight:'bold'}}>“Meeting dengan Client”?</Typography>
                <Box sx={{width:360 ,display:'flex', justifyContent:'space-between', marginTop:5}}>
                    <Button variant='contained' color='inherit' sx={{
                        width:150,
                        height:54,
                        borderRadius:16,
                        backgroundColor:'#F4F4F4',
                        color:'#000',
                    }}>Batal</Button>
                    <Button variant='contained' color='error' sx={{
                        width:150,
                        height:54,
                        borderRadius:16,
                        backgroundColor:'#ED4C5C',
                        color:'#fff'
                    }}>Hapus</Button>
                </Box>
            </Box>
        </Box>
      </Modal>

        )
    }
    </>
  )
}
