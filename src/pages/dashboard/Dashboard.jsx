import axios from '../../axiosConfig';
import { useNavigate, Link } from "react-router-dom"; 
import React, { useEffect, useState } from 'react';
import Add from "../../assets/icons/Add.png";
import Home from "../../assets/icons/Home.com.png"
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('/homes')
      .then(res => {
        setBlogs(res.data); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleClick = (id) => {
    axios.delete(`/homes/${id}`)
      .then(() => {
        setBlogs(blogs.filter(blog => blog.id !== id));
        navigate('/dashboard');
      })
      .catch(error => {
        console.error('There was an error deleting the blog!', error);
      });
  };

  return (
    <div className="travel">
      <div className="travel-container-top">
      <Link to="/home">
        <button>
          <img src={Home} alt="Add" />
        </button>
        </Link>
        <h1 className="title">
          Add My Own <span>Homes</span>
        </h1>
        <Link to="/create">
        <button>
          <img src={Add} alt="Add" />
        </button>
        </Link>
      </div>
      <div className="travel-container">
        {blogs.map((blog) => (
          <li className='traveler' key={blog.id}>
            <img className="traveler-profilePic" src={blog.image} alt={blog.title} />
            <div className="traveler-details">
              <h2>{blog.title}</h2>
              <div className="place">
                <div className="heading">
                  <p>Price </p>
                  <p>Address</p>
                </div>
                <div className="details">
                  <p>{blog.price}</p>
                  <p>{blog.address}</p>
                </div>
              </div>
            </div>
            <div className="button">
              {/* <Link to={`/blogs/${blog.id}`}> */}
              <Link to={`/update/${blog.id}`}>
                <button className="actionButton">Edit Me</button>
                
              </Link>
              <button className="messageButton" onClick={() => handleClick(blog.id)}>Delete Me</button>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
