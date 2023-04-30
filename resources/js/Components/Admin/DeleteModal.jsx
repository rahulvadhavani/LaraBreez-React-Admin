import React from 'react'
import Modal from '../Modal'
import { Link } from '@inertiajs/react'

export default function DeleteModal(props) {
  return (
    <div>
      <Modal show={props.show} onClose={props.close} children={<section >
        <div>
          <div className="">
            <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
              <button onClick={props.close} type="button" className="text-gray-400 absolute top-2.5 right-2.5 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:text-white">
                <i className="text-lg fa-solid fa-times"></i>
                <span className="sr-only">Close modal</span>
              </button>
              <i className="text-2xl text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto fa-solid fa-trash-alt"></i>
              <p className="mb-4 text-gray-500 dark:text-gray-300">Are you sure you want to delete this item?</p>
              <div className="flex justify-center items-center space-x-4">
                <button onClick={props.close} type="button" className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg shadow-md border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                  No, cancel
                </button>
                <Link className="py-2 px-3 text-sm font-medium text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700" preserveScroll={true} href={props.deleteUrl}>
                  Yes, I'm sure
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>}>
      </Modal>
    </div>
  )
}
