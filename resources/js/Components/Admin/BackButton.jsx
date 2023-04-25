import React from 'react'
import Button from '../Button'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'
import { Link } from '@inertiajs/react'

export default function BackButton(props) {
    return (
        <>
            <div className='px-6 py-2 flex justify-end'>
                <Link href={props.href}>
                    <FaRegArrowAltCircleLeft className='text-3xl'></FaRegArrowAltCircleLeft>
                </Link>
            </div>
        </>
    )
}
