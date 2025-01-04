import {motion} from 'framer-motion';
import Project from './Project';

const Projects = ({fonts}) => {

    const orbitron = fonts[0];
    return ( 
        <motion.div className="projects" id="projects">

            <div className = "projectsHeader">
                <h2 className={orbitron.className}> Take a look into some of <span>my work</span> </h2>
            </div>

            <Project source = "/sample.mp4"/>
        </motion.div>
     );
}
 
export default Projects; 