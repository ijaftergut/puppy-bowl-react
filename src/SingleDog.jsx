import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SingleDog = () => {
    const [dog, setDog] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        async function fetchPost() {
            try {
                const response = await axios.get(`https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players`);
                const players = response.data.data.players;
                console.log(players); // Log the data here to check if it's correct
                const singleDog = players.find(player => player.id*1 === id*1);
                setDog(singleDog);
                console.log(dog)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchPost();
    }, [id])
    
    return (
        <div>
            <h1>Single Post</h1>
            {dog && (
                <div>
                    <h2>Name: {dog.name}</h2>
                    <p>Breed: {dog.breed}</p>
                    {/* Add more properties you want to display */}
                </div>
            )}
        </div>
    );
};

export default SingleDog;
