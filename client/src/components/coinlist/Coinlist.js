import React from 'react'

const Coinlist = ({ data, page }) => {
    const coindata = data.map((item, index) => (
        <tbody key={index}>
            <tr className="text-left border-y border-y-slate-200 dark:border-y-slate-800">
                <td className="pl-7 pr-1 py-2">{page * 10 + index + 1}</td>
                <td className="flex px-8 py-2">
                    <img src={item.image} className="w-5 h-5" alt="coin" />
                    &nbsp;
                    {item.name}
                </td>
                <td className="px-6 py-2">{item.symbol.toUpperCase()}</td>
                <td className="px-8 py-2">
                    ${item.current_price.toLocaleString()}
                </td>
                <td
                    className={
                        item.price_change_percentage_24h >= 0
                            ? 'px-8 py-2 text-green-500'
                            : 'px-8 py-2 text-red-500'
                    }
                >
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
            <div className="overflow-x-scroll">
                <table>
                    <thead>
                        <tr className="text-left border-y border-y-slate-400 dark:border-y-slate-600">
                            <th className="pl-7 pr-1 py-2 mr-4">No</th>
                            <th className="px-8 py-2">Name</th>
                            <th className="px-6 py-2">Symbol</th>
                            <th className="px-8 py-2">Price</th>
                            <th className="px-8 py-2">24h Change</th>
                            <th className="px-8 py-2">24h Volume</th>
                            <th className="px-8 py-2">Market Cap</th>
                        </tr>
                    </thead>
                    {coindata}
                </table>
            </div>
        </div>
    )
}

export default Coinlist
