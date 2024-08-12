import { FaCrown } from "react-icons/fa";
import Sectionhead from "./Sectionhead";
import { programs } from "../data";
import { Link } from "react-router-dom";
import { MdArrowRight } from "react-icons/md";
import './programs.css'
const Programs = () => {
  return (
    <section className='programs'>
            <div className='container programs-container'>
                
                <Sectionhead icon={<FaCrown />} title="Programs"/>

                <div className="program-wrapper">
                    {
                        programs.map(({id, icon, title, info, path})=>{
                            return(
                                <card className="programs-program" key={id}>
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{info}</small>
                                    <div className="btn">
                                    <Link to="/"> Learn More <MdArrowRight /></Link>
                                    </div>
                                     
                                </card>
                            )
                        })
                    }
                </div>
            </div>
    </section>
  )
}

export default Programs