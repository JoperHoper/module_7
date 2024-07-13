import { useEffect, useState } from "react";
import { useData } from "../hooks/useData";

export const LabTwo = () => {
    const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

    const BitcoinRates2 = () => {
        const [currency, setCurrency] = useState(currencies[0]);
        const [bitcoinObj, isLoading] = useData(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);

        const displayCurrencyHandler = () => {
            if (isLoading) {
                return <p>Loading...</p>;
            }
            return <p>1 Bitcoin is equals to: {bitcoinObj?.data?.bitcoin[currency.toLowerCase()]} {currency}</p>
        };

        const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);
        return (
            <div className="BitcoinRates componentBox">
                <h3>Bitcoin Exchange Rate</h3>
                <label>Choose currency:
                    <select value={currency} onChange={(e) => {
                        setCurrency(e.target.value)
                    }}>
                        {options}
                    </select>
                </label>
                {displayCurrencyHandler()}
            </div>
        )
    }
    return (
        <>
            <BitcoinRates2 />
        </>
    )
}