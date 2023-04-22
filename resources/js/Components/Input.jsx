import { useEffect, useRef } from 'react'

export default ({
    type = 'text',
    name,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
    withIcon = false,
    placeholder,
}) => {
    const input = useRef()

    useEffect(() => {
        if (isFocused) {
            input.current.focus()
        }
    }, [])

    const baseClasses = `py-2 border-gray-400 rounded-md focus:border-gray-100 dark:border-gray-100 dark:bg-dark-eval-1 dark:text-gray-300`

    return (
        <input
            type={type}
            name={name}
            value={value}
            className={`${baseClasses} ${
                withIcon ? 'pl-11 pr-4' : 'px-4'
            } ${className}`}
            ref={input}
            autoComplete={autoComplete}
            required={required}
            onChange={(e) => handleChange(e)}
            placeholder={placeholder}
        />
    )
}
