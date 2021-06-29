
// work with Array using UseState Hook //


import React, {useState} from 'react'

function UseStateWithArray() {


    const bioData = [
        {
            id: 0,
            name: 'zia ali khan',
            professon: 'Full Stack Developer'
        },
        {
            id: 1,
            name: 'Hamza ali khan',
            professon: 'Front End Developer'
        },
        {
            id: 2,
            name: 'zia ali khan',
            professon: 'Full Stack Developer'
        },
        {
            id: 3,
            name: 'Hamza ali khan',
            professon: 'Front End Developer'
        }
    ]

    const [Array, setArray] = useState(bioData);


    const clearData = () => {
        setArray([])
    }


    return (
        <div>
           { Array.map((val)=> {
                return <h2>Name: {val.name} and professon is {val.professon}</h2>
            })}
            <button onClick={clearData}>clear</button>
        </div>
    )
}

export default UseStateWithArray;
