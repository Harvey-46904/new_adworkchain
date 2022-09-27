import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/estilos_contact.css'
function ContactForm () {
    return ( 

        <React.Fragment>

        <div className="container-fluid mt-5 formulario ">
            <div className="row justify-content-center">
                <div className="col-md-6 ">
                    <form>
                        <div className="form-group">
                            
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Name:"/>
                        </div>
                        <div className="form-group">
                            
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email Adress:"/>
                        </div>
                        <div class="form-group">
                                
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Subject:"/>
                        </div>
                        <div className="form-group">
                            
                            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Your Message:" rows="8"></textarea>
                        </div>
                        <button type="button" className="btn btn-primary btn-sm">Send Message</button>
                    </form>
                </div>
            </div>        
        </div>

        </React.Fragment>

     );
}

export default ContactForm;