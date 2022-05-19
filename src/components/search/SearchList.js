import React from 'react'

const SearchList = ({ filteredCoin, filteredClick }) => {
    const filtered = filteredCoin.map((coin, index) => (
        <li key={index}>
            <div
                className="flex"
                onClick={() => {
                    filteredClick.push([coin.name])
                    filteredClick.push([coin.current_price])
                }}
            >
                <p>{coin.name}</p>&nbsp;
                <p>{coin.symbol.toUpperCase()}</p>
            </div>
        </li>
    ))
    return (
        <div>
            <ul>{filtered}</ul>
        </div>
    )
}

export default SearchList
