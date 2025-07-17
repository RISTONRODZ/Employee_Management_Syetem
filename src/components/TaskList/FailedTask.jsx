import React from 'react'

const FailedTask = ({ data }) => {
  return (
    <div className="no-scrollbar h-[315px] min-h-[270px] w-[300px] flex-shrink-0 overflow-y-auto rounded-xl border border-red-700 bg-red-900 p-6 text-white shadow-lg transition-transform duration-200 hover:scale-[1.02]">
      <div className="mb-4 flex items-center justify-between text-sm">
        <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase">
          {data.category}
        </span>
        <span className="text-red-300">Due: {data.taskDate}</span>
      </div>

      <h2 className="mt-4 text-2xl leading-tight font-bold text-red-100">
        {data.taskTitle}
      </h2>
      <p className="mt-2 line-clamp-3 text-sm text-red-200">
        {data.taskDescription}
      </p>

      <div className="mt-6 flex justify-center">
        <span className="inline-flex items-center rounded-full bg-red-700 px-4 py-2 text-sm font-semibold text-white shadow-md">
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
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2A9 9 0 111 12a9 9 0 0118 0z"
            ></path>
          </svg>
          Failed
        </span>
      </div>
    </div>
  )
}

export default FailedTask
