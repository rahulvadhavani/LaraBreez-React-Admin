import React, { useEffect, useState } from 'react';
import { usePage, Link } from '@inertiajs/react';
import Authenticated from '@/Layouts/Authenticated';
import Input from '@/Components/Input';
import Button from '@/Components/Button';
import { FaEdit, FaTrashAlt, FaUndoAlt } from 'react-icons/fa';
import Pagination from '@/Components/Admin/Pagination';
import DeleteModal from '@/Components/Admin/DeleteModal';
import Breadcrumbs from '@/Components/Admin/Breadcrumbs';

const Index = ({ auth }) => {
    const { users, module, search, current_page } = usePage().props;
    const [deleteUrl, setDeleteUrl] = useState('#');
    const [searchTerm, setSearchTerm] = useState(search);
    const [usersData, setusersData] = useState(users || []);

    //
    const [show, setShow] = useState(false)
    const close = () => {
        setShow(false);
    }
    const openModal = (id) => {
        setDeleteUrl(route('users.delete', { id }));
        setShow(true);
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        const query = e.target.value.length > 0 ? `?search=${e.target.value}` : '';
        const newUrl = `${window.location.pathname}${query}`;
        window.history.pushState({}, '', newUrl);
        const delayDebounceFn = setTimeout(() => {
            axios.get(route('users.index'), { params: { search: e.target.value, curren_page: current_page } })
                .then(res => {
                    console.log(res);
                    setusersData(res.data.users)
                })
        }, 500);
        return () => clearTimeout(delayDebounceFn);
    }

    const deleteData = { show, deleteUrl, close };

    return (
        // 
        <Authenticated
            title={module}
            auth={auth}
            header={
                <div className='flex justify-between'>
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {module}
                </h2>
                <Breadcrumbs modules={['User']}></Breadcrumbs>
                </div>
            }
        >
            <div className="space-y-6">
                <div className="p-2 sm:p-3 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                    <div>
                        <section className="container px-4 mx-auto">
                            <div className='flex justify-between'>
                                <div className='w-1/2 flex justify-start'>
                                    <Input
                                        type='text'
                                        id="search"
                                        className="w-5/6 py-2 dark:border-gray-600 border-gray-200 shadow-sm"
                                        placeholder="search by name or email"
                                        handleChange={handleChange}
                                        name="search"
                                        value={searchTerm}
                                    />
                                    <Button href={route('users.index')} className='ml-3'><FaUndoAlt /></Button>
                                </div>
                                <Button size='sm' href={route('users.create')}>Create</Button>
                            </div>
                            <div className="flex flex-col mt-3">
                                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                        <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                                <thead className="bg-gray-50 dark:bg-gray-800">
                                                    <tr>
                                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <span>Avatar</span>
                                                        </th>
                                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <span>Name</span>
                                                        </th>
                                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <span>Email</span>
                                                        </th>
                                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <span>Status</span>
                                                        </th>
                                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <span>Action</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                                    {usersData.data.map((user) => (
                                                        <tr key={user.id}>
                                                            <td className="px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                                <div className="inline-flex items-center gap-x-3">
                                                                    <img
                                                                        className="object-cover w-10 h-10 rounded-full"
                                                                        src={user.avatar}
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </td>
                                                            <td className="px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                                                    {user.name}
                                                                </h2>
                                                            </td>
                                                            <td className="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                                {user.email}
                                                            </td>
                                                            <td className="px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                                {user.email_verified_at != null ?
                                                                    <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                                                        <h2 className="text-sm font-normal text-emerald-500">
                                                                            Verified
                                                                        </h2>
                                                                    </div>
                                                                    :
                                                                    <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800">
                                                                        <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                                                                        <h2 className="text-sm font-normal text-red-500">
                                                                            Unverified
                                                                        </h2>
                                                                    </div>
                                                                }
                                                            </td>
                                                            <td className="px-4 py-2 text-sm whitespace-nowrap">
                                                                <div className="flex items-center gap-x-6 text-lg">
                                                                    <button onClick={() => openModal(user.id)} className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                                                        <FaTrashAlt />
                                                                    </button>
                                                                    <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                                                        <FaEdit />
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Pagination data={usersData} ></Pagination>
                        </section>
                    </div>
                </div>
                <DeleteModal {...deleteData}></DeleteModal>
            </div>
        </Authenticated>
    );
};

export default Index;
