import React from 'react'
import { FaChevronRight, FaHome } from 'react-icons/fa'

export default function Breadcrumbs(props) {
  return (
    <div className="text-md px-6 flex items-center py-4 overflow-x-auto whitespace-nowrap">
      <a href="#" className="text-gray-600 dark:text-gray-200">
        <FaHome className="w-5 h-5"></FaHome>
      </a>
      {props.modules.map((module, key) => (
          <div className='flex' key={key}>
            <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
              <FaChevronRight className="w-5 h-5"></FaChevronRight>
            </span>
            <a href="#" className="text-gray-600 dark:text-gray-200">
              {module}
            </a>
          </div>
       ))}
    </div>
  )
}
