import React, { useState } from 'react'
import SearchList from './SearchList'
import SearchScrool from './SearchScrool'

const Search = ({ details }) => {
    const [searchField, setSearchField] = useState('')
    const [searchShow, setSearchShow] = useState(false)
    const [searchAsuk, setSearchAsuk] = useState([])

    const filteredCoin = details.filter((item) => {
        return (
            item.name.includes(searchField) || item.symbol.includes(searchField)
        )
    })

    const handleChange = (e) => {
        setSearchField(e.target.value)
        if (e.target.value === '') {
            setSearchShow(false)
        } else {
            setSearchShow(true)
        }
    }

    const handleClick = () => {
        setSearchField(searchAsuk[0])
        setSearchShow(false)
        console.log(searchAsuk)
        console.log(searchField)
    }

    const handleClickClear = () => {
        setSearchAsuk((searchAsuk.length = 0))
        setSearchAsuk([])
        setSearchField('')
        console.log('asuuukkk')
        console.log(searchField)
    }

    const searchBox = () => {
        if (searchShow) {
            return (
                <div onClick={handleClick}>
                    <SearchScrool>
                        <SearchList
                            filteredCoin={filteredCoin}
                            filteredClick={searchAsuk}
                        />
                    </SearchScrool>
                </div>
            )
        }
    }

    return (
        <div className="flex p-4 border-2 dark:border-white dark:text-white">
            <div className="pr-4 dark:text-white">
                <div>
                    <h3>Search your coin:</h3>
                </div>
                <div className="flex dark:text-white">
                    <input
                        className="border-y-2 border-l-2 w-36 dark:border-white dark:text-white dark:bg-black"
                        type="text"
                        placeholder="Search coin"
                        value={searchField}
                        onChange={handleChange}
                    />
                    <button
                        className="border-y-2 border-r-2 w-4 dark:border-white dark:text-white"
                        onClick={handleClickClear}
                    >
                        X
                    </button>
                </div>
                {searchBox()}
            </div>
            <div className="dark:text-white">
                <div>
                    <h3>Price now:</h3>
                </div>
                <div className="dark:text-white">
                    <div className="border-2 w-40 dark:border-white">
                        {searchAsuk[1]}&nbsp;
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
