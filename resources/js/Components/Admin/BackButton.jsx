import React from 'react'
import { Link } from '@inertiajs/react'

export default function BackButton(props) {
    return (
        <>
            <div className='px-6 py-2 flex justify-end'>
                <Link href={props.href}>
                    <i className="text-3xl fa-solid fa-circle-arrow-left"></i>
                </Link>
            </div>
        </>
    )
}
