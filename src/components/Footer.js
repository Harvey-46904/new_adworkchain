import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaTelegram } from 'react-icons/fa';

class Footer extends React.Component {

        render() {
                const style = { color: "#00ffff", fontSize: "1.3em" }
                return (
                        <div>
                                <div className="mensaje">
                                        <ul className="mensaje_footer">
                                                <li><FaTelegram style={{ color: "#00ffff", fontSize: "3em" }} /></li>
                                        </ul>

                                </div>
                                <div className="footer">
                                        <ul className="footer_menu">
                                                <li><FaInstagram style={style} /></li>
                                                <li><FaFacebookF style={style} /></li>
                                                <li><FaTwitter style={style} /></li>
                                                <li><FaTelegram style={style} /></li>
                                        </ul>

                                </div>
                        </div>


                )

        }

}
export default Footer;