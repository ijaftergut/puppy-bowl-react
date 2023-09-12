import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
const AddDogForm = () => {
    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    async function handleSubmit(e) {
        e.preventDefault();
    
        try {
            const response = await axios.post(
                'https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players',
                {
                    name,
                    breed,
                }
            )
            const newDog = await response.data
            console.log('New Dog:', newDog)
        } catch (error) {
            console.error('Error adding dog:', error)
        }
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <label>
                <input
                    value={name} 
                    type="text"
                    name="name"
                    placeholder="Enter Name Here"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    value={breed} 
                    type="text"
                    name="breed"
                    placeholder="Enter Breed Here"
                    onChange={(e) => setBreed(e.target.value)}
                />

                </label>

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}
export default AddDogForm


