
// useState with Objects and change the value //


import React, {useState} from 'react'




function UseStateWithObjects() {


    const [myObj, setmyObj] = useState(
        {
            name: 'zia ali khan', age: 21
        }
    )

    const changeData = ()=> {
        setmyObj({...myObj, name: 'hamza ali khan'})
    }


    return (
        <div>
            <h1>Name {myObj.name} and Age is {myObj.age}</h1>
            <button onClick={changeData}>CLick</button>
            
        </div>
    )
}

export default UseStateWithObjects;
