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
            <tr className="text-left border-y border-y-slate-200">
                <td className="px-8 py-2">{(page - 1) * 10 + index + 1}</td>
                <td className="flex px-8 py-2">
                    <img src={item.image} className="w-5 h-5" />
                    &nbsp;
                    {item.name}
                </td>
                <td className="px-8 py-2">{item.symbol.toUpperCase()}</td>
                <td className="px-8 py-2">
                    ${item.current_price.toLocaleString()}
                </td>
                <td className="px-8 py-2">
                    {item.price_change_percentage_24h.toFixed(1)}%
                </td>
                <td className="px-8 py-2">
                    ${item.total_volume.toLocaleString()}
                </td>
                <td className="px-8 py-2">
                    ${item.market_cap.toLocaleString()}
                </td>
            </tr>
        </tbody>
    ))
    return (
        <div className="flex items-center justify-center dark:text-white">
            <table>
                <thead>
                    <tr className="text-left border-y border-y-slate-400">
                        <th className="px-8 py-2">NO</th>
                        <th className="px-8 py-2">Name</th>
                        <th className="px-8 py-2">Symbol</th>
                        <th className="px-8 py-2">Price</th>
                        <th className="px-8 py-2">24h Change</th>
                        <th className="px-8 py-2">24h Volume</th>
                        <th className="px-8 py-2">Market Cap</th>
                    </tr>
                </thead>
                {coindata}
            </table>
        </div>
    )
}

export default Coinlist
