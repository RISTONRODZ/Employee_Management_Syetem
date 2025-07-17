import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail('')
    setPassword('')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 p-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-700 bg-gray-800 p-8 shadow-2xl sm:p-12">
        <h2 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-white">
          Welcome Back!
        </h2>
        <form onSubmit={submitHandler} className="flex flex-col space-y-6">
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              id="email"
              className="w-full rounded-lg bg-gray-700 px-5 py-3 text-lg text-white placeholder-gray-400 transition duration-200 focus:border-transparent focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              id="password"
              className="w-full rounded-lg bg-gray-700 px-5 py-3 text-lg text-white placeholder-gray-400 transition duration-200 focus:border-transparent focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="focus:ring-opacity-75 w-full transform rounded-lg bg-emerald-600 px-6 py-3 text-xl font-bold text-white transition duration-300 ease-in-out hover:scale-[1.01] hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
