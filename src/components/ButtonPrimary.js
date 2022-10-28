import React from 'react'
import { Button } from '@mui/material'
import { IsMobile } from '../helper/utils'

export default function ButtonPrimary({tittle='', onClick, icon, disabled=false}) {
  return (
    <>
    {
        IsMobile() ? (
            <Button variant='contained' startIcon={icon} onClick={onClick} style={{
                width:100,
                height:37,
                borderRadius:45,
                backgroundColor:'#16ABF8',
                fontSize:12,
                lineHeight:18,
                fontWeight:'600',
              }}>
                {tittle}
              </Button>
        ) : (
            <Button disabled={disabled} variant='contained' startIcon={icon} onClick={onClick} style={{
                width:159,
                height:54,
                borderRadius:45,
                backgroundColor:'#16ABF8',
                fontSize:18,
                lineHeight:27,
                fontWeight:'600',
              }}>
                {tittle}
              </Button>
        )
    }
      
    </>
  )
}
