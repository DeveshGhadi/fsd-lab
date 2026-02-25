import React from 'react'
import { Item } from './Item'

export const PackingList = () => {
  return (
    <div>
      <ul>
        <Item name="bags" isPacked={true}></Item>
        <Item name="water" isPacked={false}></Item>
        <Item name="medicines" isPacked={true}></Item>
      </ul>
    </div>
  )
}
