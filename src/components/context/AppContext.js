import { useReducer } from "react";
import { createContext } from "react";

const initialState = {
	budget: 100000,
	expenses: [
		{ id: 12, name: 'shopping', cost: 40 },
		{ id: 13, name: 'holiday', cost: 400 },
		{ id: 14, name: 'car service', cost: 50 },
	],
};

function reducer(state,action){
    switch(action.type){
        case 'ADD_ITEM':
            // const newExpenses = state.expenses.push({id:15,name:action.payload.name,cost:action.payload.cost});
            let newState = {...state};
            newState.expenses.push({id:15,name:action.payload.name,cost:parseInt(action.payload.cost)});
            console.log('new state is',state);
            return newState;
        case 'DELETE_ITEM':
            let newState2 = {...state};
            newState2['expenses'] = newState2.expenses.filter((item)=>{
                if(item.id!=action.payload)
                    return item;
            });
            console.log('new expenses is',newState2);
            return newState2;
        default:
            return state;
    }
}

export const AppContext = createContext();

export const AppProvider = (props)=>{

    const [state,dispatch] = useReducer(reducer,initialState);

    return (
        <AppContext.Provider value={{
            budget : state.budget,
            expenses : state.expenses,
            dispatch
        }}>
            {props.children}
        </AppContext.Provider>
    )
}