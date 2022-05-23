import React from 'react'
import { MyPaginate } from './MyPaginate.js'
import Coinlist from '../coinlist/Coinlist'

const Pagintion = ({ currentItem, indexPage, handlePageClick, pageCount }) => {
    return (
        <>
            <Coinlist data={currentItem} page={indexPage} />
            <div className="flex items-center justify-center pb-10 dark:text-white">
                <MyPaginate
                    breakLabel="..."
                    nextLabel="Next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={4}
                    marginPagesDisplayed={1}
                    pageCount={pageCount}
                    previousLabel="< Prev"
                    renderOnZeroPageCount={null}
                />
            </div>
        </>
    )
}

export default Pagintion
