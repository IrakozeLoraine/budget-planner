import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { v4 as uuidv4 } from 'uuid'

const AddBudget = () => {
    const { budget_currency, dispatch } = useContext(AppContext)

    const [budget, setBudget] = useState(budget_currency.budget)
    const [symbol, setSymbol] = useState(budget_currency.currency.symbol)
    const [currencies, setcurrencies] = useState([{}])

    const currencyUrl = 'https://gist.githubusercontent.com/madnik/49937c83061d1bc0d064/raw/f14d9aa9392b332c9756e06b8d289b9379525e29/currencies.json'

    useEffect(() => {
        (async () => {
            const res = await fetch(currencyUrl)
            const data = await res.json()
            setcurrencies(data)
        })()
    }, [])
    
    

    const onSubmit = e => {        
        e.preventDefault()
        
        let curr;
        currencies.map(c => {
            if (c.symbol === symbol) return curr = c
            return null
        })

        const budget_curr = {
            id: uuidv4(),
            budget: budget,
            currency: curr,
        }
        dispatch({
            type: 'ADD_BUDGET',
            payload: budget_curr,
        })
    }
 
    return (
        <div className="add-expense-form m-7 border-l-4 border-blue-600">
            <div className="flex items-center justify-between m-4">
                <div className="font-semibold text-gray-800">Create A Good Budget</div>
            </div>
            <form 
            className="bg-white rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={onSubmit}>
                <div className="mb-6">
                    <input 
                        className="border-b-2 w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="budget" 
                        type="text" 
                        value={budget}
                        onChange={ e => setBudget(e.target.value)}
                        placeholder="Enter Amount"/>
                </div>
                <div className="mb-6">
                    <select 
                    className="w-full h-11 border-b-2 text-gray-700"
                    value={symbol}
                    onChange={ e => setSymbol(e.target.value)}>
                        {
                          currencies.map((curr, index) => 
                          <option value={curr.symbol} key={index}> 
                              {curr.name} ({curr.code} - {curr.symbol}) </option>)
                        }
                    </select>
                </div>
                <div className="flex">
                    <button 
                    type="submit" 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Create
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddBudget
