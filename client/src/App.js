import React, { useEffect, useState, useRef } from 'react'
import { ThemeProvider } from './theme/ThemeContext'
import Background from './theme/Background'
import Pagination from './components/pagination/Pagintion'
import Search from './components/search/Search'
import axios from 'axios'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Qa from './components/qa/Qa'

const App = () => {
    const [currentItem, setCurrentItems] = useState([])
    const [itemSearch, setitemSearch] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)
    const [indexPage, setIndexPage] = useState(0)
    const itemsPerPage = 10
    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView()

    useEffect(() => {
        const fetchPosts = async () => {
            const endOffset = itemOffset + itemsPerPage
            const res = await axios.get(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false'
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
                <Header />
                <Hero buttonclick={executeScroll} />
                <Pagination
                    currentItem={currentItem}
                    indexPage={indexPage}
                    handlePageClick={handlePageClick}
                    pageCount={pageCount}
                />
                <div ref={myRef}>
                    <Search details={itemSearch} />
                </div>
                <Qa />
            </Background>
        </ThemeProvider>
    )
}

export default App
