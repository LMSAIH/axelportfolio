import { Mail01Icon } from "hugeicons-react";

const Contact = ({fonts}) => {

    const orbitron = fonts[0];
    return ( 
        <div className="contact" id="contact">
            <h3 className={`contactTitle ${orbitron.className}`}> Reach out </h3>
            <div className = "socialsContainer">
                <Mail01Icon /> 
            </div>

            <footer>
                <div className="footer">
                    <p className= "copyright"> &copy; Axel Velasquez {new Date().getFullYear()}. All rights reserved. </p>
                </div>
            </footer>
        </div>
     );
}
 
export default Contact;
