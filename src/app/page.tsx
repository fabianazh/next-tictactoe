import Button from '@/components/Button/PrimaryButton'
import Link from 'next/link'

export default function Home() {
    return (
        <section className="w-screen bg-white text-black dark:text-white dark:bg-darkBody gap-3 h-screen flex flex-col justify-center px-8 xl:px-56">
            <h1 className="flex flex-col text-8xl font-semibold text-black selection:bg-black selection:text-white">
                <span className="block">Next</span>
                <span className="block">
                    TicTacToe{' '}
                    <span className="inline-block text-lg">V 1.0</span>
                </span>
            </h1>
            <span className="text-lg xl:text-xl font-medium text-black block mb-5 ml-1">
                by{' '}
                <a
                    href="https://fabianazh.vercel.app"
                    className="inline-block pb-1.5 after:border-b-[2.5px] after:block after:border-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform text-blue-600 transition-colors duration-500"
                >
                    fabianazh
                </a>
            </span>
            <div className="flex flex-col gap-5">
                {/* <ApologyModal /> */}
                <Link href={'/multiplayer'} className="group">
                    <Button className={''}>Local Multiplayer</Button>
                </Link>
            </div>
        </section>
    )
}
