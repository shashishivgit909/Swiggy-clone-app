import React, { useState, useEffect } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import data from "../assets/data/gofood.restaurant.js";
import Card from './Card.jsx';
function TopRest() {
    const [rest, setRest] = useState([]);
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        setRest(data);
    })

    const prevSlide = () => {
        console.log(slide, "hehgccec");
        console.log(categories.length, "length");
        if (rest.length - 8 === (-slide)) {
            return false;
        }
        setSlide(slide - 2);
    }

    const nextSlide = () => {
        console.log("nextSlide", slide);
        if (slide === 0) {
            return false;
        }
        setSlide(slide + 2);
    }

    return (
        <>
            <div className='max-w-[1200px] mx-auto'>
                <div className='flex justify-between my-3'>
                    <div className='font-bold text-xl'>What's on your mind ?</div>
                    <div className='flex gap-3'>
                        <div className='cursor-pointer w-[30px] h-[30px] bg-[#bdc7cf] rounded-full flex items-center justify-center' onClick={prevSlide}> < FaArrowLeft />  </div>
                        <div className='cursor-pointer w-[30px] h-[30px] bg-[#bdc7cf] rounded-full flex items-center justify-center' onClick={nextSlide}> <FaArrowRight /> </div>
                    </div>
                </div>


          <div className='flex'>
            <Card/>
          </div>

                {/* tn flex , if wrap not given then items shrink to fit in conatiner wodth irrespect of their individual width so if we want them to appear in their actual width then either give wrap (then they comes in next line , but if want to keep in single line then make shrink-0 by only some elemnt comes in conatiner and other got over-flow*/}
                {/* <div className='flex  w-full border border-red-600 shrink-0 overflow-hidden'>
                    {
                        rest.map((item, index) => {
                            return (
                                // <div key={index} className='shrink-0' style={{transform: `translateX(-40px)`}}>
                                <div key={index} className='shrink-0' style={{ transform: `translateX(${slide * 150}px)` }} >

                                    <img className="h-[180px] w-[150px]" src={item.img} alt="" />
                                </div>
                            )
                        })
                    }
                </div> */}




                <hr className='my-8 b-t-10'></hr>
            </div>



        </>
    )
}


export default TopRest;
