import { useEffect } from "react";
import { useState } from "react";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    // fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}
    const [currencyValue, setCurrencyValue] = useState(0);
    useEffect(() => {
        const currencyResponse = fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
        currencyResponse.then((data) => {
            data.json().then((content) => {
                setCurrencyValue(content.bitcoin[currency.toLowerCase()])
            })
        })
        // cleanup function - runs when unmounted or dependencies change
        return () => {
            console.log('cleanup effect');
        };
    }, [currency])

    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);
    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>Choose currency:
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>
            <p>Value: {currencyValue}</p>
        </div>
    )
}

export { BitcoinRates }