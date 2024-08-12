import { useState } from "react";
import Sectionhead from "./Sectionhead"
import { IoColorPaletteSharp } from "react-icons/io5";
import { MdOutlineArrowBack } from "react-icons/md";
import Card from '../UI/Card'
import { testimonials } from "../data";
import { MdOutlineArrowForward } from "react-icons/md";
const Testimonials = () => {


    const [index, setIndex] = useState(0)


    const { name, quote, job, avatar } = testimonials[index];

    const prevTestimonialHandler = () => {
        setIndex(prev => prev - 1);

        if (index <= 0) {
            setIndex(testimonials.length - 1);
        }
    }

    const nextTestimonialHandler = () => {
        setIndex(prev => prev + 1);

        if (index >= testimonials.length - 1) {
            setIndex(0);
        }
    }


    return (
        <section className="testimonials">
            <div className="container testimonials-container">
                <Sectionhead icon={<IoColorPaletteSharp />} title="Testimonials" className='test-head' />
                <card className='test'>
                    <div className="test-avatar">
                        <img src={avatar} alt="" />
                    </div>

                    <p className="test-quote">{`"${quote}"`}</p>
                    <h5>{name}</h5>
                    <small className="test-title">{job}</small>
                </card>
                <div className="test-btn">
                    <button className="btn one" onClick={prevTestimonialHandler}><MdOutlineArrowBack /></button>
                    <button className="btn  one" onClick={nextTestimonialHandler}><MdOutlineArrowForward /></button>
                </div>
            </div>
        </section>
    )
}

export default Testimonials