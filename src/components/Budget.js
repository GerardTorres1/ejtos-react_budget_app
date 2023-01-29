import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const { currency } = useContext(AppContext);
    const totalSpent = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const [inputValue, setInputValue] = useState(budget);

    const handleBlur = (event) => {
        const newBudget = parseInt(event.target.value);
        if (newBudget > 20000) {
            alert("The budget value cannot exceed 20000");
            dispatch({
                type: 'SET_BUDGET',
                payload: 20000,
            });
            setInputValue(20000);
        } else if (newBudget < totalSpent) {
            alert("You cannot reduce the budget value lower than the spending");
            dispatch({
                type: 'SET_BUDGET',
                payload: totalSpent,
            });
            setInputValue(totalSpent);
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,
            });
            setInputValue(newBudget);
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                required='required'
                type='number'
                id='cost'
                value={inputValue}
                style={{ size: 10 }}
                onBlur={handleBlur}
                onChange={(event) => setInputValue(event.target.value)}
            ></input>
        </div>
    );
};

export default Budget;
