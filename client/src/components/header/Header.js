import React from 'react'
import Toggle from '../../theme/ThemeToggle'

const Header = () => {
    return (
        <div className="flex items-center justify-between top-0 right-0 py-2 lg:mx-16">
            <div className="dark:text-white font-bold">CoinTracker</div>
            <Toggle />
        </div>
    )
}

export default Header
