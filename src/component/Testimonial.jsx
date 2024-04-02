import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

export default function testimonial() {
    
  return (
    <>
	<section id="team" className="team about">
		<div className="container-fluid" data-aos="fade-up">
			<div className="row feture-tabs" data-aos="fade-up">
				<div className="col-lg-7">
					<div className="content">
					<h2>From Our Great Initial Users</h2>
					</div>
				</div>
				<div className="col-lg-5">
					
				</div>
				<div className="col-lg-12">
					<div className="team-slider swiper">
					<div className="swiper-wrapper">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={2}
                        autoplay={{ delay: 4000 }}
                        loop={true} 
                        speed={2000}
                                                   
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
                                    <p className="card-text">"Estatio saved me hours of scrolling through endless rental listings! Their personalized
recommendations were spot-on, and the chatbot made the whole process feel like chatting with a
friend."</p>
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
                                    <p className="card-text">"I used to dread apartment hunting, but Estatio changed the game. The AI recommendations were
really nice, and the comprehensive property insights gave me all the info I needed. It's like having a
personal assistant &#x1F60A;"</p>
                                </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
					</div>
				</div>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}
