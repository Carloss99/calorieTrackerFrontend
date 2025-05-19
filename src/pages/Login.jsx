import {useState} from 'react'
import { setToken } from '../utils/auth'
import { apiUrl } from '../App'
import Home from './home'
import { useNavigate, Link } from 'react-router-dom'
import styles from './Login.module.css'


const Login = () => {
    const [form, setForm] = useState({username:'', password:''})
    const navigate = useNavigate()
    const [errMsg, setErrMsg] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrMsg('')

        let res;

        try{
            res = await fetch(apiUrl+'/login', {
            method: 'POST',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(form)})
            console.log(res)
            }

        catch{
            setErrMsg('failed to fetch')
            console.log(res)
        }

        const data = await res.json()
        if (res.ok){
            setToken(data.access_token)
            navigate('/home')
        }else {
            alert('Login Failed')
        }

    }






    return <div className={styles.loginContainer}>




        



        <form onSubmit={handleSubmit} className={styles.formstyle}>
                
            <h1>Log in</h1>


            <label className={styles.usernameContainer}>Username: <input placeholder='username' onChange = {e => setForm({...form, username:e.target.value})} /></label>
                

            <label className={styles.passwordContainer}>Password:<input placeholder='password' type='password' onChange= {e => setForm({...form, password:e.currentTarget.value})}/></label>
                




            <div style={{
                    width:'70%',
                    display:'flex',
                    justifyContent:'space-evenly'

                }}>


                <Link to='/register' style={{textDecoration: 'none'}}><button className={styles.Button}>Register</button></Link>

                <input type='submit' className={styles.Button}/>
            </div>
            

            
            
        </form>



    </div>
    
    
}

export default Login



// <div className={styles.formstyle}> {errMsg && <p style={{ color: 'red' }}>{errMsg}</p>}
