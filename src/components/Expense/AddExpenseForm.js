import React, { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { AppContext } from '../../context/AppContext'

const AddExpenseForm = () => {
    const { dispatch, budget_currency } = useContext(AppContext)

    const [name, setName] = useState('')
    const [cost, setCost] = useState('')
    
    const onSubmit = e => {
        e.preventDefault()
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost)
        }
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        })
    }

    return (
        <div className="add-expense-form mx-7 border-l-4">
            <div className="flex items-center justify-between m-4">
                <div className="font-semibold text-gray-800">Add Expense</div>
            </div>
            <form 
            className="bg-white rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={onSubmit}>
                <div className="mb-6">
                    <input 
                    className="border-b-2 w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="username" 
                    type="text" 
                    value={name}
                    onChange={ e => setName(e.target.value)}
                    placeholder="Name"/>
                </div>
                <div className="mb-6">
                    <input 
                    className="border-b-2 w-full p-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                    id="cost" 
                    type="text" 
                    value={cost}
                    onChange={ e => setCost(e.target.value)}
                    placeholder={'Cost ('+budget_currency.currency.symbol+')'}/>
                </div>
                <div className="flex">
                    <button 
                    type="submit" 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddExpenseForm
