import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import { setLocalStorage } from './utils/localStorage'

const App = () => {
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(() => {
    if (!localStorage.getItem('employees')) {
      setLocalStorage()
    }
  }, [])
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
    if (loggedInUser) {
      setUser(loggedInUser)
    }
  }, [])

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      const adminUser = { role: 'admin', email }
      setUser(adminUser)
      localStorage.setItem('loggedInUser', JSON.stringify(adminUser))
    } else {
      const employee = userData?.employees?.find(
        (e) => e.email === email && e.password === password,
      )

      if (employee) {
        const empUser = {
          role: 'employee',
          id: employee.id,
          email: employee.email,
          firstName: employee.firstName,
          taskCounts: employee.taskCounts,
          tasks: employee.tasks,
        }

        setUser(empUser)
        localStorage.setItem('loggedInUser', JSON.stringify(empUser))
      } else {
        alert('Invalid Credentials')
      }
    }
  }

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user.role === 'admin' ? (
        <AdminDashboard changeUser={setUser} />
      ) : (
        <EmployeeDashboard changeUser={setUser} />
      )}
    </>
  )
}

export default App
