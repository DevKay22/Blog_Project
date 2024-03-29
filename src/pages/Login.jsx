import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [userData, setUserData] = useState({  
    email: '',
    password: ''
  
  })

  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return {...prevState, [e.target.name] : e.target.value} 
    })
  }

  return (
   <section className='login'>
    <div className="container">
      <h2>Log In</h2>

      <form action="" className='form register__form'>
        <p className="form__error-message">
          This is an error message.
        </p>


        <input type="email" placeholder='Email' name='email' value={userData.email} 
        onChange={changeInputHandler}/>

        <input type="password" placeholder='Password' name='password' value={userData.password} 
        onChange={changeInputHandler}/>

        
        <button type="submit" className="btn primary">Log In</button>



      </form>

      <small>
        Don't have an account? <Link to='/register'>Register</Link>
      </small>

     
    </div>
   </section>
  )
}

export default Login