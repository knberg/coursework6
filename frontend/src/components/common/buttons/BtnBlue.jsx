import React from 'react'


const BtnBlue = (props) => {
    return (
        <button
            className="btn btn-blue"
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}


export default BtnBlue