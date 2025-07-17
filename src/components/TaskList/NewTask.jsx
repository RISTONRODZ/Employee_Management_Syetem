import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const NewTask = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext)

  const handleAcceptTask = () => {
    const updatedEmployees = userData.employees.map((emp) => {
      if (emp.firstName.toLowerCase() === data.assignTo?.toLowerCase()) {
        const updatedTasks = emp.tasks.map((task) => {
          if (
            task.taskTitle === data.taskTitle &&
            task.taskDate === data.taskDate
          ) {
            return {
              ...task,
              active: true,
              newTask: false,
            }
          }
          return task
        })

        return {
          ...emp,
          tasks: updatedTasks,
          taskCounts: {
            ...emp.taskCounts,
            active: emp.taskCounts.active + 1,
            newTask: emp.taskCounts.newTask - 1,
          },
        }
      }
      return emp
    })

    const updatedUserData = { ...userData, employees: updatedEmployees }

    // Update global context and localStorage
    setUserData(updatedUserData)
    localStorage.setItem('employees', JSON.stringify(updatedEmployees))
  }

  return (
    <div className="no-scrollbar h-[315px] min-h-[270px] w-[300px] flex-shrink-0 overflow-y-auto rounded-xl bg-gray-800 p-6 text-white shadow-lg transition-transform duration-200 hover:scale-[1.02]">
      <div className="mb-4 flex items-center justify-between text-sm">
        <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase">
          {data.category}
        </span>
        <span className="text-gray-400">Due: {data.taskDate}</span>
      </div>

      <h2 className="mt-4 text-2xl font-bold text-gray-100">
        {data.taskTitle}
      </h2>
      <p className="mt-2 line-clamp-3 text-sm text-gray-300">
        {data.taskDescription}
      </p>

      <div className="mt-6">
        <button
          onClick={handleAcceptTask}
          className="focus:ring-opacity-50 w-full rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
        >
          Accept Task
        </button>
      </div>
    </div>
  )
}

export default NewTask
