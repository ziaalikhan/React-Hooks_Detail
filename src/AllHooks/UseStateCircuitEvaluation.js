import React, {useState} from 'react'

function UseStateCircuitEvaluation() {


    const [demo, setDemo] = useState('');

    return (
        <div>
            <h2>UseStateCircuitEvaluation</h2>

            <h3> {demo || 
            <>
            <h3>Hello zia</h3>
            <h3>Welcome</h3>
            </>
            }</h3>
            {/* <h3> {demo && 'zia ali khan'}</h3> */}

            <h3></h3>
            
        </div>
    )
}

export default UseStateCircuitEvaluation
