import Header from '../../components/Header';
import image13 from '../../images/image13.avif'
import { FaFacebookMessenger } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

import './Contact.css'
const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={image13}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque voluptates mollitia nemo possimus vitae a eos numquam magnam, in suscipit. Reiciendis, fugiat. Dicta cumque, reprehenderit dolore doloribus ad sunt saepe.

    </Header>

    <section className='contact'>
      
      <div className='container contact-container'>
        <div  className='contact-wrapper'>
          <a href="mailto:ohwojerogodstime@gmail.com" target='blank' rel='noreferrer noopener'><MdEmail /></a>
          <a href="http://m.me/sen_godstime" target='blank' rel='noreferrer noopener'><FaFacebookMessenger /></a>
          <a href="https://we.me/+2349020266783" target='blank' rel='noreferrer noopener'><FaWhatsapp /></a>



        </div>

      </div>

    </section>
    </>
  )
}

export default Contact