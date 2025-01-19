import { Mail01Icon } from "hugeicons-react";
import { Github01Icon } from "hugeicons-react";
import { DeveloperIcon } from "hugeicons-react";

import Link from "next/link";

const Contact = ({ fonts }) => {

    //TODO: add form
    const orbitron = fonts[0];
    return (
        <div className="contact" id="contact">
            <h3 className={`contactTitle ${orbitron.className}`}> Reach out </h3>
            <div className="socialsContainer">
                <Link href="mailto:tarma792@gmail.com" passHref target="_blank"> <Mail01Icon />  </Link>
                <Link href="https://github.com/LMSAIH" passHref target="_blank"> <Github01Icon />  </Link>
                <Link href="https://devpost.com/yoloax11" passHref target="_blank"> <DeveloperIcon />  </Link>
            </div>

            <footer>
                <div className="footer">
                    <p className="copyright"> &copy; Axel Velasquez {new Date().getFullYear()}. All rights reserved. </p>
                </div>
            </footer>
        </div>
    );
}

export default Contact;
