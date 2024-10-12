// import axios from '../../axiosConfig';
// import '../style/home.css'
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const DashBoard = () => {

//     const [blogs, setBlogs] = useState([]);

//         useEffect(() => {
//             axios.get('/homes')
//                 .then(res => {
//                     setBlogs(res.data); 
//                 })
//                 .catch(error => {
//                     console.error('Error fetching data:', error);
//                 });
//         }, []);

//     return ( 
//         <div className="home">
//             <div className="heading">
//                 <h1>Find Your Home Right Now...</h1>
//                 <p>Finding your own house blends excitement and careful planning, balancing budget, location,</p> 
//                 <p>and amenities to discover your perfect home.</p>
//             </div>

//             <div className="blog-list">
//                     {blogs.map((blog) => 
//                         <Link to= {`/blogs/${blog.id}`}>
//                             <div className="blog-card" key={blog.id}>
//                                 <div className="img-container">
//                                  <img src={blog.image} alt={blog.title} />
//                                 </div>
                                
//                                 <h4>{blog.title}</h4>
//                                 <p>Price : {blog.price} per person</p>
//                                 <p>Capacity : {blog.capacity} </p>
//                                 <p>{blog.address}</p>
                                
//                             </div>
//                         </Link>
//                     )}
//             </div>

//         </div>
//      );
// }
 
// export default DashBoard;

/////////////////////

import axios from '../../axiosConfig';
import '../style/home.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DashBoard = () => {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                console.log("Token:", token); // Log the token to check its value

                if (!token) {
                    console.error('No token found. Redirecting to login.');
                    navigate('/login');
                    return;
                }

                // Make the authorized request
                const response = await axios.get('/homes');
                setBlogs(response.data);
            } catch (error) {
                if (error.response) {
                    console.error('Error fetching data:', error.response.data); // Log server response data
                    console.error('Status Code:', error.response.status); // Log status code
                } else {
                    console.error('Request error:', error.message); // Log error message
                }

                if (error.response && error.response.status === 401) {
                    console.error('Unauthorized. Redirecting to login.');
                    navigate('/login');
                }
            }
        };

        fetchData();
    }, [navigate]);

    return ( 
        <div className="home">
            <div className="heading">
                <h1>Find Your Home Right Now...</h1>
                <p>Finding your own house blends excitement and careful planning, balancing budget, location,</p> 
                <p>and amenities to discover your perfect home.</p>
            </div>

            <div className="blog-list">
                {blogs.map((blog) => 
                    <Link to={`/blogs/${blog.id}`} key={blog.id}>
                        <div className="blog-card">
                            <div className="img-container">
                                <img src={blog.image} alt={blog.title} />
                            </div>
                            
                            <h4>{blog.title}</h4>
                            <p>Price : {blog.price} per person</p>
                            <p>Capacity : {blog.capacity}</p>
                            <p>{blog.address}</p>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default DashBoard;
