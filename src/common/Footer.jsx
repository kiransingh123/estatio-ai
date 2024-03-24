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
                            <Link to="mailto:yazan@estatio.ai">yazan@estatio.ai</Link>
						</p>
					</div>
			   </div>
			</div>
			
		</div>
	</div>
 </footer>
    </>
  )
}
