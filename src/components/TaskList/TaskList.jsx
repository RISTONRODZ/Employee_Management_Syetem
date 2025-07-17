import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="mt-10 flex h-[55%] w-full flex-nowrap items-center justify-start gap-5 overflow-x-auto py-5"
    >
      {data.tasks.map((e, i) => {
        if (e.active) {
          return <AcceptTask key={i} data={e} />
        }
        if (e.newTask) {
          return <NewTask key={i} data={e} />
        }
        if (e.completed) {
          return <CompleteTask key={i} data={e} />
        }
        if (e.failed) {
          return <FailedTask key={i} data={e} />
        }
        return null
      })}
    </div>
  )
}

export default TaskList
