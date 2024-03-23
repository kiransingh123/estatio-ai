import React from 'react'
import ReactPlayer from 'react-player'
import LoadVideo from '../assets/banner_2_mp.mp4';

export default function banner() {
  return (
    <>
      <section id="hero" className=" d-flex align-items-center">
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
						playing={true}
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
    </>
  )
}
