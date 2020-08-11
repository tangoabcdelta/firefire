// stateless functional component declaration
// with implicit return statement

import React from 'react';
const ToDo = props =>     
    <li uniquekey={props.todoID}>
        {props.text}
        <span>&nbsp;</span>
        <button onClick={props.delete}>X</button>
    </li>
export default ToDo;
