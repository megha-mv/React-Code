import React, {useState} from 'react'

const LoginForm = () => {
  const [userName, setUserName] = useState('');
  const [pswd, setPswd] =useState('');

  const handleSubmit =(e) =>{
    e.preventDefault();
    if(userName === "user" && pswd === "pswd"){
      console.log("Valid credientals");
    }else{
      alert('invalid credientals')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>UserName</h1>
      <input type='text' value={userName} onChange={(e) => setUserName(e.target.value)}></input>
      <h1>Password</h1>
      <input type='password' value={pswd} onChange={(e) => setPswd(e.target.value)}></input>
      <button type="submit">Submit</button>
    </form>
  )
}

export default LoginForm;