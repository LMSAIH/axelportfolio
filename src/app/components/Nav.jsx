import Dots from "./Dots";
import DotConnector from "./DotConnector";

const NavBar = () => {
    return (

        <nav>
            <div className="navbar">

                <Dots name={"Introduction"} targetRef={"introduction"} />

                <DotConnector />

                <Dots name={"Projects"} targetRef={"projects"}/>

                <DotConnector />

                <Dots name={"Skills"} targetRef={"skills"} />

                <DotConnector />

                <Dots name={"Experience"} targetRef={"experience"}/>

                <DotConnector />

                <Dots name={"Contact me!"} targetRef={"contact"}/>

            </div>

            <div className="hamb">

            </div>
        </nav>

    );
}

export default NavBar;