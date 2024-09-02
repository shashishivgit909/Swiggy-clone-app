import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import foodItems from "../assets/data/gofood.food_items.js";

function Category() {
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        //  const response=await fetch("http://localhost:5000/categories");
        //  const data=response.json();


        console.log(foodItems, "fppd items");

        setCategories(foodItems);
    }

    useEffect(() => {
        fetchCategories();
    }, [])
    return (
        <>
            <div className='max-w-[1200px] mx-auto'>
                <div className='flex justify-between my-3'>
                    <div className='font-bold text-xl'>What's on your mind ?</div>
                    <div className='flex gap-3'>
                        <div className='cursor-pointer w-[30px] h-[30px] bg-[#bdc7cf] rounded-full flex items-center justify-center'> <FaArrowLeft />  </div>
                        <div className='cursor-pointer w-[30px] h-[30px] bg-[#bdc7cf] rounded-full flex items-center justify-center'> <FaArrowRight /> </div>
                    </div>
                </div>


  {/* tn flex , if wrap not given then items shrink to fit in conatiner wodth irrespect of their individual width so if we want them to appear in their actual width then either give wrap (then they comes in next line , but if want to keep in single line then make shrink-0 by only some elemnt comes in conatiner and other got over-flow*/}
                <div className='flex border border-red-600 shrink-0 overflow-hidden'>
                    {
                        categories.map((item, index) => {
                            return (
                                <div key={index} className='shrink-0'>
                                    <img className="h-[220px] w-[240px]" src={item.img} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>



        </>
    )
}

export default Category
