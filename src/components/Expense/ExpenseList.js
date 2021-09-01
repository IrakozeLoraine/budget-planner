import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {
    const { expenses } = useContext(AppContext)
    
    return (
        <div className="expense-list mx-7">
            <div className="flex items-center justify-between my-4">
                <div className="font-semibold text-gray-800">Expense List</div>
            </div>
            <hr className="boder-b-0 my-4"/>
            {
                expenses.map(expense=>(
                    <ExpenseItem key={expense.id} id={expense.id} name={expense.name} cost={expense.cost}/>
                ))
            }
        </div>
    )
}

export default ExpenseList
