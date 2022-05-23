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
                <img src={coin.image} className="w-5 h-5" alt="coin" />
                &nbsp;
                <p>{coin.name}</p>
            </div>
        </li>
    ))
    return (
        <div className="py-2">
            <ul>{filtered}</ul>
        </div>
    )
}

export default SearchList
