import React from 'react'
import { TiDelete } from 'react-icons/ti';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';

function ExpenseItem({name,cost,id}) {

    const {dispatch} = useContext(AppContext);
    
    function deleteItem(event){
        dispatch({type:'DELETE_ITEM',payload:id})
    }
  return (
    <li className='list-group-item d-flex justify-content-between '>
        {name}
        <span>Rs. {cost}
            <TiDelete onClick={deleteItem}  size='1.5em'></TiDelete>
        </span>

    </li>
  )
}

export default ExpenseItem