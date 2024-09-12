import React, { useState, useEffect, useRef } from 'react'
import data from "../assets/data/gofood.restaurant.js";
import Card from './Card.jsx';
function PopularRest() {
    const [rest, setRest] = useState([]);
    // const [slide, setSlide] = useState(0);
    const headerRef = useRef(null);
    const [isAtTop, setIsAtTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                // Get the position of the header
                const headerTop = headerRef.current.getBoundingClientRect().top;

                // If the header reaches top: 0, add the sticky class
                if (headerTop <= 0) {
                    setIsAtTop(true);
                } else {
                    setIsAtTop(false);
                }
              
            //   console.log(headerTop,"hjchc");
                
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


//   console.log(isAtTop,"isAT TOP");
  

    useEffect(() => {
        setRest(data);
    })

    return (
        <>
            <div className='max-w-[1200px] mx-auto ' ref={headerRef}>
                <div className='flex justify-between my-3'>
                    <div className='font-bold text-xl'>Popular Restaurants Near me :</div>
                </div>

                <div className={isAtTop ? "fixed top-0 z-[99999999999] bg-white w-full mx-auto left-0" : ""}>
                    <div className='max-w-[1200px] flex  gap-4 mx-auto my-4 bg-slate-200 '>
                        <div className='shadow border-0 rounded-md p-1'>Filter</div>
                        <div className='shadow border-0 rounded-md p-1'>sort</div>
                    </div>
                </div>

  {/*  this makes to apply grid when screen is grater than medium , but  */}
                <div className='grid grid-cols-2 gap-2 md:grid md:grid-cols-4 md:gap-4'>
                    {
                        rest.map(
                            (d, index) => {
                                return <Card {...d} key={index} />
                            })
                    }
                </div>

                <hr className='my-8 b-t-10'></hr>
            </div>

        </>
    )
}
export default PopularRest
