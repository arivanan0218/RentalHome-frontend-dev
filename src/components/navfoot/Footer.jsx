import { Link } from "react-router-dom";
import Logo from "../../assets/icons/HomeLogo.png"
import '../style/footer.css'

const Footer = () => {
    return ( 
        <div className="footer-main">
        <div className="footer">
            <div className="logo">
                {/* <h1>HOME</h1> */}
                <img src={Logo} alt="Logo" className="signin-logo" />
                <p>Search your boarding here</p>
            </div>
            <div className="main-links">
                <div className="location">
                    <h2>Location</h2>
                    <Link to="">University of Ruhuna,<br />
                    Galle.</Link>
                </div>

                <div className="links">
                    <h2>Links</h2>
                    <Link to="">About us</Link>
                    <Link to="">Services</Link>
                    <Link to="">News</Link>
                    <Link to="">Contact us</Link>
                </div>

                <div className="legal">
                    <h2>Legal</h2>
                    <Link to="">Privacy Policy</Link>
                    <Link to="">Terms of Conditions</Link>
                </div>
            </div>
            
        </div>
        <div className="copyright">Copyright © 2024 All Rights Reserved.</div>
        </div>
        
     );
}
 
export default Footer;