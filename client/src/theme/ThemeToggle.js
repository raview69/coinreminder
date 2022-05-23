import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { ThemeContext } from './ThemeContext'
import Clock from 'react-live-clock'

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext)

    return (
        <div className="flex transition duration-500 ease-in-out rounded-full p-2 ">
            <Clock
                format={'h:mm:ss A'}
                ticking={true}
                timezone={'US/Pacific'}
                className="pr-2 dark:text-white"
            />
            {theme === 'dark' ? (
                <FaSun
                    onClick={() =>
                        setTheme(theme === 'dark' ? 'light' : 'dark')
                    }
                    className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
                />
            ) : (
                <FaMoon
                    onClick={() =>
                        setTheme(theme === 'dark' ? 'light' : 'dark')
                    }
                    className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
                />
            )}
        </div>
    )
}

export default Toggle
