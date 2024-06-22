'use client'

import { useState } from 'react'
import { BiX, BiRadioCircle } from 'react-icons/bi'
import { GrUndo } from 'react-icons/gr'
import { VscDebugRestart } from 'react-icons/vsc'
import Board from '@/components/Game/Board'
import { Toolbar } from '@/components/Game/Toolbar'
import Theme from '@/components/Other/Theme'
import Indicator from '@/components/Game/Indicator'

export default function GameSection() {
    const [xIsNext, setXIsNext] = useState(true)
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0)
    const currentSquare = history[currentMove]

    function handlePlay(nextSquares: SquareValue[]) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1)
        setXIsNext(!xIsNext)
    }

    function jumpTo(move: number) {
        if (currentMove === 0) return
        setCurrentMove(move)
        setXIsNext(move % 2 === 0)
    }

    return (
        <>
            <section className="w-screen h-screen grid place-items-center">
                <div className="w-10/12 xl:w-[27%] grid place-items-center gap-y-7 mt-10 xl:mt-14">
                    <Indicator
                        turn={
                            xIsNext ? (
                                <BiX className="inline-block text-2xl xl:text-3xl text-blue-600" />
                            ) : (
                                <BiRadioCircle className="inline-block text-2xl xl:text-3xl text-red-600" />
                            )
                        }
                        squares={currentSquare}
                    />
                    <Board
                        xIsNext={xIsNext}
                        squares={currentSquare}
                        onPlay={handlePlay}
                    />
                    <Toolbar>
                        <Toolbar.Button onClick={() => jumpTo(currentMove - 1)}>
                            <GrUndo className="text-xl z-10 group-hover:drop-shadow-2xl rounded-full" />
                            <span className="text-lg z-10 xl:text-base">
                                Undo
                            </span>
                        </Toolbar.Button>
                        <Toolbar.Button onClick={() => jumpTo(0)}>
                            <VscDebugRestart className="text-xl z-10 group-hover:drop-shadow-2xl rounded-full" />
                            <span className="text-lg z-10 xl:text-base">
                                Restart
                            </span>
                        </Toolbar.Button>
                        <Toolbar.Button>
                            <Theme />
                            <span className="text-lg z-10 xl:text-base">
                                Theme
                            </span>
                        </Toolbar.Button>
                    </Toolbar>
                </div>
            </section>
        </>
    )
}
