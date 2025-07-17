import React from 'react'

const CompleteTask = ({ data }) => {
  return (
    <div className="no-scrollbar h-[315px] min-h-[270px] w-[300px] flex-shrink-0 overflow-y-auto rounded-xl border border-green-700 bg-green-900 p-6 text-white shadow-lg transition-transform duration-200 hover:scale-[1.02]">
      <div className="mb-4 flex items-center justify-between text-sm">
        <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase">
          {data.category}
        </span>
        <span className="text-green-300">Completed On: {data.taskDate}</span>
      </div>

      <h2 className="mt-4 text-2xl leading-tight font-bold text-green-100">
        {data.taskTitle}
      </h2>
      <p className="mt-2 line-clamp-3 text-sm text-green-200">
        {data.taskDescription}
      </p>

      <div className="mt-6 flex justify-center">
        <span className="inline-flex items-center rounded-full bg-green-700 px-4 py-2 text-sm font-semibold text-white shadow-md">
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          Completed
        </span>
      </div>
    </div>
  )
}

export default CompleteTask
