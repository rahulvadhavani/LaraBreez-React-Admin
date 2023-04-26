import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link, usePage } from '@inertiajs/react';
import BackButton from '@/Components/Admin/BackButton';
import PageHead from '@/Components/PageHead';
import { FaAt, FaEdit, FaEye, FaTrashAlt } from 'react-icons/fa';
import Status from '@/Components/Admin/Status';
import DeleteModal from '@/Components/Admin/DeleteModal';




export default function Show(props) {
    const { user, module, breadcrumbs } = usePage().props;


    // //
    const [deleteUrl, setDeleteUrl] = useState('#');
    const [show, setShow] = useState(false)
    const close = () => {
        setShow(false);
    }
    const openModal = (id) => {
        setDeleteUrl(route('users.delete', { id }));
        setShow(true);
    }

    const deleteProps = {
        show,
        deleteUrl,
        close
    }
    // //
    return (
        <Authenticated
            auth={props.auth}
            header={
                <PageHead breadcrumbs={breadcrumbs} module={module} ></PageHead>
            }
        >
            <Head title={module} />
            <div className="space-y-6">
                <div className="p-2 min-h-[78vh] sm:p-3 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                    <div className='flex justify-between content-center'>
                        <div className='flex content-center justify-start'>
                            <button onClick={() => openModal(user.id)} className="inline-flex items-center justify-center w-8 h-8 mr-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-full focus:shadow-outline hover:bg-red-800">
                                <FaTrashAlt />
                            </button>
                            <Link href={route("users.edit", user.id)} className="inline-flex items-center justify-center w-8 h-8 mr-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-full focus:shadow-outline hover:bg-blue-800">
                                <FaEdit />
                            </Link>
                        </div>
                        <BackButton href={route("users.index")}></BackButton>
                    </div>
                    <div className='grid grid-cols-3 gap-2 mt-5'>
                        <div className="border max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                            <img
                                className="object-center mx-auto     h-64 h-64"
                                src={user.avatar}
                                alt="avatar"
                            />
                            <div className="flex items-center px-6 py-3 bg-gray-900">
                                <FaAt className="w-5 h-5 text-white fill-current"></FaAt>
                                <h1 className="mx-3 text-lg font-semibold text-white">{user.email ?? '-'}</h1>
                            </div>
                            <div className="px-6 py-4">
                                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                    <b className="fill-current">First Name : </b>
                                    <h1 className="px-2 text-sm">{user.first_name}</h1>
                                </div>
                                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                    <b className="fill-current">Last Name : </b>
                                    <h1 className="px-2 text-sm">{user.last_name}</h1>
                                </div>
                                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                    <b className="fill-current">Role : </b>
                                    <h1 className="px-2 text-sm">{user.role}</h1>
                                </div>
                                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                    <b className="fill-current">Status : </b>
                                    <h1 className="px-2 text-sm">
                                        {user.email_verified_at == null ? <Status color="red">Uncerified</Status> : <Status color="emerald">Verified</Status>}
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white col-span-2 flex items-center justify-center border overflow-hidden rounded-lg shadow-lg dark:bg-gray-800">
                            <h1 className='text-3xl text-gray-400'>No Data Available</h1>
                        </div>
                    </div>
                </div>
            </div>
            <DeleteModal {...deleteProps}></DeleteModal>
        </Authenticated>
    );
}
