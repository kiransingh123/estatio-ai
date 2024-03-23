import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../common/Footer.jsx';
import Banner from './Banner.jsx';
import Service from './Service.jsx';
import Trainding from './Trainding.jsx';
import Testimonial from './Testimonial.jsx';
import emailjs from '@emailjs/browser';

export default function Home() {
	// const home = useRef();
	const about = useRef();
	const demo = useRef();
	const contact = useRef();
	const scrollHandler = (elmRef) => {
		window.scrollTo({top:elmRef.current.offsetTop, behavior:"smooth"})
	}
	const form = useRef();

	/* Email send code */
	const sendEmail = (e) => {
		console.log('Hi inisiate');
		e.preventDefault();
		emailjs
		  .sendForm('service_yixue8e', 'template_yxst9ay', form.current, {
			publicKey: 'oR3TdsAG1A6w_eqDl',
		  })
		  .then(
			() => {
				  console.log('SUCCESS!');
				  
			},
			(error) => {
			  console.log('FAILED...', error.text);
			},
		  );
	  };
  return (
	  <>
		{/* Header section */}
		<header id="header" className="header fixed-top">
			<div className="container-fluid ">
				<div className="row">
					<div className="col-lg-2">
					<Link to="/" className="logo d-flex align-items-center"><img src="assets/img/img_new/new_log.png" alt="" /></Link>    
					</div>
					<div className="col-lg-7">
						<nav id="navbar" className="navbar mt-4 justify-content-between">
							<ul>
							<li><Link to="/" className="nav-link scrollto active">HOME</Link></li>
							<li onClick={()=>scrollHandler(about)}><Link to="/" className="nav-link scrollto ">ABOUT</Link></li>
							<li onClick={()=>scrollHandler(demo)} ><Link to="/" className="nav-link scrollto ">DEMO</Link></li>
							<li onClick={()=>scrollHandler(contact)}><Link to="/" className="nav-link scrollto ">CONTACT</Link></li>
							<li><Link to="/"><img src="assets/img/black-line.png" className='header-menu' /></Link></li>
							</ul>
							<i className="bi bi-list mobile-nav-toggle"></i>
						</nav>
					</div>
					<div className="col-lg-3">
						<div className="socialicon mt-4 header-social"  >
							<ul>
								<li> <Link to="/"><i className="fa fa-facebook"></i></Link></li>
								<li> <Link to="/"><i className="fa fa-twitter"></i></Link></li>
								<li> <Link to="/"><i className="fa fa-linkedin"></i></Link></li>
								<li> <Link to="/"><i className="fa fa-instagram"></i></Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
		{/* Banner section  */}
		<Banner />
		<main id="main">
		{/* About section */}
		<section id="about" className="about" ref={about}>
		   <div className="container-fluid">
			  <div className="row">
				<div className="col-lg-7" >
					<div className="content">
                        <h3>about us</h3>
                        <h2>Estatio revolutionizing the rental search experience !</h2>
                        <p>
						Welcome to Estatio, where we're rewriting the rules of rental searches. Gone are the days of drowning in endless listings, unsure where to turn next. Our journey began with a simple realization: the current process is broken. From the stress of navigating numerous listings to the frustration of limited comparison options, renters like you deserve more.
						<br />
						That's why we're here. Estatio harnesses the power of cutting-edge AI to streamline your rental search experience. Say goodbye to wasted time and energy – our personalized recommendations, driven by AI, ensure that every property you encounter aligns perfectly with your preferences. But we don't stop there. With our intuitive chatbot as your personal assistant, finding your dream rental is easier than ever before.
						<br />
						But that's not all. At Estatio, we're not content with just scratching the surface. We're pioneering a new era of rental comparisons, going beyond mere pricing to provide comprehensive insights into each property. Join us at Estatio and discover a smarter, simpler way to find your next home.

                        </p>
                        <div className="leftsection">
                            <div className="borderwe">
                                <p>AI</p>
                            </div>
                            
                            <div className="year">
                                    <span>Rental<br />Search<br />Technology</span>
                            </div>
                        
                        </div>
				    </div>
                </div>
                {/* <div className="col-lg-5 " data-aos="zoom-out" data-aos-delay="200"> */}
                <div className="col-lg-5 " >
                    <div className="rightimg">
                    <img src="assets/img/img_1.jpg" className="img-fluid hover03" alt="" />
                </div>
                </div>
			  </div>
		   </div>
		</section>
		{/* Service section */}
		<Service />
       {/* Demo section */}
		<section id="features" className="features about" ref={demo}>
			<div className="container-fluid aos-init aos-animate" data-aos="fade-up">
				<div className="row feture-tabs" >
					<div className="col-lg-7 bgright_demo ">
						<div className="content ">
						<h2 className="demo-title" >Embark on a Journey with Estatio</h2>
						<p>
						Experience rental hunting like never before with Estatio. Our chatbot interface transforms frustration into ease, prioritizing your preferences and tailoring your rental journey to perfection. Discover the magic of AI-driven recommendations as our finely-tuned chatbot guides you through options that align seamlessly with your needs.
						<br />
						Our demo offers a tantalizing glimpse into the future of rental search with Estatio.AI. While providing a taste of the effortless experience to come, please note that data accuracy and completeness may vary in this demonstration. However, envision a platform where a chatbot not only presents options but also showcases images, videos, and interactive interfaces. 
						{/* Imagine seamlessly comparing rentals based on various metrics beyond pricing. With Estatio this future is within reach. Sign up now for our full-featured beta and be part of the rental revolution! */}
						</p>
						
						</div>
					</div>
					<div className="col-lg-5">
						{/* <img src="assets/img/img_6.jpg" className="img-fluid hover03 feature-about" alt="" /> */}
						{/* <iframe
		src="https://estatio.streamlit.app/?embed=true"
		height="546px"
		style={{ width: "100%", border: "none" }}
		></iframe> */}
					</div>
				</div>
			</div>
		</section>
		{/* Contat section */}
		<section id="contact" className="contact" ref={contact}>
				  <div className="container" >
				  <form ref={form} onSubmit={sendEmail} className="php-email-form">
			<div className="row gy-4">
				<div className="col-lg-9">
				<h1 className="form-heading">Register for Beta</h1>
					
					<div className="row gy-4">
						<div className="col-md-6">
							<input type="text" name="user_name" className="form-control" placeholder="Your Name"  />
						</div>
						<div className="col-md-6 ">
							<input type="email" className="form-control" name="user_email" placeholder="Your Email"  />
						</div>
						<div className="col-md-12">
							<textarea className="form-control" name="message" rows="3" placeholder="Feedback and Suggestions"></textarea>
						</div>
					</div>
					
				</div>
				<div className="col-lg-3 register-button" >
				<button className="learn-more" type='submit'>Register </button>
			</div>
					  </div>
					  </form>
		</div>
		</section>
		{/* Tranding */}
		<Trainding />
		{/* Testimonial */}
		<Testimonial />
		
    </main>
   <Footer />
   </>
  )
}
