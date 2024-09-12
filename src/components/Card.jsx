import React from 'react'
import { FcRating } from "react-icons/fc";
import Star from './Star';
function Card(props) {
    console.log(props, "scvhcjv")
    return (
        <div className={`${props.width} shrink-0 `}>
            <div className=" group overflow-hidden rounded-[15px] h-[182px] relative">
                <img className='group-hover:scale-110 duration-300 object-cover h-full w-full' src={props.img} alt="" />

                <div className='image-overlay absolute top-0 h-full w-full flex items-end text-[16px] md:font-bold text-white md:text-[25px] p-1 tracking-tighter'>
                    {/*tracking-tighter   : this property uses to reduce letter spacing */}
                    {props.offer}
                </div>
            </div>

            <div className=''>
                {props.title}
            </div>
            <div className='flex gap-2' flex>
                <div className='flex items-center'>
                    <Star />
                    {props.rating}
                </div>
                <span>
                    {props.minTime}-{props.maxTime}
                </span>

            </div>



        </div>
    )
}

export default Card

