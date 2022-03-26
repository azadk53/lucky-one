import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='question'>
            <h3>Props vs State</h3>
            <p>Props are used for data passing one component to another, State is used for data update or dynamic change. Props can't be modified but state can be modified. State is used for local component but Props can be used for one component to another(parent to child). Props is immutable but State is nmutable. </p>
            <h3>How useState works</h3>
            <p>useSate is one kind of hook which is used inside a function. It dose not work inside class. It declares a initial value and a function.We use it for update data dynamically. It returns current value and a function that updates it. Simply it's woring steps are 1. Declaring the state 2. Reading the state 3. Updating the state</p>
        </div>
    );
};

export default Question;