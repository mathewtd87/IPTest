import React from 'react'

export const Counter = (props) => {
    //destructure props to get value attribute
    const {value} = props;
    return (
        <div>
            <h2 
                className="bg-primary rounded my-2 py-1 text-center mx-auto" 
                style={{width: 200}}>{value}</h2>
        </div>
    )
}

export default Counter
