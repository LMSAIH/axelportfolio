import Link from "next/link";
import { useEffect, useState } from 'react';

//ele

const Dots = ({ name, targetRef }) => {

    const [reached, setReached] = useState(false);

    useEffect(() => {
        const target = document.getElementById(targetRef);
    
        if (!target) return;
    
        const observer = new IntersectionObserver(
          ([entry]) => {
            setReached(entry.isIntersecting);
          },
          { threshold: 0.1 }
        );
    
        observer.observe(target);
    
        return () => {
          observer.unobserve(target);
        };
      }, [targetRef]);

    return (
        <div className="linkContainer">
            <div className="clickableContainer">
                <div>
                    <Link href= {`#${targetRef}`} className = "experience">{name} </Link>
                </div>
            </div>
            <div className="dotContainer">
                <div className= {`dot ${reached ? "bg-primary" :"bg-white" } `}></div>
            </div>

        </div>

    );
}

export default Dots;