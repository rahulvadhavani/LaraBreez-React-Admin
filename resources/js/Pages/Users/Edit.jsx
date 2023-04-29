import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FileInput, Label, TextInput } from 'flowbite-react';
import BackButton from '@/Components/Admin/BackButton';
import { FaExclamation } from 'react-icons/fa';
import PageHead from '@/Components/PageHead';
import Button from '@/Components/Button';


export default function Edit(props) {

    const { user, module, breadcrumbs } = usePage().props;
    const { data, setData, post, errors } = useForm({
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        email: user.email || "",
        id: user.id,
        password: '',
        password_confirmation: '',
        current_password: '',
        avatar: '',
        _method: 'PUT'
    });


    function handleSubmit(e) {
        e.preventDefault();
        post(route("users.update", user.id));
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
                    <BackButton href={route("users.index")}></BackButton>
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
                                    placeholder="Enter first name"
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
                                        value="email"
                                    />
                                </div>
                                <TextInput
                                    type='email'
                                    name="Email"
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
                        <div className="mt-14 mb-2 flex w-full overflow-hidden bg-white rounded-lg shadow-sm border dark:border-gray-600 border-gray-200 dark:bg-gray-800">
                            <div className="flex items-center justify-center w-12 bg-yellow-400">
                                <FaExclamation className="w-6 h-6 text-white fill-current"></FaExclamation>
                            </div>
                            <div className="px-4 py-2 -mx-3">
                                <div className="mx-3">
                                    <span className="font-semibold text-yellow-400 dark:text-yellow-300">
                                        Warning
                                    </span>
                                    <p className="text-sm text-gray-600 dark:text-gray-200">
                                        Fill the password fields only if you want to change the password
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='mt-3'>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="current_password"
                                        value="Current Password"
                                    />
                                </div>
                                <TextInput
                                    type='password'
                                    name="current_password"
                                    value={data.current_password}
                                    onChange={(e) =>
                                        setData("current_password", e.target.value)
                                    }
                                    id="current_password"
                                    placeholder="Enter current password"
                                />
                                <span className="text-red-600">
                                    {errors.current_password}
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
                        </div>
                        <input type="hidden" value={data.id} name='id' />
                        <div className='mt-5 flex justify-center'>
                            <Button type='submit' name='update' onClick={handleSubmit}>Update</Button>
                        </div>
                    </form>
                </div>
            </div>
        </Authenticated>
    );
}
