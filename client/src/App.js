import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './theme/ThemeContext'
import Background from './theme/Background'
import Toggle from './theme/ThemeToggle'
import Pagination from './components/pagination/Pagintion'
import Search from './components/search/Search'
import axios from 'axios'
// import { dataCoin } from './data.js'

const App = () => {
    const [currentItem, setCurrentItems] = useState([])
    const [itemSearch, setitemSearch] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)
    const [indexPage, setIndexPage] = useState(0)
    const itemsPerPage = 10

    useEffect(() => {
        const fetchPosts = async () => {
            const endOffset = itemOffset + itemsPerPage
            const res = await axios.get(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false'
            )
            const datacoin = res.data
            setCurrentItems(res.data.slice(itemOffset, endOffset))
            setPageCount(Math.ceil(datacoin.length / itemsPerPage))
            setitemSearch(datacoin)
        }
        fetchPosts()
    }, [itemOffset, itemsPerPage])

    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage
        setItemOffset(newOffset)
        setIndexPage(event.selected)
    }

    return (
        <ThemeProvider>
            <Background>
                <div className="flex items-center justify-between top-0 right-0 p-2">
                    <div className="dark:text-white font-bold">CoinTracker</div>
                    <Toggle />
                </div>
                <Pagination
                    currentItem={currentItem}
                    indexPage={indexPage}
                    handlePageClick={handlePageClick}
                    pageCount={pageCount}
                />
                <Search details={itemSearch} />
            </Background>
        </ThemeProvider>
    )
}

export default App
