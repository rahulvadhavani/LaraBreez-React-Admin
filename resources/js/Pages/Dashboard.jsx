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
        </Authenticated>
    )
}
