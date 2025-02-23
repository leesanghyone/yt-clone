import React from 'react'

const page = (props: any) => {
  return (
    <div>Playlist{props?.searchParams?.id}</div>
  )
}

export default page