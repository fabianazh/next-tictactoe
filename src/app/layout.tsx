import type { Metadata } from 'next'
import './globals.css'
import { poppins } from './font'

export const metadata: Metadata = {
    title: 'Next TicTacToe',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <main>{children}</main>
            </body>
        </html>
    )
}
