

// Simple Todo With Arrays and Delete Functionality 




import React, {useState} from 'react'

function SimpleTodoWithArray() {

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

    const removeBtn = (id) => {
        const newArray = Array.filter((val) => {
            return val.id !== id;
        })   
        setArray(newArray);
    }


    return (
        <div>
           { Array.map((val)=> {
                return <h2>Name: {val.name} and professon is {val.professon}
                <button onClick={() => removeBtn(val.id)}>Delete</button>
                </h2>
            })}
            <button onClick={clearData}>clear</button>
        </div>
    )
}


export default SimpleTodoWithArray;