import React, {useState, useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import { useSelector } from 'react-redux'
import authService from '../../appwrite/auth'
function Login(){
    const users = useSelector(state =>state.users)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [loginError,setLoginError] = useState(false)
    const [loged, setLoged] = useState(false)
    const [slided,setSlided] = useState(1)
    const slideRef = useRef(null)

    async function handleLogin(e){
        e.preventDefault();
        const logedUser = await authService.login(email, password)
        const user = await authService.getCurrentUser()
    
        if(logedUser){
            setLoged(true)
            console.log(user)
        }
        else{
            
            setLoged(false)
            setLoginError(true)
        }
    };
    function handleLScroll(e){
        const scrollAmount = slideRef.current.scrollWidth / 3;
        const currentScrollLeft = slideRef.current.scrollLeft;
        const newScrollLeft = currentScrollLeft + scrollAmount;
        slideRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth' // Adding smooth behavior
  });
        if(slided > 0 && slided < 3){
        setSlided(slided+1)
        }
    };
    function handleRScroll(e){
        const scrollAmount= slideRef.current.scrollWidth/3;
        const currentScrollLeft = slideRef.current.scrollLeft;
        const newScrollLeft = currentScrollLeft - scrollAmount
        slideRef.current.scrollTo({
            left:newScrollLeft,
            behavior: 'smooth'
        })
        if(slided > 1 && slided < 4){
            setSlided(slided-1)
            }
    }
   
    return(
        <div className="login">
            <div className="slider">
               <div className="indicators">
                <span>{slided ==1 ? "●":"o"}</span>
                <span>{slided ==2 ? "●":"o"}</span>
                <span>{slided ==3 ? "●":"o"}</span>
               </div>
               <button className="right-scroll-btn" onClick={handleRScroll}>▶</button>
               <button className="left-scroll-btn" onClick={handleLScroll}>◀</button>
              <div className="images"  ref={slideRef}>     
               <img src="/myself1.jpg" className="image1"></img>
               <img src="/myself2.jpg" className="image3"></img>
               <img src="/myself3.jpg" className="image2"></img>       
              </div>
            </div>
            <form className="login-form">
            { 
                loginError &&
                  <div className='error-msg'>Invalid password...      
                  <button className='error-msg-delete'
                          onClick={()=>setLoginError(false)}>❌</button>
                  </div>
                
            }
                <h1 style={{margin:0}}
                    className="logo">TRIPLES</h1>
                <p>Welcome to Triples...</p>
                <input value={email} className="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}></input>
                <input value={password} className="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input>
                <Link className="forgot-password">Forgotten password ? </Link>
                <button onClick={handleLogin}><Link to={ loged ? "/home" : ""} style={{color:"white"}}>Login</Link></button>
                
            </form>
        </div>
    )
}
export default Login