import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AddEmployeeForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    password: '',
  })
  const [userData, setUserData] = useContext(AuthContext)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newEmployee = {
      id: userData.employees.length + 1,
      firstName: formData.firstName,
      email: formData.email,
      password: formData.password,
      taskCounts: {
        active: 0,
        newTask: 0,
        completed: 0,
        failed: 0,
      },
      tasks: [],
    }

    const updatedEmployees = [...userData.employees, newEmployee]
    const updatedUserData = { ...userData, employees: updatedEmployees }

    setUserData(updatedUserData)
    localStorage.setItem('employees', JSON.stringify(updatedEmployees))
    setFormData({ firstName: '', email: '', password: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
      <input
        className="rounded-md border-2 border-amber-50 p-2"
        type="text"
        name="firstName"
        required
        placeholder="Name"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        className="rounded-md border-2 border-amber-50 p-2"
        type="email"
        name="email"
        required
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        className="rounded-md border-2 border-amber-50 p-2"
        type="password"
        name="password"
        required
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <button className="align-center mt-2 flex justify-center rounded bg-[#5cc387] px-7 py-2">
        Create Employee
      </button>
    </form>
  )
}

export default AddEmployeeForm
