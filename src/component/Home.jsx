import React from 'react'
import { Link } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Virtual, Autoplay } from 'swiper/modules';

export default function Home() {
    
  return (
   <>
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
                        <li><Link to="/" className="nav-link scrollto ">ABOUT</Link></li>
                        <li><Link to="/" className="nav-link scrollto ">DEMO</Link></li>
                        <li><Link to="/" className="nav-link scrollto ">CONTACT</Link></li>
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
    <section id="hero" className=" d-flex align-items-center">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-12">
					  <div id="carouselExampleCaptions" className="carousel slide">
				
				 <div className="carousel-inner">
				   <div className="carousel-item active">
					   <video id="topbannervideo"width="100%" controls autoplay muted > 
						 <source src="./assets/img/banner_2_mp.mp4" type="video/mp4" className="d-block w-100" />
					   </video>
				   
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
		<section id="about" className="about">
		   {/* <div className="container-fluid" data-aos="fade-up"> */}
		   <div className="container-fluid">
			  <div className="row">
				{/* <div className="col-lg-7" data-aos="fade-up" data-aos-delay="200"> */}
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
        <section id="values" className="values">
		   {/* <div className="container-fluid" data-aos="fade-up"> */}
		   <div className="container-fluid" >
			  <div className="row overlay">
				  
				 {/* <div className="col-lg-3" data-aos="slide-up"> */}
				 <div className="col-lg-3" >
					<div className="box">
					   <img src="assets/img/icon-1.png" className="img-fluid" alt="" />
					   <h3>Personalized Recommendations</h3>
					   <p>Elevate your search experience with AI-driven, personalized rental suggestions crafted just for you.</p>
					</div>
				 </div>
				 {/* <div className="col-lg-3 mt-4 mt-lg-0" data-aos="slide-down"> */}
				 <div className="col-lg-3 mt-4 mt-lg-0" >
					<div className="box">
					   <img src="assets/img/icon-2.png" className="img-fluid" alt="" />
					   <h3>Smart Property Management</h3>
					   <p>Effortlessly sort through rentals based on key features, ensuring an organized and efficient search.</p>
					</div>
				 </div>
				 {/* <div className="col-lg-3 mt-4 mt-lg-0" data-aos="slide-up"> */}
				 <div className="col-lg-3 mt-4 mt-lg-0" >
					<div className="box">
					   <img src="assets/img/icon-3.png" className="img-fluid" alt=""/>
					   <h3>AI-Powered Chatbot Assistant</h3>
					   <p>Meet your personal assistant, a finely tuned chatbot, ready to guide you through the rental process with ease.</p>
					</div>
				 </div>
				 {/* <div className="col-lg-3" data-aos="slide-down"> */}
				 <div className="col-lg-3" >
				   <div className="box">
					   <img src="assets/img/icon-1.png" className="img-fluid" alt=""/>
					   <h3>Comprehensive Property Insights</h3>
					   <p>Beyond pricing, explore detailed property insights for confident decision-making and seamless rental comparisons.</p>
					</div>
				 </div>
			  </div>
		   </div>
	    </section>
	<section id="features" className="features about">
	   <div className="container-fluid aos-init aos-animate" data-aos="fade-up">
		  {/* <div className="row feture-tabs" data-aos="fade-up"> */}
		  <div className="row feture-tabs" >
			 <div className="col-lg-7 bgright_demo ">
				<div className="content ">
				    {/* <h3>Demo</h3> */}
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
				<iframe
  src="https://estatio.streamlit.app/?embed=true"
  height="546px"
  style={{ width: "100%", border: "none" }}
></iframe>
			 </div>
		  </div>
	   </div>
   </section>
   <section id="contact" className="contact">
	   {/* <div className="container" data-aos="fade-up"> */}
	   <div className="container" >
		  <div className="row gy-4">

			   
			 <div className="col-lg-9">
			   <h1 className="form-heading">Register for Beta</h1>
				<form action="/" method="post" className="php-email-form">
				   <div className="row gy-4">
					  <div className="col-md-6">
						 <input type="text" name="name" className="form-control" placeholder="Your Name" required />
					  </div>
					  <div className="col-md-6 ">
						 <input type="email" className="form-control" name="email" placeholder="Your Email" required />
					  </div>
					  <div className="col-md-12">
						 <textarea className="form-control" name="message" rows="3" placeholder="Feedback and Suggestions"></textarea>
					  </div>
				   </div>
				</form>
			 </div>
			 <div className="col-lg-3 register-button" >
			   <button className="learn-more">Register </button>
		   </div>
		  </div>
	   </div>
	</section>
   
	 <section id="testimonials" className="testimonials">
	   {/* <div className="container-fluid" data-aos="fade-up"> */}
	   <div className="container-fluid" >
		   <div className="row">
			   <div className="col-lg-3">
				   <img src="assets/img/Linetopnew.png" className="img-fluid" alt="" />
				   <h3 className="Trending_heading">Trending <br />Properties</h3>
				   <div className="bgright">
					   <p>Explore the future of rental discovery with our Trending Properties section! Currently under construction, soon you'll enjoy personalized rental playlists tailored to your unique tastes and preferences, curated based on local events and trends in your area of interest.</p>
				   </div>
				   <div className="mt-5">
					   <img src="assets/img/icon-leftwhite.png" className="img-fluid iconslider swiper-button-prev" alt="" />
					   <img src="assets/img/icon-rightwhite.png" className="img-fluid righticonside iconslider swiper-button-next" alt="" />
				   </div>
			   </div>
			   <div className="col-lg-9">
					{/* <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="200"> */}
					<div className="testimonials-slider swiper" >
						 <div className="swiper-wrapper">
						 <Swiper
							spaceBetween={40}
							slidesPerView={3}
							onSlideChange={() => console.log('slide change')}
							onSwiper={(swiper) => console.log(swiper)}
							modules={[Virtual]}
							>
							<SwiperSlide><div className="swiper-slide">
							   <div className="Trending-Properties-item">
								  <img src="assets/img/img_new/TrendingProperties1.png" className="hover03" />
							   </div>
							</div></SwiperSlide>
							<SwiperSlide> <div className="swiper-slide">
							   <div className="Trending-Properties-item">
								  <img src="assets/img/img_new/TrendingProperties2.png" className="hover03" />
							   </div>
							</div></SwiperSlide>
							<SwiperSlide><div className="swiper-slide">
							   <div className="Trending-Properties-item">
								  <img src="assets/img/img_new/TrendingProperties3.png" className="hover03" />
							   </div>
							</div></SwiperSlide>
							<SwiperSlide><div className="swiper-slide">
							   <div className="Trending-Properties-item">
								  <img src="assets/img/img_new/TrendingProperties1.png" className="hover03" />
							   </div>
							</div></SwiperSlide>
							<SwiperSlide><div className="swiper-slide">
							   <div className="Trending-Properties-item">
								  <img src="assets/img/img_new/TrendingProperties2.png" className="hover03" />
							   </div>
							</div> </SwiperSlide>
							</Swiper>
							
							
							
							
						 </div>
					  </div>
			   </div>
		   </div>
	    </div>
	    </section>
 
 
	{/* </section> */}
	<section id="team" className="team about">
	   <div className="container-fluid item" data-aos="fade-up">
	   {/* <div className="container-fluid" > */}
		  <div className="row feture-tabs item" data-aos="fade-up">
		  {/* <div className="row feture-tabs"> */}
			 <div className="col-lg-7">
				<div className="content">
				   <h2>From Great Our Clients</h2>
				</div>
			 </div>
			 <div className="col-lg-5">
				 
			 </div>
			 <div className="col-lg-12 mt-5">
				 {/* <div className="team-slider swiper">
				 <div className="swiper-wrapper"> */}

				 			<Swiper
								spaceBetween={40}
								slidesPerView={2}
								// onSlideChange={() => console.log('slide change')}
								// onSwiper={(swiper) => console.log(swiper)}
								modules={[Autoplay]}
								
								effect="fade"
							>
							<SwiperSlide>
							<div className="swiper-slide">
						  <div className="card">
						   <img className="card-img-top team-about" src="assets/img/img_new/Adam_Stone1.png" alt="Card image" />
						   <div className="card-body">
							 <h4 className="card-title">Adam Stone <span>/ CEO at Google INC</span></h4> 
							 <span className="arrow">
								 <img src="assets/img/img_new/Vector_team.png" />
							 </span>
							 <p className="card-text">"Estatio.AI saved me hours of scrolling through endless rental listings! Their personalized recommendations were spot-on, and the chatbot made the whole process feel like chatting with a friend. No more stress, just easy renting!"</p>
						   </div>
						 </div>
					   </div>
							</SwiperSlide>
							<SwiperSlide> 
							<div className="swiper-slide">
						  <div className="card">
						   <img className="card-img-top slider-img" src="assets/img/img_new/Adam_Stone2.png" alt="Card image"  />
						   <div className="card-body">
							 <h4 className="card-title">Adam Stone <span>/ CEO at Google INC</span></h4> 
							 <span className="arrow">
								 <img src="assets/img/img_new/Vector_team.png" />
							 </span>
							 <p className="card-text">"I used to dread apartment hunting, but Estatio.AI changed the game. The AI recommendations were so accurate, and the comprehensive property insights gave me all the info I needed. It's like having a personal assistant for rental searches!"</p>
						   </div>
						 </div>
					   </div>
							</SwiperSlide>
							<SwiperSlide>
							<div className="swiper-slide">
						  <div className="card">
						   <img className="card-img-top slider-img" src="assets/img/img_new/Adam_Stone2.png" alt="Card image"  />
						   <div className="card-body">
							 <h4 className="card-title">Adam Stone <span>/ CEO at Google INC</span></h4> 
							 <span className="arrow">
								 <img src="assets/img/img_new/Vector_team.png" />
							 </span>
							 <p className="card-text">"Estatio.AI is a game-changer! I love how it takes the hassle out of comparing rentals and provides insights beyond just pricing. It's such a relief to have a platform that understands what I need and makes the whole process stress-free.”</p>
						   </div>
						 </div>
					   </div>
							</SwiperSlide>  
							</Swiper>
				   {/* </div>
			   </div> */}
			 </div>
		  </div>
	   </div>
	</section>
    </main>
    <footer id="footer" className="footer">
	<div className="container">
		<div className="row">
			<div className="col-lg-4 mt-5">
            <Link to="/" className="logo align-items-center">
                <img src="assets/img/img_new/new_log.png" alt="" className='footer-logo'/>
                
                </Link>
				

			</div>
			<div className="col-lg-4 mt-5">
				<div className="social-links">
					<h3>Stay In Touch</h3>
					<div className="email_section">
						<p>
                            <Link to="mailto:info@estatio.com">info@estatio.com</Link>
						</p>
						<p>
                            <Link to="mailto:contact@estatio.com">contact@estatio.com</Link>
						</p>
					</div>
			   </div>
			</div>
			<div className="col-lg-4 mt-5">
				<div className="social-links">
					<h3>Our Social Networks</h3>
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
 </footer>
   </>
  )
}
