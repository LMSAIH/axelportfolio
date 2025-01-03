import { Idea01Icon } from "hugeicons-react";

const WhoAmI = () => {
    return (
        //add icon
        <div className="whoAmI">
            <div className="whoAmIContent">
            <Idea01Icon size = "5rem" className="eurekaIcon" color="yellow"/> 
            <p> I’m a <span className = "whoAmIColored">software developer</span> with a passion for creating innovative and <span className="whoAmIColored">impactful projects</span>. I enjoy collaborating with non-profit organizations, connecting with people from diverse backgrounds, and taking on freelance opportunities. Based in Vancouver, BC, Canada, I’m always eager to embrace <span className="whoAmIColored">new challenges</span> and expand my skills with the latest technologies.</p>
            </div>
        </div>
    );
}

export default WhoAmI;
