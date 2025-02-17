import React from "react"


export const Small = React.memo(({value}) => {
    console.log("Smallll")
  return (
    <small>{value}</small>  )
})
