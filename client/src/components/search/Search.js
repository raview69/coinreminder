import React, { useState, useRef } from 'react'
import SearchList from './SearchList'
import SearchScrool from './SearchScrool'
import axios from 'axios'

const Search = ({ details }) => {
    const [searchField, setSearchField] = useState('')
    const [searchShow, setSearchShow] = useState(false)
    const [searchAsuk, setSearchAsuk] = useState([])
    const [dataemail, setDataEmail] = useState([])
    const [dataPriceNotify, setPriceNotify] = useState([])
    const inputRef = useRef(null)

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

    const handleEmailChange = (e) => {
        setDataEmail(e.target.value)
    }

    const handlePriceChange = (e) => {
        setPriceNotify(e.target.value)
    }

    const handleClick = () => {
        setSearchField(searchAsuk[0])
        setSearchShow(false)
    }

    const handleClickClear = () => {
        setSearchAsuk((searchAsuk.length = 0))
        setSearchAsuk([])
        setSearchField('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(
            'https://coinalertapp.herokuapp.com/api/post',
            {
                coin: searchAsuk[0],
                price: searchAsuk[1],
                email: dataemail,
                price_notify: dataPriceNotify,
            },
            {
                headers: {
                    'access-control-allow-origin': '*',
                    'Access-Control-Allow-Headers':
                        'Content-Type, Authorization',
                    'Access-Control-Allow-Methods': '*',
                },
            }
        )

        handleClickClear()
        setTimeout(() => {
            setDataEmail([])
        }, 3000)

        setDataEmail('')
        setPriceNotify('')
    }

    const searchBox = () => {
        if (searchShow) {
            return (
                <div className="absolute dark:bg-black" onClick={handleClick}>
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
        <form
            className="px-4 sm:flex sm::items-center sm:justify-center pb-28 text-lg dark:text-white lg:mx-16"
            onSubmit={handleSubmit}
        >
            <div className="flex items-center justify-center">
                <div className="pr-8 sm:pr-2 lg:pr-8 dark:text-white">
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
                <div className="pr-8 sm:pr-2 lg:pr-8 dark:text-white">
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
            <div className="flex items-center justify-center">
                <div className="pr-8 sm:pr-2 lg:pr-8 dark:text-white">
                    <div>
                        <h3>Your email:</h3>
                    </div>
                    <div className="flex dark:text-white">
                        <input
                            className="w-40 border-2 dark:border-white dark:text-white dark:bg-black"
                            type="text"
                            placeholder="Input email"
                            value={dataemail}
                            onChange={handleEmailChange}
                            ref={inputRef}
                        />
                    </div>
                </div>
                <div className="pr-8 sm:pr-2 lg:pr-8 dark:text-white">
                    <div>
                        <h3>Notify price at:</h3>
                    </div>
                    <div className="flex dark:text-white">
                        <input
                            className="w-40 border-2 dark:border-white dark:text-white dark:bg-black"
                            type="number"
                            placeholder="Input Price"
                            value={dataPriceNotify}
                            onChange={handlePriceChange}
                            ref={inputRef}
                        />
                    </div>
                </div>
            </div>
            <div className="pr-8 sm:pr-2 lg:pr-8  dark:text-white">
                <div>
                    <h3>&nbsp;</h3>
                </div>
                <button className="px-2 border-2 rounded-sm text-center">
                    Submit
                </button>
            </div>
        </form>
    )
}

export default Search
