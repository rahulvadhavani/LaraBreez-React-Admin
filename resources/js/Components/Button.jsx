import { Link } from '@inertiajs/react'

export default ({
    type = 'submit',
    className = '',
    processing,
    children,
    href,
    target,
    external,
    variant = 'primary',
    size = 'base',
    iconOnly,
    squared = false,
    pill = false,
    srText,
    onClick,
}) => {
    const baseClasses = `inline-flex items-center transition-colors font-medium select-none disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none`
    // const baseClasses = `inline-flex items-center transition-colors font-medium select-none disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark-eval-2`

    let variantClasses = ``

    switch (variant) {
        case 'secondary':
            variantClasses = `bg-white text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:bg-dark-eval-1 dark:hover:text-gray-200`
            break
        case 'success':
            variantClasses = `bg-green-500 text-white hover:bg-green-600`
            break
        case 'danger':
            variantClasses = `bg-red-500 text-white hover:bg-red-600`
            break
        case 'warning':
            variantClasses = `bg-yellow-500 text-white hover:bg-yellow-600`
            break
        case 'info':
            variantClasses = `bg-cyan-500 text-white hover:bg-cyan-600`
            break
        case 'black':
            variantClasses = `bg-black text-gray-300 hover:text-white`
            break
        default:
            variantClasses = `bg-black text-gray-200 hover:text-white hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-300 dark:text-gray-900 dark:hover:text-gray-700`
    }

    const sizeClasses = `${
        size == 'base' ? (iconOnly ? 'p-2' : 'px-4 py-2 text-base') : ''
    } ${size == 'sm' ? (iconOnly ? 'p-1.5' : 'px-2.5 py-1.5 text-sm') : ''} ${
        size == 'lg' ? (iconOnly ? 'p-3' : 'px-5 py-2 text-xl') : ''
    }`

    const roundedClasses = `${!squared && !pill ? 'rounded-md' : ''} ${
        pill ? 'rounded-full' : ''
    }`

    const iconSizeClasses = `${size == 'sm' ? 'w-5 h-5' : ''} ${
        size == 'base' ? 'w-6 h-6' : ''
    } ${size == 'lg' ? 'w-7 h-7' : ''}`

    if (href) {
        const Tag = external ? 'a' : Link

        return (
            <Tag
                target={target}
                href={href}
                className={`${baseClasses} ${sizeClasses} ${variantClasses} ${roundedClasses} ${className} ${
                    processing ? 'pointer-events-none opacity-50' : ''
                }`}
            >
                {children}
                {iconOnly && <span className="sr-only">{srText ?? ''}</span>}
            </Tag>
        )
    }

    return (
        <button
            type={type}
            className={`${baseClasses} ${sizeClasses} ${variantClasses} ${roundedClasses} ${className}`}
            disabled={processing}
            onClick={onClick}
        >
            {children}
            {iconOnly && <span className="sr-only">{srText ?? ''}</span>}
        </button>
    )
}
