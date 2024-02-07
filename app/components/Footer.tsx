import React from 'react'

const Footer = () => {
  return (
    <footer>
        <section className="main-footer">
            <div className="container">
                <div className="flex gap-16">
                    <div className="w-full md:w-1/2 lg:w-1/4">
                        <img src="/img/logo-light.png" width="180px" alt="" />
                        <p className='mt-2 mb-4'>Affordable clinical and supportive care at home to allievate the economic and emotional costs of longterm hospital stays for patients and their families.</p>

                        <span className="footer-social-icons">
                            <a href="https://www.facebook.com/homenursinginkenya/" className="footer-social-icon icn-facebook" target="_blank"><i className="bi bi-facebook"></i>
                            </a>
                            <a href="" className="footer-social-icon icn-twitter" target="_blank"><i className="bi bi-twitter-x"></i>
                            </a>
                            <a href="https://ke.linkedin.com/company/bena-care-ltd" className="footer-social-icon icn-linkedin" target="_blank"><i className="bi bi-linkedin"></i>
                            </a>
                            <a href="https://www.instagram.com/bena_care/" className="footer-social-icon icn-instagram" target="_blank"><i className="bi bi-instagram"></i>
                            </a>
                            <a href="https://www.youtube.com/@benacare8469" className="footer-social-icon icn-youtube" target="_blank"><i className="bi bi-youtube"></i>
                            </a>
                        </span>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="">How We Do It</a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Home Equipment Shop</a></li>
                            <li><a href="">Research & Development</a></li>
                            <li><a href="">Work With Us</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4">
                        <h3>What We Do</h3>
                        <ul className="footer-links">
                            <li><a href="">Skilled Nursing</a></li>
                            <li><a href="">Care Giver Services</a></li>
                            <li><a href="">Training of Family Caregivers</a></li>
                            <li><a href="">Physiotherapy Services</a></li>
                            <li><a href="">Free Screening & Health Education</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4">
                        <h3>Get In Touch</h3>
                        <ul className="footer-links">
                            <li><a href=""><i className="bi bi-geo-alt mr-2"></i> Muthaiga North,Nairobi, Kenya</a></li>
                            <li><a href=""><i className="bi bi-clock mr-2"></i> Monday - Friday (9am - 6pm)</a></li>
                            <li><a href=""><i className="bi bi-envelope mr-2"></i> info@benacare.or.ke</a></li>
                            <li><a href=""><i className="bi bi-telephone mr-2"></i> 0800 721 275 | 0701 114 433</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </footer>
  )
}

export default Footer
