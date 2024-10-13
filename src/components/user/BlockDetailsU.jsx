import { useParams } from "react-router-dom";
import '../style/blog-details.css';
import { useEffect, useState } from "react";
import axios from "../../axiosConfig";
import { Link } from 'react-router-dom';

const BlogDetailsU = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [showAlert, setShowAlert] = useState(false); // State for managing alert

    useEffect(() => {
        axios.get(`/homes/${id}`)
            .then(res => {
                setBlog(res.data);
            })
            .catch(error => {
                console.error('There was an error fetching the blog data!', error);
            });
    }, [id]);

    const addToCart = () => {
        axios.post(`/carts`, {
            productId: blog.id,
            title: blog.title,
            price: blog.price,
            capacity: blog.capacity,
            quantity: 1 // Adjust quantity as needed
        })
        .then(response => {
            console.log('Item added to cart:', response.data);
            setShowAlert(true); // Show alert on successful addition
            // Optionally, reset form fields or perform other actions
        })
        .catch(error => {
            console.error('Error adding item to cart:', error);
            // Handle error, show error message, etc.
        });
    };

    return (
        <div className="blog-details">
            {blog && (
                <article>
                <img src={blog.image} alt={blog.title} />
                <div className="content">
                    <Link to="/home"> <button className="close-button">×</button></Link>
                    <h4>{blog.title}</h4>
                    <div className="details-group">
                    <p>Roll No: {blog.id}</p> <br />
                    <p>LKR: {blog.price} per person</p> <br />
                    <p>Capable of accommodating {blog.capacity} people.</p><br />
                    <p>{blog.body}</p><br />
                    <p className="address">Located in {blog.address}</p>
                    </div>
                    {/* Alert */}
                    {showAlert && (
                    <div className="alert">
                        Item added to cart successfully!
                    </div>
                    )}
                </div>
                </article>
            )}
        </div>

    );
};

export default BlogDetailsU;
