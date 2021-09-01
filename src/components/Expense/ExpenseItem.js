import React, { useContext } from 'react'
import { TiDelete } from 'react-icons/ti'
import { AppContext } from '../../context/AppContext'

const ExpenseItem = ({ id, name, cost }) => {
    const { dispatch, budget_currency } = useContext(AppContext)
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: id
        })
    }
    return (
        <div className="expense-item">
            <div className="flex items-center justify-between my-4">
                <div className="pl-2">
                    <div className="text-gray-700">
                        {name}
                    </div>
                </div>
                <div className="py-2 px-3 text-sm font-bold leading-none text-blue-100 bg-blue-600 rounded-full">{budget_currency.currency.symbol}{cost}</div>
                <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
            </div>
            <hr className="boder-b-0 my-4"/>
        </div>
    )
}

export default ExpenseItem
