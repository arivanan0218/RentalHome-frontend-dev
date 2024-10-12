import { Link } from 'react-router-dom';
import '../style/home.css'
import { useEffect, useState } from 'react';
import '../style/bloglist.css'
import axios from '../../axiosConfig';

const HomeU = () => {

    const [blogs, setBlogs] = useState([]);

        useEffect(() => {
            axios.get('/homes')
                .then(response => {
                    setBlogs(response.data); 
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }, []);

    return ( 
        <div className="home">
            <div className="heading">
                <h1>Find Your Home Right Now...</h1>
                <p>Finding your own house blends excitement and careful planning, balancing budget, location,</p> 
                <p>and amenities to discover your perfect home.</p>
            </div>
            
            <div className="blog-list">
                    {blogs && blogs.map((blog) => 
                        <Link to= {`/home/blogs/${blog.id}`}>
                            <div className="blog-card" key={blog.id}>
                                <div className="img-container">
                                 <img src={blog.image} alt={blog.title} />
                                </div>
                                
                                <h4>{blog.title}</h4>
                                <p>Price : {blog.price} per person</p>
                                <p>Capacity : {blog.capacity} </p>
                                <p>{blog.address}</p>
                            </div>
                        </Link>
                    )}
        </div>

        </div>
     );
}
 
export default HomeU;