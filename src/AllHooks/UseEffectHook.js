import React, {useState,useEffect} from 'react';

function UseEffectHook() {


    const [count, setcount] = useState(0)

    useEffect(() => {
        if(count >= 1){
            document.title = `Chats(${count})`
        }else{
            document.title = `Chats`

        }
    })
    


    return (
        <div>
            UseEffectHook
                <h3>{count}</h3>
                <button onClick={()=> setcount(count + 1)}>click</button>

        </div>
    )
}

export default UseEffectHook
