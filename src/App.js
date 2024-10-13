// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/navfoot/Navbar';
// import Footer from './components/navfoot/Footer';
// import Home from "./components/admin/DashBoard";
// import Create from "./components/admin/Create";
// import HomeU from "./components/user/HomeU";
// import BlogDetailsU from './components/user/BlockDetailsU';
// import BlogDetails from './components/admin/BlogDetails';
// import Update from "./components/admin/Update";
// import LandingPage from './pages/landingPage/LandingPage';
// import DashBoard from './components/admin/DashBoard';
// import Dashboard from './pages/dashboard/Dashboard';
// import Header from './components/navbar/Header';
// import { useState } from 'react';
// import PrivateRoute from './PrivateRoute';
// import Login from './Login';


// const App = () => {

//     const [userType, setUserType] = useState(null);

//     useState(() => {
//         // This should be set based on your actual authentication logic
//         setUserType('ROLE_USER');
//     }, []);

//     return (  
     
//         <Router>
//             <div className="App">
//                 <Header userType={userType}/>
//                 <div className="content">
//                     <Routes>
//                         <Route path="/" element={<Login />} />
//                         <Route exact path="/landingpage" element={<LandingPage />} />
//                         <Route exact path="/home" element={<HomeU />} />
//                         <Route path="/create" element={<Create />} />
//                         <Route path="/blogs/:id" element={<BlogDetails />} />
//                         <Route path="/home/blogs/:id" element={<BlogDetailsU />} />
//                         <Route path="/update/:id" element={<Update />} />

//                         <Route
//                          path="/dashboard" 
//                          element={
//                                 <PrivateRoute>
//                                     <Dashboard />
//                                 </PrivateRoute>
//                             }
//                           />
//                         {/* <Route path='/signup' element={<Signup />} />
//                         <Route path='/login' element={<Login />} /> */}
//                     </Routes>
//                 </div>
//                 <Footer />
//             </div>
//         </Router>
//     );
// };

// export default App;

// //Testing

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/navfoot/Navbar';
import Footer from './components/navfoot/Footer';
import Home from "./components/admin/DashBoard";
import Create from "./components/admin/Create";
import HomeU from "./components/user/HomeU";
import BlogDetailsU from './components/user/BlockDetailsU';
import BlogDetails from './components/admin/BlogDetails';
import Update from "./components/admin/Update";
import LandingPage from './pages/landingPage/LandingPage';
import Dashboard from './pages/dashboard/Dashboard';
import Header from './components/navbar/Header';
import { useState } from 'react';
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import Signup from './Signup';
import Logout from './Logout';
import About from './pages/AboutPage/About';
import ScrollToTop from './ScrollToTop';

const App = () => {
    const [userType, setUserType] = useState(null);
    
    useState(() => {
        // This should be set based on your actual authentication logic
        setUserType('ROLE_USER');
    }, []);

    const location = useLocation(); // Get the current location

    return (  
        <div className="App">
            {/* Conditionally render Header based on the route */}
            {/* {location.pathname !== '/dashboard' && <Header userType={userType} />} */}
            {location.pathname !== '/dashboard' && location.pathname !== '/'  && location.pathname !== '/login' && location.pathname !== '/signup' && !location.pathname.startsWith('/home/blogs/')  && <Header userType={userType} />}
            <ScrollToTop />
            <div className="content">
                <Routes>
                    <Route path='/signup' element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route exact path="/" element={<LandingPage />} />
                    <Route exact path="/home" element={<HomeU />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/blogs/:id" element={<BlogDetails />} />
                    <Route path="/home/blogs/:id" element={<BlogDetailsU />} />
                    <Route path="/update/:id" element={<Update />} />
                    <Route path='/about'    element={<About />} />
                    {/* <Route path='/contact' element={<ContactPage />} /> */}
                    <Route
                        path="/dashboard" 
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                    />
                    {/* <Route path='/signup' element={<Signup />} />
                    <Route path='/login' element={<Login />} /> */}
                </Routes>
            </div>
            {location.pathname !== '/dashboard' && location.pathname !== '/' && location.pathname !== '/login' && location.pathname !== '/signup' && !location.pathname.startsWith('/home/blogs/')  && <Footer userType={userType} />}
        </div>
    );
};

// Wrap your App component with Router in a separate component
const AppWithRouter = () => (
    <Router>
        <App />
    </Router>
);

export default AppWithRouter;
