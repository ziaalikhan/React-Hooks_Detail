import React, {useState} from 'react'

function LoginGetData() {

    const [phone, setphone] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
  
    const [data, setdata] = useState([]);
  
  
    const addData = () => {
       let stuData = {
         phone,
         email,
         password
       }
  
       let fullData = [...data];
       fullData.push(stuData);
       setdata(fullData);
    }
  
  
    return (
      <div>
        <input
        value={phone}
        onChange={(e) => setphone(e.target.value)}
        type="phone" placeholder='Enter your Phone' /> <br />
        <input
        value={email}
        onChange={(e) => setemail(e.target.value)}
        type="text" placeholder='Enter your Email' /> <br />
        <input
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        type="password" placeholder='Enter your Password' /> <br />
  
        <button onClick={addData}>add the data</button>
  
  
  
  {
    data.map((val) => {
      return(
        <div>
          <p>My phone is : {val.phone}</p>
          <p>My email is : {val.email}</p>
          <p>My password is : {val.password}</p>
        </div>
      )
    })
  }
  
  
        
      </div>
    )
  }
  

export default LoginGetData;
