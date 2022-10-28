import React from 'react'
import { IsMobile } from '../helper/utils'
import NewActivityMobile from './mobile/NewActivityMobile'
import NewActivityWeb from './web/NewActivityWeb'

export default function NewActivity() {
  return (
    <>
    {
      IsMobile() ? (
          <NewActivityMobile/>
      ) : (
          <NewActivityWeb/>
      )
    }
  </>
  )
}
