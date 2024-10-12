import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/create.css'
import axios from '../../axiosConfig';

const Create = () => {
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [capacity, setCapacity] = useState('');
    const [price, setPrice] = useState('');
    const [body, setBody] = useState('');
    const [address, setAddress] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newHome = { image, title, price, capacity, body, address };

        setIsPending(true);

        axios.post('/homes', newHome)
            .then(() => {
                console.log('New Home Added');
                setIsPending(false);
                navigate('/dashboard');
            })
            .catch(error => {
                setIsPending(false);
                console.error('Error adding new home:', error);
            });
    };

    return (
        <div className="create">
            <div className="create-container">
                <h1>HOME</h1>
                <form onSubmit={handleSubmit}>

                    <input 
                        type="text"
                        placeholder='Enter the name of the home'
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <input 
                        type="text"
                        placeholder='Enter the image URL'
                        required
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />

                    <input 
                        type="number"
                        placeholder='Enter the price of the home'
                        required
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />

                    <input 
                        type="number"
                        placeholder='Enter the capacity of the home'
                        required
                        value={capacity}
                        onChange={(e) => setCapacity(e.target.value)}
                    />

                    <textarea
                        placeholder='Enter the description of the home'
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>

                    <input 
                        type="text"
                        placeholder='Enter the address of the home'
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    {!isPending && <button>Add Home</button>}
                    {isPending && <button disabled>Adding Home...</button>}
                </form>

            </div>
            
            
        </div>
    );
};

export default Create;
