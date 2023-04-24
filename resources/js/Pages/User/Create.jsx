import React, { useEffect, useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {
    UserIcon,
    MailIcon,
    LockClosedIcon,
} from '@heroicons/react/outline'
import { usePage, Link, useForm } from '@inertiajs/react'
import InputIconWrapper from '@/Components/InputIconWrapper'
import Label from '@/Components/Label'
import Input from '@/Components/Input'
import Button from '@/Components/Button'
import Breadcrumbs from '@/Components/Admin/Breadcrumbs';


const Create = ({ auth }) => {
    const { module } = usePage().props;


    const { data, setData, post, processing, errors, reset, transform } = useForm({
        name: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
    })

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation')
        }
    }, [])

    const onHandleChange = (event) => {
        setData(
            event.target.name, event.target.value
        )
    }

    const submit = (e, add_nore = '') => {
        e.preventDefault()
        post(route('users.store'))
    }

    return (
        <Authenticated
            title={module}
            auth={auth}
            header={
                <div className='flex justify-between'>
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        {module}
                    </h2>
                    <Breadcrumbs modules={['User', 'Create']}></Breadcrumbs>
                </div>
            }
        >
            <div className="space-y-6">
                <div className="p-2 sm:p-3 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                    <div>
                        <section className="container px-4 mx-auto">
                            <div className='flex justify-end'>
                                <Button href={route('users.index')}>Back</Button>
                            </div>
                            <div className='mt-4 px-32 py-8'>
                                <form onSubmit={submit}>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label forInput="name" value="Name" />

                                            <InputIconWrapper
                                                icon={
                                                    <UserIcon
                                                        aria-hidden="true"
                                                        className="w-5 h-5"
                                                    />
                                                }
                                            >
                                                <Input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Name"
                                                    value={data.name}
                                                    className="block w-full"
                                                    autoComplete="name"
                                                    isFocused={true}
                                                    handleChange={onHandleChange}
                                                    withIcon
                                                />
                                            </InputIconWrapper>
                                            {errors.name && <span className='text-red-700'>{errors.name}</span>}

                                        </div>
                                        <div className="space-y-2">
                                            <Label forInput="email" value="Email" />

                                            <InputIconWrapper
                                                icon={
                                                    <MailIcon
                                                        aria-hidden="true"
                                                        className="w-5 h-5"
                                                    />
                                                }
                                            >
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    value={data.email}
                                                    className="block w-full mt-1"
                                                    autoComplete="username"
                                                    handleChange={onHandleChange}
                                                    withIcon
                                                />
                                            </InputIconWrapper>
                                            {errors.email && <span className='text-red-700'>{errors.email}</span>}
                                        </div>
                                        <div className="space-y-2">
                                            <Label forInput="first_name" value="First Name" />

                                            <InputIconWrapper
                                                icon={
                                                    <UserIcon
                                                        aria-hidden="true"
                                                        className="w-5 h-5"
                                                    />
                                                }
                                            >
                                                <Input
                                                    type="text"
                                                    name="first_name"
                                                    placeholder="First Name"
                                                    value={data.first_name}
                                                    className="block w-full"
                                                    autoComplete="first_name"
                                                    isFocused={true}
                                                    handleChange={onHandleChange}
                                                    withIcon
                                                />
                                            </InputIconWrapper>
                                            {errors.first_name && <span className='text-red-700'>{errors.first_name}</span>}

                                        </div>
                                        <div className="space-y-2">
                                            <Label forInput="last_name" value="Last Name" />

                                            <InputIconWrapper
                                                icon={
                                                    <UserIcon
                                                        aria-hidden="true"
                                                        className="w-5 h-5"
                                                    />
                                                }
                                            >
                                                <Input
                                                    type="text"
                                                    name="last_name"
                                                    placeholder="Last Name"
                                                    value={data.last_name}
                                                    className="block w-full"
                                                    autoComplete="last_name"
                                                    isFocused={true}
                                                    handleChange={onHandleChange}
                                                    withIcon
                                                />
                                            </InputIconWrapper>
                                            {errors.last_name && <span className='text-red-700'>{errors.last_name}</span>}

                                        </div>
                                        <div className="space-y-2">
                                            <Label forInput="password" value="Password" />

                                            <InputIconWrapper
                                                icon={
                                                    <LockClosedIcon
                                                        aria-hidden="true"
                                                        className="w-5 h-5"
                                                    />
                                                }
                                            >
                                                <Input
                                                    type="password"
                                                    name="password"
                                                    placeholder="Password"
                                                    value={data.password}
                                                    className="block w-full mt-1"
                                                    autoComplete="new-password"
                                                    handleChange={onHandleChange}
                                                    withIcon
                                                />
                                            </InputIconWrapper>
                                            {errors.password && <span className='text-red-700'>{errors.password}</span>}

                                        </div>

                                        <div className="space-y-2">
                                            <Label
                                                forInput="password_confirmation"
                                                value="Confirm Password"
                                            />

                                            <InputIconWrapper
                                                icon={
                                                    <LockClosedIcon
                                                        aria-hidden="true"
                                                        className="w-5 h-5"
                                                    />
                                                }
                                            >
                                                <Input
                                                    type="password"
                                                    name="password_confirmation"
                                                    placeholder="Confirm Password"
                                                    value={data.password_confirmation}
                                                    className="block w-full mt-1"
                                                    handleChange={onHandleChange}
                                                    withIcon
                                                />
                                            </InputIconWrapper>
                                            {errors.password_confirmation && <span className='text-red-700'>{errors.password_confirmation}</span>}
                                        </div>
                                    </div>
                                    <div className='flex justify-center mt-8'>
                                        <Button
                                            className="mx-2"
                                            processing={processing}
                                        >
                                            <span>Create User</span>
                                        </Button>
                                        <Button
                                            onClick={(e) => { submit(e, 'add_nore') }}
                                            type='button'
                                            className="mx-2"
                                            processing={processing}
                                        >
                                            <span>Save and Create One More</span>
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Create;
