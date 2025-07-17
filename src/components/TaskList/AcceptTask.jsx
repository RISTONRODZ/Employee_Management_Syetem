import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AcceptTask = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext)

  const updateEmployeeTasks = (status) => {
    const updatedEmployees = userData.employees.map((emp) => {
      if (emp.firstName.toLowerCase() === data.assignTo?.toLowerCase()) {
        const updatedTasks = emp.tasks.map((task) => {
          if (
            task.taskTitle === data.taskTitle &&
            task.taskDate === data.taskDate
          ) {
            return {
              ...task,
              completed: status === 'completed',
              failed: status === 'failed',
              active: false,
            }
          }
          return task
        })
        const newCompleted =
          status === 'completed'
            ? emp.taskCounts.completed + 1
            : emp.taskCounts.completed
        const newFailed =
          status === 'failed'
            ? emp.taskCounts.failed + 1
            : emp.taskCounts.failed
        const newActive = Math.max(emp.taskCounts.active - 1, 0)

        return {
          ...emp,
          tasks: updatedTasks,
          taskCounts: {
            ...emp.taskCounts,
            completed: newCompleted,
            failed: newFailed,
            active: newActive,
          },
        }
      }
      return emp
    })

    const updatedUserData = { employees: updatedEmployees }

    setUserData(updatedUserData)
    localStorage.setItem('employees', JSON.stringify(updatedEmployees))
    localStorage.setItem('userData', JSON.stringify(updatedUserData))
  }

  return (
    <div className="no-scrollbar h-[315px] min-h-[270px] w-[300px] flex-shrink-0 overflow-y-auto rounded-xl bg-gray-800 p-6 text-white shadow-lg transition-transform duration-200 hover:scale-[1.02]">
      <div className="mb-4 flex items-center justify-between text-sm">
        <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold tracking-wide uppercase">
          {data.category}
        </span>
        <span className="text-gray-400">Due: {data.taskDate}</span>
      </div>

      <h2 className="mt-4 text-2xl leading-tight font-bold text-gray-100">
        {data.taskTitle}
      </h2>
      <p className="mt-2 line-clamp-3 text-sm text-gray-300">
        {data.taskDescription}
      </p>

      <div className="mt-6 flex flex-col space-y-3">
        <button
          onClick={() => updateEmployeeTasks('completed')}
          className="focus:ring-opacity-50 w-full rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
        >
          Mark as Completed
        </button>
        <button
          onClick={() => updateEmployeeTasks('failed')}
          className="focus:ring-opacity-50 w-full rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:outline-none"
        >
          Mark as Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask
