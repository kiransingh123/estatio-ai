import React , { useRef }from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay , Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
export default function Tranding() {
	const swiperref = useRef();
  return (
    <>
	<section id="testimonials" className="testimonials">
	   <div className="container-fluid" data-aos="fade-up">
		   <div className="row">
			   <div className="col-lg-3">
				   <img src="assets/img/Linetopnew.png" className="img-fluid" alt="" />
				   <h3 className="Trending_heading">Trending Properties</h3>
				   <div className="bgright">
					   <p>Explore the future of rental discovery with our Trending Properties section! Currently under construction, soon you'll enjoy personalized rental playlists tailored to your unique tastes and preferences, curated based on local events and trends in your area of interest.</p>
				   </div>
				   <div className="mt-5">
					   <img src="assets/img/icon-leftwhite.png" className="img-fluid iconslider swiper-button-prev" alt="" onClick={() => swiperref.current?.slidePrev()} />
					   <img src="assets/img/icon-rightwhite.png" className="img-fluid righticonside iconslider swiper-button-next" alt="" onClick={() => swiperref.current?.slideNext()} />
				   </div>
			   </div>
			   <div className="col-lg-9" >
					<div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="200" >
						 <div className="swiper-wrapper">
								  <Swiper
									  
							 modules={[Autoplay, Navigation]}
                            spaceBetween={30}
                            slidesPerView={3}
                            autoplay={{ delay: 4000 }}
                            loop={true} 
							speed={2000}
							onBeforeInit={(swiper) => {
							swiperref.current = swiper;
									  }}
									  breakpoints={{
										320: {
										  // width: 576,
										  slidesPerView: 1,
										},
										520: {
											// width: 576,
											slidesPerView: 1,
										  },
										768: {
										  // width: 768,
										  slidesPerView: 3,
										},
									  }}
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
