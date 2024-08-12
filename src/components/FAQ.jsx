import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
const FAQ = ({question,answer}) => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);

  return (
    <article className='faq-art' onClick={()=>setIsAnswerShowing(prev => !prev)}>
            <div className='ask-section'>
                <h4>{question}</h4>
                <button className='faq-icon'>
                {
                  isAnswerShowing ?  <FiMinus />  : <GoPlus />
                }
                </button>

            </div>
           {isAnswerShowing && <p>{answer}</p>}
    </article>
  )
}

export default FAQ