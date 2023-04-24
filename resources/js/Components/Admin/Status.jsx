import React from 'react'

export default function Status(props) {
    const color = props.status == true ? 'green' : 'red';
    return (
        <>
            <div className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-${color}-100/60 dark:bg-gray-800`}>
                <span className={`h-1.5 w-1.5 rounded-full bg-${color}-500`} />
                <h2 className={`text-sm font-normal text-${color}-500`}>
                    {props.children}
                </h2>
            </div>
        </>
    )
}
