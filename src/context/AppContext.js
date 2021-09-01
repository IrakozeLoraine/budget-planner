import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
	switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload)
            }
        case 'ADD_BUDGET':
            return {
                ...state,
                budget_currency: action.payload,
            }
		default:
			return state;
	}
}

const initialState = {
	budget_currency: {
		budget: 0,
		currency: {
			symbol: "€",
			name: "Euro",
			symbol_native: "€",
			decimal_digits: 2,
			rounding: 0,
			code: "EUR",
			name_plural: "euros"
		},
	},
	expenses: [
	],
}

export const AppContext = createContext()

export const AppProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<AppContext.Provider
			value={{
				budget_currency: state.budget_currency,
				expenses: state.expenses,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	)
}