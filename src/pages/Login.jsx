import {useState} from 'react'
import { setToken } from '../utils/auth'
import { apiUrl } from '../App'
import Home from './home'
import { useNavigate, Link } from 'react-router-dom'


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



    return <div> {errMsg && <p style={{ color: 'red' }}>{errMsg}</p>}
        <form onSubmit={handleSubmit}>
            <input placeholder='username' onChange = {e => setForm({...form, username:e.target.value})} />
            <input placeholder='password' type='password' onChange= {e => setForm({...form, password:e.currentTarget.value})}/>
            <input type='submit'/>

            <Link to='/register'><button>Register</button></Link>

            
            
        </form>
        </div>
    
    
}

export default Login



