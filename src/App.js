import React from 'react'
import { ThemeProvider } from './theme/ThemeContext'
import Background from './theme/Background'
import Toggle from './theme/ThemeToggle'
import Pagination from './components/pagination/Pagintion'

const App = () => {
    //
    return (
        <ThemeProvider>
            <Background>
                <div className="flex items-center justify-between top-0 right-0 p-2">
                    <div className="dark:text-white font-bold">CoinTracker</div>
                    <Toggle />
                </div>
                <Pagination itemsPerPage={10} />
            </Background>
        </ThemeProvider>
    )
}

export default App
