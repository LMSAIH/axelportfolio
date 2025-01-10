const Skill = ({ skillName, SkillIcon, skillDescription, skillColor, fonts, number }) => {

    const activeModal = () => {

        const element = document.querySelector(".sD" + number);

        if (!element) return;

        if (element.classList.contains("modalActive")) {

            element.classList.remove("modalActive");

        } else {
            element.classList.add("modalActive");
        }

    }

    const orbitron = fonts[0];

    return (

        <div className="skill-card" onClick={activeModal}>
            <div className="skill">
                <h4 className={orbitron.className}> {skillName} </h4>
                <SkillIcon color={skillColor} className="skillIcon" />
            </div>

            <div className={`skillDescription sD${number}`}>
                <div>
                    <p>{skillDescription}</p>
                </div>
            </div>

        </div>
    );
}

export default Skill;