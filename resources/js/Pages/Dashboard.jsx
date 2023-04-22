import Modal from '@/Components/Modal'
import Authenticated from '@/Layouts/Authenticated'
import { useState } from 'react'

export default (props) => {
    const [show, setShow] = useState(false)
    const [form, setForm] = useState({
        name:'',
        email:'',
    })

    const changeInput= (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const close = ()=>{
        setShow(false);
    }

    const openModal = ()=>{
        setShow(true);
    }
    const handleSubmit = (event)=>{
    event.preventDefault();
       console.log(form);
       setShow(false);
    }
    return (
        <Authenticated
            title="Dashboard"
            auth={props.auth}
            errors={props.errors}
            header={
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <h2 className="text-xl font-semibold leading-tight">
                        Dashboard
                    </h2>
                </div>
            }
        >
            <div className="p-6 overflow-hidden bg-white rounded-md shadow-md dark:bg-dark-eval-1">
                You're logged in!
                
            </div>
            {/* <button className='p-4 dark_btn' onClick={openModal}>Open</button>
            <Modal  show={show} children={<> <section
  className="mb-8 lg:mr-8 bg-white p-6 rounded shadow-md"
>
  <div className="flex justify-between items-start mb-6">
    <div className="p-2 bg-blue-lightest rounded-full">
      <svg
        className="w-10 h-10 text-blue"
        width={32}
        height={32}
        viewBox="0 0 24 24"
      >
        <path
          d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"
          fill="currentColor"
        />
      </svg>
    </div>
    <button 
    onClick={close}
      className="border border-transparent focus:border-blue trans-all-linear"
      type="button"
    >
      <svg
        className="w-8 h-8 text-grey hover:text-grey-dark"
        width={32}
        height={32}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
        />
      </svg>
    </button>
  </div>
  <div className="mb-3 leading-normal">
    <h1 className="mb-2 text-base font-bold">
        Add User
    </h1>
    <input
      className="mb-4 p-3 border border-grey-light rounded text-sm font-semibold text-grey-dark w-full focus:border-blue trans-all-linear"
      name="name"
      type="text"
      value={form.name}
      placeholder="Enter your name"
      onChange={changeInput}
    />
    <br/>
    <input
      className="mb-4 p-3 border border-grey-light rounded text-sm font-semibold text-grey-dark w-full focus:border-blue trans-all-linear"
      name="email"
      type="email"
      value={form.email}
      placeholder="Enter your email"
      onChange={changeInput}

    />
  </div>

  <footer className="flex justify-end align-center">
    <button
     onClick={close}
      className="mr-3 p-3 text-sm font-semibold border-2 border-grey-light rounded hover:bg-grey-light focus:bg-grey-light focus:border-blue trans-all-linear"
      type="button"
    >
      Cancel
    </button>
    <button
     onClick={handleSubmit}
      className="p-3 text-sm text-white bg-red-600 font-semibold bg-blue-lighter rounded"
      tabIndex={0}
      type="button"
    >
      Submit
    </button>
  </footer>
</section>
</>}>
               
            </Modal> */}
        </Authenticated>
    )
}
