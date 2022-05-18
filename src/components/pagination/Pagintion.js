import React from 'react'
import { MyPaginate } from './MyPaginate.js'
import Coinlist from '../coinlist/Coinlist'

const Pagintion = ({ currentItem, indexPage, handlePageClick, pageCount }) => {
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
