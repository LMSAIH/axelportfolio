import {motion} from 'framer-motion';
import Project from './Project';


const Projects = ({fonts}) => {

    //change the way we get fonts
    const orbitron = fonts[0];
    return ( 
        <motion.div className="projects" id="projects">

            <div className = "projectsHeader">
                <h2 className={orbitron.className}> Take a look into some of <span>my work</span> </h2>
            </div>

            <Project fonts = {fonts} source = "/sample.mp4" number={1} skills={{html:"html", js:"js", aws:"aws"}} projectTitle={"ProfitSNFT"} htmlContent={"<p>I designed, developed, and deployed a website for a non-profit organization's event as a freelance project. The website, built using <span>HTML, CSS, and JavaScript</span> with animation libraries, successfully served <span>over 300 attendees</span> during the event. I deployed it on <span>AWS</span>, hosting it in an S3 bucket and securing it with an <span>SSL certificate</span> for safe data transfer, visit the page on <a href= \"https://www.profitsnft.org\" target=\"_blank\">ProfitSNFT. </a></p> "} />
            <Project fonts = {fonts} source = "/sample.mp4" number={2} skills={{html:"html", js:"js", aws:"aws"}} projectTitle={"ProfitSNFT"} htmlContent={"<p>I designed, developed, and deployed a website for a non-profit organization's event as a freelance project. The website, built using <span>HTML, CSS, and JavaScript</span> with animation libraries, successfully served <span>over 300 attendees</span> during the event. I deployed it on <span>AWS</span>, hosting it in an S3 bucket and securing it with an <span>SSL certificate</span> for safe data transfer, visit the page on <a href= \"https://www.profitsnft.org\" target=\"_blank\">ProfitSNFT. </a></p> "} />
            <Project fonts = {fonts} source = "/sample.mp4" number={3} skills={{html:"html", js:"js", aws:"aws"}} projectTitle={"ProfitSNFT"} htmlContent={"<p>I designed, developed, and deployed a website for a non-profit organization's event as a freelance project. The website, built using <span>HTML, CSS, and JavaScript</span> with animation libraries, successfully served <span>over 300 attendees</span> during the event. I deployed it on <span>AWS</span>, hosting it in an S3 bucket and securing it with an <span>SSL certificate</span> for safe data transfer, visit the page on <a href= \"https://www.profitsnft.org\" target=\"_blank\">ProfitSNFT. </a></p> "} /> </motion.div>
     );
}
 
export default Projects; 