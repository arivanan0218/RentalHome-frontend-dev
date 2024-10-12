// import { useParams, useHistory, Link } from "react-router-dom"; 
// import { useEffect, useState } from "react";
// import axios from '../../axiosConfig'; // Adjust the path as needed
// import '../style/blog-details.css';

// const BlogDetails = () => {
//     const { id } = useParams();
//     const [blog, setBlogs] = useState(null);
//     const history = useHistory();

//     useEffect(() => {
//         axios.get('/homes/' + id)
//             .then(res => {
//                 setBlogs(res.data);
//             })
//             .catch(error => {
//                 console.error('There was an error fetching the blog data!', error);
//             });
//     }, [id]);

//     const handleClick = () => {
//         axios.delete('/homes/' + blog.id)
//             .then(() => {
//                 history.push('/dashboard');
//             })
//             .catch(error => {
//                 console.error('There was an error deleting the blog!', error);
//             });
//     };

//     return ( 
//         <div className="blog-details">
//             {blog && (
//                 <article>
//                     {/* <img src={blog.image} alt={blog.title} /> */}
//                     <h4>{blog.title}</h4>
//                     <p>Price : {blog.price} per person</p>
//                     <p>Capacity : {blog.capacity}</p>
//                     <p className="address">{blog.address}</p>
//                     <p>{blog.body}</p>
//                     <div className="btn">
//                         <Link to={`/update/${blog.id}`} className="button">Edit</Link>
//                         <button className="button" onClick={handleClick}>Delete</button>
//                     </div>
//                 </article>
//             )}
//         </div>
//     );
// }

// export default BlogDetails;

import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../../axiosConfig'; // Adjust the path as needed
import '../style/blog-details.css';

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/homes/' + id)
            .then(res => {
                setBlog(res.data);
            })
            .catch(error => {
                console.error('There was an error fetching the blog data!', error);
            });
    }, [id]);

    const handleClick = () => {
        axios.delete('/homes/' + blog.id)
            .then(() => {
                navigate('/dashboard');
            })
            .catch(error => {
                console.error('There was an error deleting the blog!', error);
            });
    };

    return ( 
        <div className="blog-details">
            {blog && (
                <article>
                    {/* <img src={blog.image} alt={blog.title} /> */}
                    <h4>{blog.title}</h4>
                    <p>Price : {blog.price} per person</p>
                    <p>Capacity : {blog.capacity}</p>
                    <p className="address">{blog.address}</p>
                    <p>{blog.body}</p>
                    <div className="btn">
                        <Link to={`/update/${blog.id}`} className="button">Edit</Link>
                        <button className="button" onClick={handleClick}>Delete</button>
                    </div>
                </article>
            )}
        </div>
    );
};

export default BlogDetails;
