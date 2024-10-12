// import { useParams } from "react-router-dom";
// import '../style/blog-details.css';
// import { useEffect, useState } from "react";
// import axios from "../../axiosConfig";


// const BlogDetailsU = () => {
//     const { id } = useParams();
//     const [blog, setBlogs] = useState(null);

//     useEffect(() => {
//         axios.get('/homes/' + id)
//             .then(res => {
//                 setBlogs(res.data);
//             })
//             .catch(error => {
//                 console.error('There was an error fetching the blog data!', error);
//             });
//     }, [id]);

//     return (
//         <div className="blog-details">
//             {blog && (
//                 <article>
//                     {/* <img src={blog.image} alt={blog.title} /> */}
//                     <h4>{blog.title}</h4>
//                     <p>Price : {blog.price} per person</p>
//                     <p>Capacity : {blog.capacity} </p>
//                     <p>{blog.body}</p>
//                     <p className="address">{blog.address}</p>
//                 </article>
//             )}
//         </div>
//     );
// };

// export default BlogDetailsU;


// import { useParams } from "react-router-dom";
// import '../style/blog-details.css';
// import { useEffect, useState } from "react";
// import axios from "../../axiosConfig";

// const BlogDetailsU = () => {
//     const { id } = useParams();
//     const [blog, setBlog] = useState(null);

//     useEffect(() => {
//         axios.get(`/homes/${id}`)
//             .then(res => {
//                 setBlog(res.data);
//             })
//             .catch(error => {
//                 console.error('There was an error fetching the blog data!', error);
//             });
//     }, [id]);

//     const addToCart = () => {
//         axios.post(`/carts`, {
//             productId: blog.id,
//             title: blog.title,
//             price: blog.price,
//             capacity: blog.capacity,
//             quantity: 1 // Adjust quantity as needed
//         })
//         .then(response => {
//             console.log('Item added to cart:', response.data);
//             // Optionally, show a success message or update UI
//         })
//         .catch(error => {
//             console.error('Error adding item to cart:', error);
//             // Handle error, show error message, etc.
//         });
//     };

//     return (
//         <div className="blog-details">
//             {blog && (
//                 <article>
//                     {/* <img src={blog.image} alt={blog.title} /> */}
//                     <h4>{blog.title}</h4>
//                     <p>Price : {blog.price} per person</p>
//                     <p>Capacity : {blog.capacity} </p>
//                     <p>{blog.body}</p>
//                     <p className="address">{blog.address}</p>
//                     <button onClick={addToCart}>Add to Cart</button>
//                 </article>
//             )}
//         </div>
//     );
// };

// export default BlogDetailsU;


import { useParams } from "react-router-dom";
import '../style/blog-details.css';
import { useEffect, useState } from "react";
import axios from "../../axiosConfig";

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
                    {/* <img src={blog.image} alt={blog.title} /> */}
                    <h4>{blog.title}</h4>
                    <p>ID: {blog.id}</p>
                    <p>Price : {blog.price} per person</p>
                    <p>Capacity : {blog.capacity} </p>
                    <p>{blog.body}</p>
                    <p className="address">{blog.address}</p>
                    <button onClick={addToCart}>Add to Cart</button>

                    {/* Alert */}
                    {showAlert && (
                        <div className="alert">
                            Item added to cart successfully!
                        </div>
                    )}
                </article>
            )}
        </div>
    );
};

export default BlogDetailsU;

//testing