const Skill = ({ skillName, SkillIcon, skillDescription, skillColor, fonts, number }) => {

    const orbitron = fonts[0];

    return (

        <div className="skill-card" >
            <div className="skill">
            
                <div className="leftCovering"></div>
                <h4 className={orbitron.className}> {skillName} </h4>
                <SkillIcon color={skillColor} className="skillIcon" />
                <p className={`skillDescription`}>{skillDescription}</p>
           
                <div className="rightCovering"></div>
            </div>

        </div>
    );
}

export default Skill;