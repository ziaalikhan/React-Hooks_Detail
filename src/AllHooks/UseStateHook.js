
// Simple useState Hook //


import React,{useState} from 'react'

function UseStateHook() {

    const [name,setName] = useState(0);


    return (
        <div>

            <h2>{name}</h2>
            <button onClick={()=> setName(name+1)}>Change the name</button>
            
        </div>
    )
}

export default UseStateHook;
