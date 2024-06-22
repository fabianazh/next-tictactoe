export function Toolbar({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-white dark:bg-dark dark:border-2 dark:text-white w-full grid grid-cols-3 px-2 rounded-md shadow-md pt-3 pb-2">
            {children}
        </div>
    )
}

export function Button({
    onClick,
    children,
}: {
    onClick?: () => void
    children: React.ReactNode
}) {
    return (
        <div
            onClick={onClick}
            className="relative cursor-pointer gap-y-1 group grid place-items-center"
        >
            {children}
        </div>
    )
}

Toolbar.Button = Button
