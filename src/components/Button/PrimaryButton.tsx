export default function Button({
    className,
    children,
}: {
    className?: string
    children: React.ReactNode
}) {
    return (
        <div
            className={`w-full bg-blue-600 text-white font-light group-hover:bg-blue-800 dark:bg-blue-800 dark:group-hover:bg-blue-600 shadow-2xl transition-all duration-300 rounded-md py-2 px-4 text-center ${className}`}
        >
            {children}
        </div>
    )
}
