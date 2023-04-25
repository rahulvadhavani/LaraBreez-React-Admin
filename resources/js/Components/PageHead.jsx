import React from 'react'
import Breadcrumbs from './Admin/Breadcrumbs'

export default function PageHead(props) {
    return (
        <>
            <div className='flex justify-between'>
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {props.module}
                </h2>
                <Breadcrumbs modules={props.breadcrumbs}></Breadcrumbs>
            </div>
        </>
    )
}
