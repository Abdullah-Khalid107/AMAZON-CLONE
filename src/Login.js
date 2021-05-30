
import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://logodownload.org/wp-content/uploads/2016/10/olx-logo-13.png' 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signinbutton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the OLX FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerbutton'>Create your OLX Account</button>
            </div>
        </div>
    )
}

export default Login



// import React,{useState} from 'react'
// import "./Login.css";
// import {Link, useHistory} from "react-router-dom"
// import {auth} from './firebase';

// function Login() {
//     const[email,SetEmail]=useState('');
//     const[password,SetPassword]=useState('');

// //button functins here boys..

// const signIn = e => {
//     e.preventDefault();

//     auth
//         .signInWithEmailAndPassword(email, password)
//         .then(auth => {
//             history.push('/')
//         })
//         .catch(error => alert(error.message))
// }

// const register = e => {
//     e.preventDefault();

//     auth
//         .createUserWithEmailAndPassword(email, password)
//         .then((auth) => {
//             // it successfully created a new user with email and password
//             if (auth) {
//                 history.push('/')
//             }
//         })
//         .catch(error => alert(error.message))
// }
//     return (
//         <div className="login">
//             <Link to="/">

//              <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
//             </Link>

//             <div className="login__container">
//                 <h1>Sign In</h1>

//                 <form>
//                     <h5>E-mail</h5>
//                     <input type="text" value={email} onChange={e=>SetEmail(e.target.value)}/>

//                     <h5>Password</h5>
//                     <input type="password" value={password} onChange={e=>SetPassword(e.target.value)}/>

//                     <button type="submit" onClick={signIn}
//                     className="login__signinbutton">Sign In</button>
//                 </form>
//                 <p>
//                     By signing in you agree to Amazon's conditon of use and sale.Please see our privacy
//                      notice and our interest based apps and adds interest based apps and adds
//                 </p>
//                 <button  onClick={register}
//                 className="login__registerbutton">Create your Amazon Account</button>
//             </div>
//         </div>
//     )
// }

// export default Login
