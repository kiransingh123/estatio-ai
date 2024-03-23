import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
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
