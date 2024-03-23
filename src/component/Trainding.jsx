import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
export default function tranding() {
  return (
    <>
	<section id="testimonials" className="testimonials">
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
					<div className="testimonials-slider swiper" >
						 <div className="swiper-wrapper">
						 <Swiper
							 modules={[Autoplay]}
                            spaceBetween={40}
                            slidesPerView={3}
                            autoplay={{ delay: 1000 }}
                            loop={true} 
                            speed={1200}
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
    </>
  )
}
