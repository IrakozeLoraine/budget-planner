import React, { useContext } from 'react'

import ExpenseList from './Expense/ExpenseList'
import AddExpenseForm from './Expense/AddExpenseForm'
import AddBudget from './Budget/AddBudget'
import { AppContext } from '../context/AppContext'
import Card from './Card/Card'


const Home = () => {
    const { expenses, budget_currency } = useContext(AppContext)
    const totalExpenses = expenses.reduce((total, item)=> { return (total += item.cost)}, 0)

    const alertType = totalExpenses > budget_currency.budget ? 'bg-red-200' : 'bg-green-200'
    
    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className=''>
                <Card symbol={budget_currency.currency.symbol} amount={budget_currency.budget} bgColor={'bg-gray-200'}>Budget</Card>
            </div>
            <div className=''>
                <Card symbol={budget_currency.currency.symbol} amount={budget_currency.budget - totalExpenses} bgColor={alertType}>Remaining</Card>
            </div>
            <div className=''>
                <Card symbol={budget_currency.currency.symbol} amount={totalExpenses} bgColor={'bg-blue-200'}>Spent</Card>
            </div>
        </div>
        <div>
            <h1 className='my-7 font-bold text-xl'>Expenses</h1>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div className=''>
                  <ExpenseList />
                </div>
                <div className=''>
                  <AddExpenseForm/>
                </div>
                <div className=''>
                    <AddBudget/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home