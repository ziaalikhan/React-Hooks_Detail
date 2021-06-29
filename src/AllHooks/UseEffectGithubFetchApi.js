import React, {useState,useEffect} from 'react';
import './UseEffectGithubFetchApi.css';

function UseEffectGithubFetchApi() {


    const [users, setusers] = useState([]);

//  getUsers Function ha //

    const getUsers = async() => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
            // console.log(response);
            setusers(await response.json());
        }catch (error){
            console.log('My error is ==>',error);
        }
      
    }

    // UseEffect Alag ha //

    useEffect(() => {
     getUsers(); 
    },[])


    return (
        <div>
            <h2 className='heading'>List Of Github Users</h2>

<div className="main">

    {
        users.map((val)=>{
            return(
                <div className="containermain" key={val.id}>
                <div className="elements">
                    <img src={val.thumbnailUrl} className='image' alt="" />
                    <h5>Zia khan </h5>
                    <h5>Title : {val.title}</h5>
                    {/* <h5>hello</h5> */}
                </div>
            </div>
            )
        })
    }

          
        
</div>
            
           
        </div>
    )
}

export default UseEffectGithubFetchApi;
