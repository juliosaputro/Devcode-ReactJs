import React, {useState, useEffect} from 'react'
import { AppBar, Box, Typography, Toolbar } from '@mui/material'
import { IsMobile } from '../helper/utils'

export default function TopBar() {

  return (
    <>
    {
        IsMobile() ? (
      <AppBar sx={{backgroundColor:'#16ABF8', height:'64px', boxShadow:'inherit', display:'flex', justifyContent:'center'}}>
        <Toolbar>
        <Typography style={{
            fontSize:18,
            fontWeight:'700',
            fontFamily:'Poppins',
            lineHeight:27
        }}>To Do List App</Typography>
        </Toolbar>
      </AppBar>
        ) : (
            <AppBar sx={{backgroundColor:'#16ABF8', height:'105px', boxShadow:'inherit', display:'flex', justifyContent:'center', paddingInline:'220px'}}>
        <Toolbar>
        <Typography style={{
            fontSize:24,
            fontWeight:'700',
            fontFamily:'Poppins',
            lineHeight:36
        }}>To Do List App</Typography>
        </Toolbar>
      </AppBar>
        )
    }
    </>
  )
}
