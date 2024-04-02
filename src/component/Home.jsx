import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
// import Footer from '../common/Footer.jsx';
import Service from './Service.jsx';
import Trainding from './Trainding.jsx';
import Testimonial from './Testimonial.jsx';
import emailjs from '@emailjs/browser';
import ReactPlayer from 'react-player'
import LoadVideo from '../assets/banner_2_mp.mp4';
import Logo from '../assets/new_log.png';

export default function Home() {
	const home = useRef();
	const about = useRef();
	const demo = useRef();
	const contact = useRef();
	const scrollHandler = (elmRef) => {
		window.scrollTo({top:elmRef.current.offsetTop, behavior:"smooth"})
	}
	const form = useRef();

	/* Email send code */
	const sendEmail = (e) => {
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
		<header  id="header" className="header fixed-top">
			<div className="container-fluid ">
				<div className="row">
					<div className="col-lg-2">
					<Link to="/" className="logo d-flex align-items-center"><img src={Logo} alt="" /></Link>    
					</div>
					<div className="col-lg-7">
						<nav id="navbar" className="navbar mt-5 justify-content-between">
							<ul>
							<li onClick={()=>scrollHandler(home)}><Link to="/" className="nav-link scrollto active">HOME</Link></li>
							<li onClick={()=>scrollHandler(about)}><Link to="/" className="nav-link scrollto ">ABOUT</Link></li>
							<li onClick={()=>scrollHandler(demo)} ><Link to="/" className="nav-link scrollto ">DEMO</Link></li>
							<li onClick={()=>scrollHandler(contact)}><Link to="/" className="nav-link scrollto ">CONTACT</Link></li>
							</ul>
							<i className="bi bi-list mobile-nav-toggle"></i>
						</nav>
					</div>
					<div className="col-lg-3">
						<div className="socialicon mt-5 header-social"  >
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
		<section ref={home} id="hero" className=" d-flex align-items-center">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-12">
				<div id="carouselExampleCaptions" className="carousel slide">				
				 <div className="carousel-inner">
				   <div className="carousel-item active">
					<ReactPlayer
						className="d-block w-100"
						url={LoadVideo}
						width='100%'
						height='100%'
						controls={true}
						loop={true}
						muted={false}
						// playing={true}
					/>
					 <div className="carousel-caption d-flex flex-column h-100 align-items-center justify-content-center bottom-0">
					   <p className="bg-dark bg-opacity-50 py-2 px-4">Finding a place to rent with the power of Data and AI !</p>
					 </div>
				   </div>
				 </div>
			   </div>
				</div>
			</div>
	   </div>
   </section>
		<main id="main">
		{/* About section */}
		<section id="about" className="about" ref={about}>
		   <div className="container-fluid">
			  <div className="row about-tabs">
				<div className="col-lg-7" >
					<div className="content">
						
                        <h2>Estatio revolutionizing the rental search experience !</h2>
                        <p>
						Welcome to Estatio, where we're rewriting the rules of rental searches. Our journey began with a
simple realization: the current process is broken. From the stress of navigating numerous listings to
the frustration of limited comparison options, renters like you deserve more. Estatio harnesses the
power of cutting-edge AI to streamline your rental search experience. Say goodbye to wasted time
and energy – our personalized recommendations, driven by AI, ensure that every property you
encounter aligns perfectly with your preferences.
						<br />
						But that's not all. At Estatio, we're pioneering a new era of rental comparisons, going beyond mere
pricing to provide comprehensive insights into each property. Join us at Estatio and discover a
smarter, simpler way to find your next home.

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
						<h2 className="demo-title topspace">Embark on a Journey with Estatio</h2>
						<p>
						Experience rental hunting like never before with Estatio. Our chatbot interface transforms frustration
into ease, prioritizing your preferences and tailoring your rental journey perfectly. Discover AI-driven
recommendations as our chatbot guides you through options that align seamlessly with your needs.
						<br />
						Our demo offers a glimpse into the future of rental search with Estatio. While providing a taste of the
effortless experience to come, please note that data accuracy may vary. Envision a platform where a
chatbot not only presents options but also showcases images, videos, and interactive interfaces.
With Estatio, this future is within reach. Sign up now for our beta and be part of Estatio !

						</p>
						
						</div>
					</div>
					<div className="col-lg-5">
						
						<iframe
		src="https://estatio.streamlit.app/?embed=true"
		height="546px"
		style={{ width: "100%", border: "none" }}
		></iframe>
					</div>
				</div>
			</div>
		</section>
		{/* Contat section */}
		<section id="contact" className="contact" ref={contact}>
				  <div className="container contact-tabs" >
					  <form ref={form} onSubmit={sendEmail} className="php-email-form">
						  <div className="col-lg-12">
						  <h1 className="form-heading">Register for Beta</h1>
					<div className="row gy-4">
						<div className="col-lg-9">
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
							  </div>
					  </form>
		</div>
		</section>
		{/* Tranding */}
		<Trainding />
		{/* Testimonial */}
		<Testimonial />
		
    </main>
		  {/* <Footer /> */}
		  <footer  id="footer" className="footer">
	<div className="container-fluid">
		<div className="row">
			<div className="col-lg-2 centertype">
				<Link to="/" className="logo align-items-center">
					<img src="assets/img/img_new/new_log.png" alt="" className='footer-logo'/>
				</Link>
			</div>
			<div className='col-lg-10'>
				<div className="email_section">
					<p><Link to="mailto:yazan@estatio.ai">yazan@estatio.ai</Link></p>
				</div>
			</div>
		</div>
	</div>
 </footer>
   </>
  )
}
