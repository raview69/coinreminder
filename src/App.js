import React, { useState, useEffect } from 'react'
import { ThemeProvider } from './theme/ThemeContext'
import Background from './theme/Background'
import Toggle from './theme/ThemeToggle'
import Coinlist from './components/coinlist/Coinlist'
import Pagination from './components/pagination/Pagintion'
import axios from 'axios'

const App = () => {
    const [todos, setTodos] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [todosPerPage] = useState(10)

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
            )
            setTodos(res.data)
        }
        fetchPosts()
    }, [])

    // Get current Todo
    const indexOfLastTodo = currentPage * todosPerPage
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo)

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <ThemeProvider>
            <Background>
                <div className="flex items-center justify-between top-0 right-0 p-2">
                    <div className="dark:text-white font-bold">CoinTracker</div>
                    <Toggle />
                </div>
                <Coinlist data={currentTodos} page={currentPage} />
                <Pagination
                    coinsPerPage={todosPerPage}
                    totalTodos={todos.length}
                    paginate={paginate}
                />
            </Background>
        </ThemeProvider>
    )
}

export default App
