// Clean Up Functions //

// Showing the screen Actual Size On DOM //

import React,{ useState,useEffect} from 'react'


function UseEffectCleanUp() {


    const [mywidth, setmywidth] = useState(window.screen.width);


    const actualWidth = () => {
        setmywidth(window.innerWidth)
    }


    useEffect( () => {
        window.addEventListener("resize", actualWidth);

        return() => {
            window.removeEventListener('resize', actualWidth)
        }
    } )





    return (
        <div>
            <h2>The Actual size of the window is :</h2>
            <h2>{mywidth}</h2>
        </div>
    )
}

export default UseEffectCleanUp
