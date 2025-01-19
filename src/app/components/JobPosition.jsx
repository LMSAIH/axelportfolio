import { ArrowDownDoubleIcon } from "hugeicons-react";
import { ArrowUpDoubleIcon } from "hugeicons-react";
import { useState } from "react";

const JobPosition = ({ positionName, responsibilities, company, description, duration, fonts }) => {

    const [clicked, setClicked] = useState(false);
    const orbitron = fonts[0];

    return (
        <div className="jobPosition">

            <div className="jobPositionTopContainer">
                <h4 className={`positionName`}>{positionName}</h4>
                {clicked ? <ArrowUpDoubleIcon onClick={() => { setClicked(!clicked) }} /> : <ArrowDownDoubleIcon onClick={() => { setClicked(!clicked) }} />}
            </div>

            <div className={`jobPositionBottomContainer ${clicked ? "h-fit opacity-100" : "max-h-0 opacity-0"
                } transition-all duration-500 overflow-hidden`}  >
                <p className="positionDuration"> {company}</p>
                <p className="positionDuration">{duration}</p>
                <h5 className="positionResponsibilitiesTitle"> Responsibilities </h5>
                <p className="positionResponsibilities"> {responsibilities}</p>
                <h5 className="positionRoleDescriptionTitle"> Role description </h5>
                <p className="positionRoleDescription"> {description}</p>
            </div>
        </div>
    );
}

export default JobPosition;