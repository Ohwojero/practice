import image14 from '../../images/image14.avif'
import Header from '../../components/Header'
import './Gallery.css'
import g1 from '../../images/g1.avif'
import g2 from '../../images/g2.avif'
import g3 from '../../images/g3.avif'
import g4 from '../../images/g5.avif'
import g5 from '../../images/g5.avif'
import g6 from '../../images/g6.avif'
import g7 from '../../images/g7.avif'
import g8 from '../../images/g8.avif'
import g9 from '../../images/g9.avif'
import g10 from '../../images/g10.avif'
import g11 from '../../images/g11.avif'
import g12 from '../../images/g12.avif'
const Gallery = () => {


  return (
    <>
      <Header title="Check Our Daily Route" image={image14}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque corrupti dicta eligendi. Debitis voluptas molestias, nostrum explicabo odit voluptatum voluptate facilis
        ex, facere, distinctio quo veniam molestiae ipsa impedit laboriosam!
      </Header>

      <div className='image-content'>
        <div className='gallery-content'>
          <img src={g1} alt="" />
          <img src={g2} alt="" />
          <img src={g3} alt="" />
          <img src={g4} alt="" />
          <img src={g5} alt="" />
          <img src={g6} alt="" />
          <img src={g7} alt="" />
          <img src={g8} alt="" />
          <img src={g9} alt="" />
          <img src={g10} alt="" />
          <img src={g11} alt="" />
          <img src={g12} alt="" />
        </div>
      </div>

    </>
  )
}

export default Gallery