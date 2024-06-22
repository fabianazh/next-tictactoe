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
            className={`${className} square grid__center`}
            onClick={onSquareClick}
        >
            {icon}
        </button>
    )
}
