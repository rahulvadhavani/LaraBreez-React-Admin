import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FileInput, Label, TextInput } from 'flowbite-react';
import PageHead from '@/Components/PageHead';
import Button from '@/Components/Button';
import BackButton from '@/Components/Admin/BackButton';

export default function Create(props) {

   const { module, breadcrumbs } = usePage().props;
   const { data, setData, errors, post,processing } = useForm({
       first_name: "",
       last_name: "",
       email: "",
       password: "",
       password_confirmation: "",
       avatar: "",
   });

   function handleSubmit(e) {
       e.preventDefault();
       let res = post(route("users.store"));
   }


   return (
       <Authenticated
           auth={props.auth}
           header={
               <PageHead breadcrumbs={breadcrumbs} module={module} ></PageHead>
           }
       >
           <Head title={module} />
           <div className="space-y-6">
               <div className="p-2 sm:p-3 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                 <BackButton href={route('users.index')}></BackButton>
                   <form className="px-6" name="createForm" onSubmit={handleSubmit}>
                       <div className='grid grid-cols-2 gap-4'>
                           <div className='mt-3'>
                               <div className="mb-2 block">
                                   <Label
                                       htmlFor="first_name"
                                       value="First Name"
                                   />
                               </div>
                               <TextInput
                                   name="first_name"
                                   value={data.first_name}
                                   onChange={(e) =>
                                       setData("first_name", e.target.value)
                                   }
                                   id="first_name"
                                   placeholder="Enter first_name"
                               />
                               <span className="text-red-600">
                                   {errors.first_name}
                               </span>
                           </div>
                           <div className='mt-3'>
                               <div className="mb-2 block">
                                   <Label
                                       htmlFor="last_name"
                                       value="Last Name"
                                   />
                               </div>
                               <TextInput
                                   name="last_name"
                                   value={data.last_name}
                                   onChange={(e) =>
                                       setData("last_name", e.target.value)
                                   }
                                   id="last_name"
                                   placeholder="Enter last name"
                               />
                               <span className="text-red-600">
                                   {errors.last_name}
                               </span>
                           </div>
                           <div className='mt-3'>
                               <div className="mb-2 block">
                                   <Label
                                       htmlFor="email"
                                       value="Email"
                                   />
                               </div>
                               <TextInput
                                   type='email'
                                   name="email"
                                   value={data.email}
                                   onChange={(e) =>
                                       setData("email", e.target.value)
                                   }
                                   id="email"
                                   placeholder="Enter email"
                               />
                               <span className="text-red-600">
                                   {errors.email}
                               </span>
                           </div>
                           <div className='mt-3'>
                               <div className="mb-2 block">
                                   <Label
                                       htmlFor="password"
                                       value="Password"
                                   />
                               </div>
                               <TextInput
                                   type='password'
                                   name="password"
                                   value={data.password}
                                   onChange={(e) =>
                                       setData("password", e.target.value)
                                   }
                                   id="password"
                                   placeholder="Enter password"
                               />
                               <span className="text-red-600">
                                   {errors.password}
                               </span>
                           </div>
                           <div className='mt-3'>
                               <div className="mb-2 block">
                                   <Label
                                       htmlFor="password_confirmation"
                                       value="Password"
                                   />
                               </div>
                               <TextInput
                                   type='password'
                                   name="password_confirmation"
                                   value={data.password_confirmation}
                                   onChange={(e) =>
                                       setData("password_confirmation", e.target.value)
                                   }
                                   id="password_confirmation"
                                   placeholder="Enter password_confirmation"
                               />
                               <span className="text-red-600">
                                   {errors.password_confirmation}
                               </span>
                           </div>
                           <div className='mt-3'>
                               <div className="mb-2 block">
                                   <Label
                                       htmlFor="avatar"
                                       value="Avatar"
                                   />
                               </div>
                               <FileInput
                                   accept="image/*"
                                   onChange={event => setData('avatar', event.target.files[0])}
                                   id="avatar"
                               />
                               <span className="text-red-600">
                                   {errors.avatar}
                               </span>
                           </div>
                       </div>
                       <div className='mt-5 flex justify-center'>
                           <Button processing={processing} type='submit' name='update' onClick={handleSubmit}>Save</Button>
                       </div>
                   </form>
               </div>
           </div>
       </Authenticated >
   );
}
