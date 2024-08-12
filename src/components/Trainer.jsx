import Card from '../UI/Card'



const Trainer = ({image, name, job, social}) => {
    
  return (
    <card className='train' >
        <div className='train-img'>
            <img src={image} alt="" />
        </div>
        <h3>{name}</h3>
        <p>{job}</p>
        
        <div className='train-socials'>
            {
                social.map(({icon, link}, index)=>{
                    return <a key={index} href={link} target='blank' rel='noreferrer noopener'>{icon}</a>
                })
            }
        </div>

    </card>
  )
}

export default Trainer