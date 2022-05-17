import React, { useEffect, useState } from 'react'
import { MyPaginate } from './MyPaginate.js'
import Coinlist from '../coinlist/Coinlist'
import axios from 'axios'

const Pagintion = ({ itemsPerPage }) => {
    const [currentItem, setCurrentItems] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)
    const [indexPage, setIndexPage] = useState(0)

    useEffect(() => {
        const fetchPosts = async () => {
            const endOffset = itemOffset + itemsPerPage
            const res = await axios.get(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false'
            )
            const datacoin = res.data
            console.log(datacoin)
            setCurrentItems(res.data.slice(itemOffset, endOffset))
            setPageCount(Math.ceil(datacoin.length / itemsPerPage))
        }
        fetchPosts()
    }, [itemOffset, itemsPerPage])

    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        )
        setItemOffset(newOffset)
        setIndexPage(event.selected)
        console.log(itemOffset)
    }

    return (
        <>
            <Coinlist data={currentItem} page={indexPage} />
            <div className="flex items-center justify-center dark:text-white">
                <MyPaginate
                    breakLabel="..."
                    nextLabel="Next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< Prev"
                    renderOnZeroPageCount={null}
                />
            </div>
        </>
    )
}

export default Pagintion
