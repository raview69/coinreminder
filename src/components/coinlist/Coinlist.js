import React from 'react'

// import axios from 'axios'
// import { data } from '../../data.js'

const Coinlist = ({ data, page }) => {
    // const url =
    //     'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

    // const getCoinlist = async () => {
    //     try {
    //         const getdata = await axios.get(url)
    //         console.log(getdata)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    const coindata = data.map((item, index) => (
        <tbody key={index}>
            <tr>
                <td>{(page - 1) * 10 + index + 1}</td>
                <td>{item.name}</td>
                <td>{item.symbol}</td>
                <td>${item.current_price}</td>
            </tr>
        </tbody>
    ))
    return (
        <div className="dark:text-white">
            <table>
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Price</th>
                    </tr>
                </thead>
                {coindata}
            </table>
        </div>
    )
}

export default Coinlist
