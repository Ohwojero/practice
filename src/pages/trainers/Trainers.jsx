import Header from '../../components/Header'
import trainer6 from '../../images/trainer6.avif'
import {trainers} from '../../data'
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import './Trainers.css'
import Trainer from '../../components/Trainer';
const Trainers = () => {

  
  
  return (
    <>
    <Header title="Our Trainer" image={trainer6}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolor nisi nobis voluptas. Quia distinctio animi maxime, reiciendis assumenda alias laborum quasi quis! Dolor sunt error repellat iste illo alias!
    </Header>

    <section className='trainer'>
      <div className='container trainer-containers'>
        {
          trainers.map(({id, image,name,job, social})=>{
            return <Trainer key={id} image={image} name={name} job={job} social={
              [
                {icon:<CiInstagram />, link: social[0]},
                {icon:<CiTwitter/>, link: social[1]},
                {icon:<CiFacebook/>, link: social[2]},
                {icon:<CiLinkedin  />, link: social[3]},
              ]

           }>


           </Trainer>
          })
        }

      </div>

    </section>
    
    </>
  )
}

export default Trainers