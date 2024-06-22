'use client'

import useLocalStorage from '@/hooks/useLocalStorage'
import { useEffect } from 'react'
import { PiSunBold, PiMoonLight } from 'react-icons/pi'

export default function Theme() {
    const [isDarkTheme, setIsDarkTheme] = useLocalStorage<boolean>(
        'isDarkTheme',
        false
    )

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    useEffect(() => {
        if (isDarkTheme) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDarkTheme])

    let icon = isDarkTheme ? (
        <PiMoonLight className="toolbar__icon" onClick={toggleTheme} />
    ) : (
        <PiSunBold className="toolbar__icon" onClick={toggleTheme} />
    )

    return <>{icon}</>
}
