import React, { useContext } from 'react'
import Header from '../other/header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../../context/AuthProvider'

const EmployeeDashboard = ({ changeUser }) => {
  const [userData] = useContext(AuthContext)
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

  const currentUser = userData.employees?.find(
    (emp) => emp.id === loggedInUser?.id,
  )

  return (
    <div className="h-[100%] bg-[#1c1c1c] p-10 text-white">
      <Header data={currentUser} changeUser={changeUser} />
      <TaskListNumber data={currentUser} />
      <TaskList data={currentUser} />
    </div>
  )
}

export default EmployeeDashboard
