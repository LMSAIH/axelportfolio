import Link from "next/link";

const NavBar = () => {
    return (

        <nav>
            <div className="navbar">

                <div className="linkContainer">
                    <div className="clickableContainer">
                        <Link href="/" className="experience"> Experience </Link>
                    </div>
                    <div className="dotContainer">
                        <div className="dot"></div>
                    </div>

                </div>

                <div className="connectorContainer">
                    <span className="connector"></span>
                </div>
                

                <div className="linkContainer">
                    <div className="clickableContainer">
                        <Link href="/" className="experience"> Experience </Link>
                    </div>
                    <div className="dotContainer">
                        <div className="dot"></div>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default NavBar;