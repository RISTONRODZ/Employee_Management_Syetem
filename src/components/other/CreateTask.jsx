import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext)
  const [taskTitle, settaskTitle] = useState('')
  const [taskDescription, settaskDescription] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [assignTo, setassignTo] = useState('')
  const [category, setCategory] = useState('')
  const [Task, setTask] = useState({})
  const submitHandler = (e) => {
    e.preventDefault()

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      assignTo,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    }

    // ✅ Make a deep copy of full userData object (not just employees array)
    const updatedUserData = { ...userData }

    updatedUserData.employees = updatedUserData.employees.map((emp) => {
      if (emp.firstName.toLowerCase() === assignTo.toLowerCase()) {
        return {
          ...emp,
          tasks: [...emp.tasks, newTask],
          taskCounts: {
            ...emp.taskCounts,
            newTask: emp.taskCounts.newTask + 1,
          },
        }
      }
      return emp
    })
    setUserData(updatedUserData)
    localStorage.setItem('employees', JSON.stringify(updatedUserData.employees))
    settaskTitle('')
    settaskDescription('')
    settaskDate('')
    setassignTo('')
    setCategory('')
  }

  return (
    <>
      <div className="mt-5">
        <form
          onSubmit={(e) => {
            submitHandler(e)
          }}
          action=""
          className="flex w-full flex-wrap items-start justify-between rounded bg-[#1c1c1c] p-10 text-white"
        >
          <div className="w-1/2">
            <div className="flex flex-col">
              <div className="mt-2">
                <h3>Task Title</h3>
                <input
                  value={taskTitle}
                  onChange={(e) => {
                    settaskTitle(e.target.value)
                  }}
                  className="w-4/5 rounded border-2 border-white p-2"
                  type="text"
                  placeholder="Make a Ui Design"
                />
              </div>
              <div className="mt-2">
                <h3>Due Date</h3>
                <input
                  value={taskDate}
                  onChange={(e) => {
                    settaskDate(e.target.value)
                  }}
                  className="w-4/5 rounded border-2 border-white p-2"
                  type="date"
                />
              </div>
            </div>
            <div className="">
              <h3 className="mt-2">Asign to</h3>
              <input
                value={assignTo}
                onChange={(e) => {
                  setassignTo(e.target.value)
                }}
                className="w-4/5 rounded border-2 border-white p-2"
                type="text"
                placeholder="Employee Name"
              />
            </div>
            <div className="">
              <h3 className="mt-2">Category</h3>
              <input
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value)
                }}
                className="w-4/5 rounded border-2 border-white p-2"
                type="text"
                placeholder="Design, Dev, etc"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-col">
            <h3 className="text-xl">Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => {
                settaskDescription(e.target.value)
              }}
              className="no-scrollbar resize-none rounded border-2 border-white p-2"
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Description"
            ></textarea>
            <div className="align-center mt-2 flex justify-center rounded bg-[#5cc387] p-0">
              <button className="h-full w-full p-6">Create Task</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default CreateTask
