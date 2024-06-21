import Link from 'next/link'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
// import PauseModal from './PauseModal'

export default function Header() {
    return (
        <header className="z-50 fixed top-0  h-[3.5rem] xl:h-[4.5rem] flex justify-between items-center px-6 xl:px-9 w-screen bg-white shadow dark:bg-dark dark:border-b-2">
            <Link href={'/'} className="header__icon">
                <BsFillArrowLeftCircleFill className="" />
            </Link>
            <h1 className="text-2xl font-bold xl:text-3xl dark:text-white">
                <span>NexToe</span>
            </h1>
            {/* <PauseModal /> */}
        </header>
    )
}
