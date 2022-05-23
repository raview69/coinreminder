import React from 'react'
import Toggle from '../../theme/ThemeToggle'
import coinlog from '../img/caoin2.svg'

const Header = () => {
    return (
        <div className="flex items-center justify-between top-0 right-0 py-2 px-4 lg:mx-16">
            <img src={coinlog} className="h-[40px]" alt="" />
            <Toggle />
        </div>
    )
}

export default Header
