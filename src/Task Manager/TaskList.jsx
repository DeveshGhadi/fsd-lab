import React from 'react'

export const TaskList = ({tasks}) => {
  return (
    <div>
        <ul>

            {tasks.map((task, index) => {
                return <li key={index}>{task}</li>
            })}
        </ul>
    </div>
  )
}
