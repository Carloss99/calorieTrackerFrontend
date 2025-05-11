import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { apiUrl } from "../App"

const Register = () => {
    const [form,setForm] = useState({username: '',password:''})
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
            e.preventDefault()
            const res = await fetch(apiUrl+'/register',{
                method:'POST',
                headers:{'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            })
            console.log(res)
            if (res.ok) {
                navigate('/home')
            }

    }





    return(
       


        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="username" onChange={e=>setForm({...form, username:e.target.value})}/>
                <input type='password' onChange={e=>setForm({...form, password:e.target.value})}/>
                <input type='submit' />
            </form>
        </div>
    )
}

export default Register