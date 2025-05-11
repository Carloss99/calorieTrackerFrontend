import { apiUrl } from "../App"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getToken } from "../utils/auth"


const Home = () => {
    const [foods, setFoods] = useState([])
    const [newFood, setNewFood] = useState([])
    const navigate = useNavigate()

    //fetches foods
    const getFoods = async() =>{
        const res = await fetch(apiUrl + '/foods', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        });

        if(res.ok) {
            const data = await res.json()
            setFoods(data)
            console.log(data)
        }else{
            navigate('/')
        }

    }


    //adds food to database
    const addFood = async (e) => {
        e.preventDefault()
        const res = await fetch(apiUrl+'/foods', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${getToken()}`
            },
            body: JSON.stringify(newFood)
        })
        if(res.ok) {
            setNewFood({})
            getFoods()
        }else {
            const error = await res.json()
            console.error('failed to add', error)
        }
        setNewFood([])
        getFoods()
    }

    useEffect(()=> {
        getFoods()
    },[])
    
    return <div>
        <h1>Your Intake</h1>
        <ul>
            {foods.map(f => (<li id={f.id}>{f.calories}</li>))}
        </ul>


        <form onSubmit={addFood}>

            <h5>Name: </h5>
            <input onChange={(e)=> setNewFood({...newFood, food_name:e.target.value })}/>

            <h5>Calories: </h5>
            <input type='number' onChange={(e)=> setNewFood({...newFood, calories:parseInt(e.target.value) })}/>

            <h5>Protien: </h5>
            <input type='number' onChange={(e)=> setNewFood({...newFood, protien:parseInt(e.target.value) })}/>

            <h5>Carbs: </h5>
            <input type='number' onChange={(e)=> setNewFood({...newFood, carbs:parseInt(e.target.value) })}/>

            <h5>Fat: </h5>
            <input type='number' onChange={(e)=> setNewFood({...newFood, fat:parseInt(e.target.value) })}/>

            <h5>Date: </h5>
            <input type='date' onChange={(e)=> setNewFood({...foods, date:e.target.value })}/>
            <br/>
            <input type='submit' value='Add Food'/>







        </form>
    </div>
    
}

export default Home
