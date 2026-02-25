import React from 'react'

export const Item = ({name,isPacked}) => {

  return (
    // <li>
    //   {isPacked ? name + '☑️' : name}
    // </li>
    <li>{name}{isPacked&& '👌'}</li>
  )
}
