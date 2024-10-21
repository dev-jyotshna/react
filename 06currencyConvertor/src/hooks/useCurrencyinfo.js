import {useEffect, useState} from "react"

function useCurrencyInfo(currency){
    // when this hook is used then api is called
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response) => response.json())
        .then((res) => setData(res[currency]))
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;

// Custom Hook