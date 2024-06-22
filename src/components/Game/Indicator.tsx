import { calculateWinner } from '@/libs/utils'
import { BiX, BiRadioCircle } from 'react-icons/bi'

export default function Indicator({
    turn,
    squares,
}: {
    turn: React.ReactNode
    squares: Array
}) {
    const winner = calculateWinner(squares)
    let content
    if (winner === 'X') {
        content = (
            <>
                <span>Winner :</span>
                <BiX className="inline-block text-2xl text-blue-600 -translate-y-[1px] xl:text-3xl" />
            </>
        )
    } else if (winner === 'O') {
        content = (
            <>
                <span>Winner :</span>
                <BiRadioCircle className="inline-block text-2xl text-red-600 -translate-y-[1px] xl:text-3xl" />
            </>
        )
    } else if (winner === 'Draw') {
        content = <span>Draw!</span>
    } else {
        content = (
            <>
                {turn}{' '}
                <span className="inline-block translate-y-[1px]">TURN</span>
            </>
        )
    }

    return (
        <div className="px-7 shadow-md dark:bg-dark dark:border-2 dark:text-white z-0 py-3 xl:py-2 grid__center rounded-lg bg-white">
            <span className="font-semibold inline-block">{content}</span>
        </div>
    )
}
