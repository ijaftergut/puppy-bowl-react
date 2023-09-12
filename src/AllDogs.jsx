import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from "axios"
import AddDogForm from './AddDogForm'
const AllDogs = () => {
    const [allDogs, setAllDogs]  = useState([])
    useEffect (()=>{
        async function fetchAllDogs(){
            const {data} = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players')
            console.log(data.data.players[0])
            setAllDogs(data.data.players)
        }
        fetchAllDogs()
    }, [])
    return (
        <div>
            <h1>All Dogs</h1>
            <AddDogForm/>
            {
                allDogs.map((dog, idx)=>{
                    return(
                        <div key={dog.id}>
                            <Link to={`/dogs/${dog.id}`}>{dog.name}</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default AllDogs