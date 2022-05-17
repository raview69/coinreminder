import React from 'react'

const Pagintion = ({ coinsPerPage, totalTodos, paginate }) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalTodos / coinsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav className="dark:text-white">
            <ul className="flex">
                {pageNumbers.map((number) => (
                    <li key={number} className="border-2 border-white px-1">
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
