import { Link } from '@inertiajs/react'
import React from 'react'

export default function (props) {
    return (
        <>
            <Link preserveScroll={props.preserveScroll || false} href={props.href || '#'} className={`inline-flex items-center transition-colors font-medium select-none disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none  px-2.5 py-1.5 text-sm  bg-black text-gray-200 hover:text-white hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-300 dark:text-gray-900 dark:hover:text-gray-700 rounded-md px-4 `+props.className}>
                {props.children}
            </Link>
        </>
    )
}
