'use client'
import React from 'react'
import { GridLoader } from 'react-spinners'

const error = () => {
  return (
    <div className='my-20 flex flex-col items-center justify-center gap-4'>
        <GridLoader color="red" />
        <div className='text-[50px]'>Opps!</div>
        <div>잠시 후 다시 확인해주세요...</div>
    </div>
  )
}

export default error