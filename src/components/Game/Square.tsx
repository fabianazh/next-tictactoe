/* eslint-disable react/prop-types */
import { BiX, BiRadioCircle } from 'react-icons/bi'

export default function Square({
    value,
    onSquareClick,
    className,
}: {
    value: string
    onSquareClick: () => void
    className?: string
}) {
    let icon = null

    if (value === 'X') {
        icon = <BiX className="text-blue-600 text-8xl xl:text-[5rem]" />
    } else if (value === 'O') {
        icon = (
            <BiRadioCircle className="text-red-600 text-8xl xl:text-[5rem]" />
        )
    }

    return (
        <button
            className={`${className} w-full h-full text-6xl xl:text-8xl border dark:border-2 cursor-pointer grid place-items-center`}
            onClick={onSquareClick}
        >
            {icon}
        </button>
    )
}
