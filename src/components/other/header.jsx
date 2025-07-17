import React from 'react'

const Header = (props) => {
  const username = props.data ? props.data.firstName : 'Admin'

  const logoutUser = () => {
    localStorage.removeItem('loggedInUser')
    props.changeUser(null)
  }

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-4xl font-bold">{username} 👋</span>
      </h1>
      <button
        onClick={logoutUser}
        className="rounded-sm bg-red-600 px-3 py-2 text-lg font-medium text-white"
      >
        Log Out
      </button>
    </div>
  )
}

export default Header
