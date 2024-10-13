import React from 'react';
import './about.css';
import Image1 from "../../Images/about-firstImg.jpg";
import Image2 from "../../Images/content-img-1.jpg";
import Image3 from "../../Images/content-img-2.jpg";
import Image4 from "../../Images/last-image.jpg";
import Logo from "../../assets/icons/HomeLogo.png";

function About() {
    return (
        <>
            <div className='about-page'>

                {/*Header-text*/}
                <div className='about-header'>
                <h2>Rental Home,<br/>A Place to Call Your Own</h2>

                </div>

                {/*First-Image*/}
                <div className='about-firstImage'>
                    <div className='image-container'>
                        <img src={Image1} alt="about-firstImg" width="1240px" height="auto" />
                        <img src={Logo} alt="logo-1" className='logo-overlay' />
                        <div className='hover-overlay'>
                            <div className='hover-overlay-text'>
                            <h3>A Commitment to Quality</h3>
                            <p className='desktop-only'>Our dedicated team is here to ensure that your rental experience exceeds expectations. We pride ourselves on our exceptional service, 
                                offering a variety of accommodations that cater to your needs. From the moment you book to your departure, we guarantee a seamless experience, 
                                providing a home away from home that you can trust.
                            </p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="small-img-container">
                    {/*image with text 01*/}
                <div className='about-content-section-1'>
                    <div className='text-content-1'>
                    <p className='desktop-only'>
                        Rental Home is your trusted partner in providing exceptional accommodations. 
                        Our diverse portfolio features a wide range of rental options, each designed to meet the highest standards of comfort and quality. 
                        Our commitment to outstanding service ensures that every stay is memorable and enjoyable, whether you're here for a short visit or an extended stay.
                    </p>

                        {/* <p className='mobile-only'>Grace Construction is known for quality and reliability. We complete projects on time with high standards of craftsmanship and innovation.</p> */}
                    </div>
        
                    <div className='img-content-1'>
                        <div className='image-container'>
                            <div className="desktop-only">
                                 <img src={Image2} alt="img-1" width="362px" height="368px" />
                            </div>

                            {/* <div className="mobile-only">
                                <img src={Image2} alt="img-1" width="166.5px" height="170px" />
                            </div> */}
                            
                            <img src={Logo} alt="logo-1" className='logo-overlay1' />
                            <div className='hover-overlay'>
                                <div className='hover-overlay-text'>
                                <h2>Experience<br /> the Comfort</h2>
                                <p className='desktop-only'>
                                    Discover the difference that exceptional service and quality accommodations can make. Let us provide you with a stay 
                                    that is comfortable, convenient, and tailored to your needs.
                                </p>

                                    {/* <p className='mobile-only'>Grace Construction is known for quality and reliability. </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*image with text 02*/}
                <div className='about-content-section-2'>
                    <div className='img-content-2'>
                        <div className='image-container'>
                            <div className="desktop-only">
                                <img src={Image3} alt="img-2" width="362px" height="368px" />
                            </div>
                            {/* <div className="mobile-only">
                                <img src={Image3} alt="img-2" width="166.5px" height="169.26px" />
                            </div> */}
                            <img src={Logo} alt="logo-1" className='logo-overlay2' />
                            <div className='hover-overlay'>
                                <div className='hover-overlay-text'>
                                <h2>Experience<br /> the Comfort</h2>
                                <p className='desktop-only'>Experience the comfort of our rental services, where quality, convenience, and guest satisfaction are our top priorities.</p>

                                    {/* <p className='mobile-only'>Grace Construction is known for quality and reliability. </p> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='text-content-2'>
                    <p className='desktop-only'>
                        At Rental Home, we believe in providing more than just accommodations; we create experiences. Our guests trust us to deliver exceptional service, and we take that trust seriously. 
                        We prioritize open communication and collaboration, ensuring that your needs and expectations are not only met but exceeded. 
                        Our commitment to guest satisfaction is at the core of everything we do, driving us to continually innovate and enhance your stay.
                    </p>

                        {/* <p className='mobile-only'>We build relationships, not just structures. Clients trust us for exceptional results. We prioritize communication and customer satisfaction.</p> */}
                    </div>
                </div>
                </div>

                

                {/*last-image*/}
                <div className='last-image'>
                    <div className='image-container'>
                        <img src={Image4} alt="last-img" width="1440px" height="auto" />
                        <img src={Logo} alt="logo-1" className='logo-overlay3' />
                        <div className='hover-overlay'>
                            <div className='hover-overlay-text'>
                            <h3>A Commitment to Quality</h3>
                            <p className='desktop-only'>
                                At Rental Home, we pride ourselves on a commitment to quality. For years, we have been dedicated to delivering exceptional service, 
                                comfortable accommodations, and outstanding experiences for every guest. Our dedicated team ensures that every detail is meticulously handled, 
                                from the booking process to your departure.
                            </p>
                            <br />
                            <p className='desktop-only'>
                                We prioritize guest satisfaction, safety, and sustainability, consistently exceeding expectations. Our reputation is built on trust, reliability, 
                                and an unwavering commitment to quality. Whether it's a short-term stay or a long-term rental, we strive to provide a home away from home, 
                                creating experiences that last a lifetime.
                            </p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About;
