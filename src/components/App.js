import React, { useState, useRef } from 'react';
/**
 * @task :add validation to email, if email is not valid, if not valid email, dont allow to submit
 * @error_message :  "Email is invalid"  if email is wrong. (must be same message) 
 * 
 * 
 */

function App() {
  const fnameRef = useRef();
  const emailRef = useRef();
  const [error,setError] = useState('Email is invalid');
  const [data,setData] = useState({fname:'',lname:''});  
  const submitHandler = (e)=> {
    e.preventDefault();
    // if(isValidEmail(emailRef.current.value)){
    //   setError('');
    // }
    // else setError('Email is invalid');
    setData({
      fname: fnameRef.current.value,
      lname: emailRef.current.value
    })
  }
  const isValidEmail = (email) => {
    return /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email);
  }
  const validateEmail = ()=>{
    if(isValidEmail(emailRef.current.value)){
      setError('');
    }
    else {
      setError('Email is invalid');
      setData({});
    }
  }

 /**
  * code here
  */

  return(
    <div className="App">
      <h1>How About Them Apples</h1>
      <form onSubmit={submitHandler}>
        <fieldset>
          <label>
            <p>First Name</p>
            <input id='fname' name="name"  ref={fnameRef}/>
            <br></br>
            <p>Email</p>
            <input id='lname' name="name"   ref={emailRef} onChange={validateEmail}/>
            {error && <h2 style={{color: 'red'}}>{error}</h2>}
          </label>
        </fieldset>

        <button id='submit' type="submit" disabled={error}>Submit</button>
      </form>
      {
        data.fname != undefined && (
          <div>
          <h1>{data.fname}</h1>
          <h2>{data.lname}</h2>
          </div>
        )
      }
    </div>
  )
}


export default App;
