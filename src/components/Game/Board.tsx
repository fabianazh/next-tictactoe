import { calculateWinner } from '@/libs/utils'
import Square from '@/components/Game/Square'

export default function Board({
    xIsNext,
    squares,
    onPlay,
}: {
    xIsNext: boolean
    squares: SquareValue[]
    onPlay: (i: SquareValue[]) => void
}) {
    function handleClick(i: number) {
        if (squares[i] || calculateWinner(squares)) return
        const nextSquares = squares.slice()
        xIsNext ? (nextSquares[i] = 'X') : (nextSquares[i] = 'O')
        onPlay(nextSquares)
    }

    return (
        <div className="board">
            <Square
                value={squares[0]}
                onSquareClick={() => handleClick(0)}
                className="rounded-tl-xl"
            />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square
                value={squares[2]}
                onSquareClick={() => handleClick(2)}
                className="rounded-tr-xl"
            />
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            <Square
                value={squares[6]}
                onSquareClick={() => handleClick(6)}
                className="rounded-bl-xl"
            />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square
                value={squares[8]}
                onSquareClick={() => handleClick(8)}
                className="rounded-br-xl"
            />
        </div>
    )
}
