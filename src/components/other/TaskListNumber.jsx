import React from 'react'

const TaskListNumber = ({ data }) => {
  return (
    <div className="no-scrollbar mt-10 flex w-[100%] justify-between gap-5 overflow-scroll">
      <div className="w-[25%] rounded-xl bg-red-400 px-9 py-6">
        <h2 className="text-2xl font-bold">{data.taskCounts.newTask}</h2>
        <h4 className="text-xl font-medium">New Task</h4>
      </div>
      <div className="w-[25%] rounded-xl bg-blue-400 px-9 py-6">
        <h2 className="text-2xl font-bold">{data.taskCounts.completed}</h2>
        <h4 className="text-xl font-medium">Completed Task</h4>
      </div>
      <div className="w-[25%] rounded-xl bg-green-400 px-9 py-6">
        <h2 className="text-2xl font-bold text-black">
          {data.taskCounts.active}
        </h2>
        <h4 className="text-xl font-medium">Accepted Task</h4>
      </div>
      <div className="w-[25%] rounded-xl bg-gray-400 px-9 py-6">
        <h2 className="text-2xl font-bold">{data.taskCounts.failed}</h2>
        <h4 className="text-xl font-medium">Failed Task</h4>
      </div>
    </div>
  )
}

export default TaskListNumber
