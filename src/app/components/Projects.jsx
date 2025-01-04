import {motion} from 'framer-motion';

const Projects = ({fonts}) => {

    const orbitron = fonts[0];
    return ( 
        <motion.div className="projects" id="projects">

            <div className = "projectsHeader">
                <h2 className={orbitron.className}> Take a look into some of <span>my work</span> </h2>
            </div>
        </motion.div>
     );
}
 
export default Projects; 