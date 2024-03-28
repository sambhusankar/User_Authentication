import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { register } from '../../Stores/slicer'
import {GoogleLogin} from '@react-oauth/google'
import authService from '../../appwrite/auth'
import './registration.css'
function Registration(){
    const c_Id ='719110131805-gttrn27olhkceghj09rnrid8qvps46lr.apps.googleusercontent.com'
    const dispatch = useDispatch()
    const url="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    async function submitForm(e){
        e.preventDefault()
        const userAccount = await authService.createAccount(email, name, password)
        console.log(userAccount)
        setName('')
        setEmail('')
        setPassword('')
    };
    function handleSuccess(response){
        console.log(response)
    };

 
    return(
        <div className='main-reg'>
        <div className='img'>
            <h1 className='logo'>TRIPLES</h1>
        </div>
       <form className="registration-form" name="registration">
        <GoogleLogin
          clientId={c_Id}
          onSuccess={handleSuccess}
          cookiePolicy={'single_host_origin'}
        />
    
        <p>------ or ------</p>
        <input className="fullname" placeholder="Full Name" value={name} onChange={(e)=>setName((e.target.value))}></input>
        <input type="email" className="email" placeholder="Email Adress" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        <input type ="password" className="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <button className="cr-ac-btn" onClick={submitForm}>Create Account</button>
        <p>Already have an account ? <Link className="login-link" to="/login">log in</Link></p>

       </form>
       </div>
    )
}
export default Registration