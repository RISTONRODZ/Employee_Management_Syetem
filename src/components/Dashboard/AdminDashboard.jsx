import React, { useEffect, useState } from 'react'
import Header from '../other/header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'
import RemoveEmployeeForm from '../other/RemoveEmployeeForm'
import AddEmployeeForm from '../other/Addemployee' // ✅ Make sure this is imported

const AdminDashboard = ({ data, changeUser }) => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('employees')) || []
    setEmployees(stored)
  }, [])

  return (
    <div className="min-h-screen w-full p-10 text-white">
      <Header data={data} changeUser={changeUser} />
      <CreateTask employees={employees} setEmployees={setEmployees} />
      <AllTask employees={employees} setEmployees={setEmployees} />
      <div className="mt-10 rounded bg-[#1c1c1c] p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-green-400">Add Employee</h2>
        <AddEmployeeForm />
      </div>
      <div className="mt-10 rounded bg-[#1c1c1c] p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-red-400">
          Remove Employee
        </h2>
        <p className="mb-6 text-sm text-gray-300">
          Enter the employee's <strong>name</strong> and <strong>email</strong>{' '}
          to remove them from the system.
        </p>
        <RemoveEmployeeForm />
      </div>
    </div>
  )
}

export default AdminDashboard
