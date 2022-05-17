import React from 'react'

const Pagintion = ({ coinsPerPage, totalTodos, paginate }) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalTodos / coinsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav className="flex items-center justify-center my-3 dark:text-white">
            <ul className="flex border-l-[1px] border-y-[1px] border-slate-900 dark:border-white">
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        className="flex items-center justify-center border-r-[1px] border-slate-900 px-1 w-8 dark:border-white"
                    >
                        <a
                            onClick={() => paginate(number)}
                            href="!#"
                            className=""
                        >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagintion
