import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import AddEmployeeForm from './Addemployee'

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext)

  const handleReset = () => {
    const resetEmployees = userData.employees.map((emp) => ({
      ...emp,
      taskCounts: {
        active: 0,
        newTask: 0,
        completed: 0,
        failed: 0,
      },
      tasks: [],
    }))

    const updatedUserData = { ...userData, employees: resetEmployees }

    setUserData(updatedUserData)

    localStorage.setItem('employees', JSON.stringify(resetEmployees))
  }

  return (
    <div className="no-scrollbar mt-5 rounded bg-[#1c1c1c] p-5">
      <div className="scroll-none mb-2 flex justify-between rounded bg-red-400 px-4 py-5 text-white">
        <h2 className="w-1/4 text-lg font-semibold">Employee Name</h2>
        <h3 className="w-1/5 text-lg font-semibold">New Tasks</h3>
        <h5 className="w-1/5 text-lg font-semibold">Active Tasks</h5>
        <h5 className="w-1/5 text-lg font-semibold">Completed Tasks</h5>
        <h5 className="w-1/5 text-lg font-semibold">Failed Tasks</h5>
      </div>

      <div className="no-scrollbar overflow-auto">
        {userData.employees.map((employee, index) => (
          <div
            key={index}
            className="mb-2 flex items-center justify-between rounded border border-emerald-400 bg-[#121212] px-6 py-4 shadow-sm transition hover:shadow-md"
          >
            <div className="w-1/4">
              <h2 className="text-lg font-semibold text-white">
                {employee.firstName}
              </h2>
              <p className="text-sm text-gray-400">{employee.email}</p>
            </div>

            <div className="flex w-3/4 justify-around text-center text-white">
              <div>
                <h3 className="text-sm font-medium text-blue-500">New</h3>
                <p className="text-lg font-semibold">
                  {employee.taskCounts.newTask}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-yellow-400">Active</h3>
                <p className="text-lg font-semibold">
                  {employee.taskCounts.active}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-green-400">
                  Completed
                </h3>
                <p className="text-lg font-semibold">
                  {employee.taskCounts.completed}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-red-400">Failed</h3>
                <p className="text-lg font-semibold">
                  {employee.taskCounts.failed}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleReset}
          className="align-center mt-2 flex justify-center rounded bg-[#5cc387] px-7 py-2 font-semibold text-white transition-colors duration-200 hover:bg-[#47a06f]"
        >
          Reset All Tasks
        </button>
      </div>
    </div>
  )
}

export default AllTask
