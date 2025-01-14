const JobPosition = ({positionName, responsibilities, company, description, duration, fonts}) => {
    const orbitron = fonts[0];
    return ( 
        <div className="jobPosition">

            <h4>{positionName}</h4>
            <p>{duration}</p>
            <p> {company}</p>
            <h5> Responsibilities </h5>
            <p> {responsibilities}</p>
            <h5> Role description </h5>
            <p> {description}</p>
        </div>
     );
}
 
export default JobPosition;