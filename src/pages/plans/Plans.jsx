import Header from '../../components/Header'
import './Plans.css'
import Card from '../../UI/Card'
import image15 from '../../images/image15.avif'
import {plant} from '../../data'
import { Link } from 'react-router-dom'
const Plans = () => {
  return (
    <>
    <Header title='Memberships Plan' image={image15}>

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, numquam! Eligendi et quidem maiores enim sed fuga cumque quia! Asperiores doloremque a et? Nihil perspiciatis explicabo, eos fugiat doloribus quam?
    </Header>

    
    <section className='plan'>
        <div className='container plan-container'>
            {
              plant.map(({id, name, desc, price, features})=>{
                return <card key={id} className='card-plan'>
                      <h3>{name}</h3>
                      <small>{desc}</small>
                      <h1>{`${price}`}</h1><h2>/mo</h2>

                      <h4>Features</h4>

                     {
                      features.map(({feature, available}, index)=>{
                        return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                      })
                     }

                    <Link to='/plan'>
                      <button className='btn two'>Choose Plan</button>
                    </Link>
                      
                </card>
              })
            }
        </div>
    </section>
    </>


  )
}

export default Plans