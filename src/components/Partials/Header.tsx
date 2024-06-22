'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BsFillArrowLeftCircleFill, BsPauseCircleFill } from 'react-icons/bs'

export default function Header() {
    const pathname = usePathname()

    return (
        <header
            className={`${
                pathname === '/' ? 'hidden' : 'flex'
            } z-40 fixed top-0 h-[3.5rem] xl:h-[4.5rem] justify-between items-center px-6 xl:px-9 w-screen bg-white shadow dark:bg-dark dark:border-b-2`}
        >
            <Link href={'/'} className="header__icon">
                <BsFillArrowLeftCircleFill className="" />
            </Link>
            <h1 className="text-2xl font-bold xl:text-3xl dark:text-white">
                <span>TicTacToe</span>
            </h1>
            <div className="header__icon">
                <BsPauseCircleFill className="" />
            </div>
        </header>
    )
}
