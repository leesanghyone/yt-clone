import React from 'react'

const page = (props: any) => {
    console.log(props)
  return (
    <div>channel/[{props.params.id}]</div>
  )
}

export default page