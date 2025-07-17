import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const RemoveEmployeeForm = () => {
  const [userData, setUserData] = useContext(AuthContext)
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleRemove = (e) => {
    e.preventDefault()

    const { firstName, email } = formData

    const filteredEmployees = userData.employees.filter(
      (emp) =>
        !(
          emp.firstName.toLowerCase() === firstName.toLowerCase() &&
          emp.email.toLowerCase() === email.toLowerCase()
        ),
    )

    if (filteredEmployees.length === userData.employees.length) {
      alert('No matching employee found!')
      return
    }

    const updatedUserData = { ...userData, employees: filteredEmployees }
    setUserData(updatedUserData)
    localStorage.setItem('employees', JSON.stringify(filteredEmployees))

    setFormData({ firstName: '', email: '' })
    alert('Employee removed successfully!')
  }

  return (
    <form onSubmit={handleRemove} className="mt-6 flex flex-col gap-4">
      <input
        type="text"
        name="firstName"
        placeholder="Employee Name"
        value={formData.firstName}
        onChange={handleChange}
        className="rounded-md border-2 border-red-300 p-2"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Employee Email"
        value={formData.email}
        onChange={handleChange}
        className="rounded-md border-2 border-red-300 p-2"
        required
      />
      <button
        type="submit"
        className="align-center mt-2 flex justify-center rounded bg-red-500 px-7 py-2 text-white"
      >
        Remove Employee
      </button>
    </form>
  )
}

export default RemoveEmployeeForm
