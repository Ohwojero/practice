import Header from '../../components/Header'
import './About.css'
import image9 from '../../images/image9.avif'
import image10 from '../../images/image10.avif'
import image11 from '../../images/image11.avif'
import image12 from '../../images/image12.avif'
const About = () => {
  return (
    <>
    <Header title="About Us" image={image9}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
         Modi non officiis molestiae perferendis laborum, labore sequi
          asperiores quibusdam illum repellat, cupiditate quasi provident 
          eveniet culpa eligendi, perspiciatis voluptates! Neque dolor veniam tenetur
           dolorum ea praesentium.
    </Header>

      <section className='about-story'>
        <div className='container story-container'>
            <div className='image-story'>
              <img src={image10} alt="" />
            </div>

            <div className='story-content'>
              <h1>Our Story</h1>

              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid dolores earum accusamus, libero quibusdam eaque pariatur quo culpa excepturi sit, rem fugiat distinctio inventore minus fuga quia tenetur quasi, ad alias. In aspernatur nostrum facilis culpa nesciunt at cumque dicta?</p>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, officiis at minima ex ad, fuga quae cupiditate recusandae voluptate vero in nihil a. Est distinctio nulla fuga vel nemo enim, nesciunt temporibus, praesentium ea a maiores ut optio ratione quisquam?</p>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum neque necessitatibus veniam aperiam tempora, vel dolores quia dolor sunt corporis magni non voluptatum? Quas dolores corrupti eaque odit perferendis tenetur amet inventore autem, modi voluptatum dignissimos, doloribus quos harum neque.</p>
            </div>
        </div>
      </section>



      <section className='about-vision'>
        <div className='container vision-container'>

            <div className='story-content'>
              <h1>Our Vision</h1>

              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid dolores earum accusamus, libero quibusdam eaque pariatur quo culpa excepturi sit, rem fugiat distinctio inventore minus fuga quia tenetur quasi, ad alias. In aspernatur nostrum facilis culpa nesciunt at cumque dicta?</p>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, officiis at minima ex ad, fuga quae cupiditate recusandae voluptate vero in nihil a. Est distinctio nulla fuga vel nemo enim, nesciunt temporibus, praesentium ea a maiores ut optio ratione quisquam?</p>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum neque necessitatibus veniam aperiam tempora, vel dolores quia dolor sunt corporis magni non voluptatum? Quas dolores corrupti eaque odit perferendis tenetur amet inventore autem, modi voluptatum dignissimos, doloribus quos harum neque.</p>
            </div>

            <div className='image-story'>
              <img src={image11} alt="" />
            </div>
        </div>
      </section>




      <section className='about-mission'>
        <div className='container mission-container'>
            <div className='image-story'>
              <img src={image12} alt="" />
            </div>

            <div className='story-content'>
              <h1>Our Mission</h1>

              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid dolores earum accusamus, libero quibusdam eaque pariatur quo culpa excepturi sit, rem fugiat distinctio inventore minus fuga quia tenetur quasi, ad alias. In aspernatur nostrum facilis culpa nesciunt at cumque dicta?</p>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, officiis at minima ex ad, fuga quae cupiditate recusandae voluptate vero in nihil a. Est distinctio nulla fuga vel nemo enim, nesciunt temporibus, praesentium ea a maiores ut optio ratione quisquam?</p>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum neque necessitatibus veniam aperiam tempora, vel dolores quia dolor sunt corporis magni non voluptatum? Quas dolores corrupti eaque odit perferendis tenetur amet inventore autem, modi voluptatum dignissimos, doloribus quos harum neque.</p>
            </div>
        </div>
      </section>

    </>
  )
}

export default About