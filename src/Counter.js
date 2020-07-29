import React from 'react';
import './App.css';

function Counter(props) {

    const Reset = (
    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bootstrap-reboot" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              d="M1.161 8a6.84 6.84 0 1 0 6.842-6.84.58.58 0 0 1 0-1.16 8 8 0 1 1-6.556 3.412l-.663-.577a.58.58 0 0 1 .227-.997l2.52-.69a.58.58 0 0 1 .728.633l-.332 2.592a.58.58 0 0 1-.956.364l-.643-.56A6.812 6.812 0 0 0 1.16 8zm5.48-.079V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324h-1.6zm0 3.75V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352h1.141z"/>
    </svg>)

    const Delete = (<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor"
                         xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fillRule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg>)

    return (
        <div>
            <button
                className="btn btn-outline-secondary"
                style={{margin: "5px"}}
                onClick={ () => props.minus(props.index) }>-</button>
            <span className="h4">{props.count}</span>
            <button
                className="btn btn-outline-secondary"
                style={{margin: "5px"}}
                onClick={ () => props.plus(props.index) }>+</button>
            <button
                className="btn btn-outline-secondary"
                style={{margin: "5px"}}
                onClick={() => props.deleteOne(props.index)}>{Delete}</button>
            <button
                className="btn btn-outline-secondary"
                style={{margin: "5px"}}
                onClick={() => props.resetOne(props.index)}>{Reset}</button>

        </div>
    );
}

export default Counter;
