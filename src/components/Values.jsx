import image2 from '../images/image2.avif'
import Sectionhead from "./Sectionhead"
import { GiGoldShell } from "react-icons/gi";
import { values } from '../data'
import './values.css'
import Card from '../UI/Card'


const Values = () => {
    return (
        <section className='values'>
            <div className='container'>
                <div className='section-val'>
                    <div className="value-left">
                        
                        <div className='values-image'>
                            <img src={image2} alt="" />
                        </div>
                    </div>

                    <div className='values-right'>
                        <Sectionhead icon={<GiGoldShell />} title="values" />

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, repudiandae dicta deleniti illum esse similique cupiditate consequatur velit. Doloremque in molestias fugit inventore ducimus sunt nisi sequi dignissimos, corrupti voluptates!</p>

                        <div className='values-wrapper'>
                            {
                                values.map(({ id, icon, title, desc }) => {
                                    return <card className='value-card' key={id}>
                                        <span>{icon}</span>
                                        <h4>{title}</h4>
                                        <small>{desc}</small>
                                    </card>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values