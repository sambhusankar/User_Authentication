import React, { useState, useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import authService from '../../appwrite/auth'
function Home(){
    const [user, setUser] = useState()
    useEffect(()=>{
    async function CurrentUser(){
        const Logeduser = await authService.getCurrentUser()
        setUser(Logeduser)
        
    }
    CurrentUser()
        },[])
    
    async function handleLogout(){
        await authService.logout()
    };

    async function handleDelete(){
        if(user){
        await authService.deleteAccount("65f1cff0e4abf1c0922e")
        console.log("delete account")
        }
        else{
            console.log("user data not loaded")
        }
    }

    return(
        <div>
            <nav>
                <h1>TRIPLES</h1>
                <span></span>
                <button onClick = { handleLogout }><Link to="/login" style={{color:"white"}}>Logout</Link></button>
                <button onClick = { handleDelete }><Link to = "/" style={{color:"white"}}>Delete Account</Link></button>
            </nav>
            <div>
                <h2>welcome back to TRIPLES</h2>
                <h3>{ !user ? "" : user.name}</h3> 
               
            </div>
        </div>
    )
}
export default Home