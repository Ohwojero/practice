
import Sectionhead from "./Sectionhead";
import { FaQq } from "react-icons/fa";
import {faqs} from '../data'
import FAQ from './FAQ'

const FAQs = () => {
  return (
    <section className='faq'>
        <div className='container faqs-container'>
            <Sectionhead icon={<FaQq />} title="FAQs" className='title'/>

            <div className="faqs-wrapper">
                {
                    faqs.map(({id, question, answer})=>{
                        return <FAQ key={id} question={question} answer={answer}/>
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default FAQs