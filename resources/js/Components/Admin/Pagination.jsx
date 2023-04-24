import { Link } from '@inertiajs/react';
import React from 'react'

export default function Pagination(props) {
    const paginationData = props.data;
    console.log(paginationData);
    return (
        <>
            {paginationData.data.length > 0 && (
                <div className="flex items-center justify-between my-6">
                    <p>Showing {paginationData.from} to {paginationData.to} of {paginationData.total} records</p>
                    <div className="items-center hidden lg:flex gap-x-1">
                        {paginationData.links.map((link, index) => (
                            <div key={index}>
                                {link.url != null ?
                                    <Link preserveScroll={true} dangerouslySetInnerHTML={{ __html: link.label }} className={` hover: bg-gray-200 dark:hover:bg-gray-700  dark:border-gray-600 border-gray-200 rounded-md border px-3 shadow-md py-1 ${link.active ? 'bg-sky-200 text-blue-800 border-gray-300 dark:border-gray-300' : 'bg-gray-100 dark:bg-gray-800 dark:text-gray-100'} `} href={link.url}>
                                    </Link>
                                    : <label className='hover:bg-gray-200 dark:hover:bg-gray-700  dark:border-gray-700 border-gray-200 rounded-md border px-3 shadow-md py-1  text-gray-400 dark:text-gray-600 poin cursor-not-allowed' dangerouslySetInnerHTML={{ __html: link.label }}></label>}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}
