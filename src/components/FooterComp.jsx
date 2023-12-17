import { FaInstagram, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { IoLocationSharp, IoMail } from "react-icons/io5";

import "./style/FooterStyle.css";

export const FooterComp = () => {
    return (
        <div className="main-footer">
            {/* Find us, Explore, FAQ Side */}
            <div className="info">
                <div className="find-us">
                    <h2>Find Us</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0981783402535!2d110.4135541749086!3d-7.779414177184221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59f1fb2f2b45%3A0x20986e2fe9c79cdd!2sUniversitas%20Atma%20Jaya%20Yogyakarta%20-%20Kampus%203%20Gedung%20Bonaventura%20Babarsari!5e0!3m2!1sid!2sid!4v1698141567898!5m2!1sid!2sid" width="600" height="450" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className="explore">
                    <h2>Explore</h2>
                    <div className="about">
                        <p>About Us</p>
                        <div className="social">
                            <FaInstagram className="social-link" size={60}/>
                            <FaFacebook className="social-link" size={60}/>
                            <TiSocialTwitter className="social-link" size={60}/>
                        </div>
                    </div>
                </div>

                <div className="faq">
                    <div>
                        <h2>Have A Question?</h2>
                    </div>
                    <div className="contact">
                        <div className="contact-item">
                            <IoLocationSharp size={40}/>
                            <p>Jl. kesitu aja, Kec. Daerah, Kab. Wilayah, Yogyakarta</p>
                        </div>
                        <div className="contact-item">
                            <FaPhoneAlt size={40}/>
                            +62 852 2637 3627
                        </div>
                        <div className="contact-item">
                            <IoMail size={40}/>
                            ask@the5stars.com
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Side */}
            <div className="copyright">
                <p>Copyright ©2023 All rights reserved | Kelompok 15</p>
            </div>
        </div>
    )
}