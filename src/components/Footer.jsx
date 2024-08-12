import { Link } from "react-router-dom"
import logo from '../images/logo-removebg-preview.png'
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
const Footer = () => {
    return (
        <div className="footer">
            <div className="container footer-container">

                <article>
                    
                    <Link to="/"><img src={logo} alt=""  className="logo"/></Link>
                    
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde natus facere, provident maxime illum sit? Facilis et voluptatibus corporis pariatur, illo iusto cumque eaque aliquam debitis, eos tempora quisquam?

                    </p>
                    <div className="socials">
                        <a href="https://linked.com/" target="blank">< CiLinkedin/></a>
                        <a href="https://facebook.com/" target="blank"><  CiFacebook/></a>
                        <a href="https://instagram.com/" target="blank">< CiInstagram/></a>
                        <a href="https://twitter.com/" target="blank">< CiLinkedin/></a>
                    </div>
                </article>

                <article>
                    <h4>Permalinks</h4>
                    <Link to="/about">About</Link>
                    <Link to="/plan">Plans</Link>
                    <Link to="/trainers">Plan</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/contact">Contact</Link>
                </article>

                
                <article>
                    <h4>Insights</h4>
                    <Link to="/about">Blog</Link>
                    <Link to="/plan">Case Studies</Link>
                    <Link to="/trainers">Event</Link>
                    <Link to="/gallery">Our Community</Link>
                    <Link to="/contact">FAQs</Link>
                </article>


                
                <article>
                    <h4>Get in Touch</h4>
                    <Link to="/about">Contact Us</Link>
                    <Link to="/plan">Support</Link>
                      
                </article>
            </div>
<hr />
            <div className="footer-copyright">
                    <small>2024 GTTECH &copy; All Aright Reserved</small>
            </div>
        </div>



    )
}

export default Footer