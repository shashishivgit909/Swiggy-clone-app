import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { IoSearchSharp } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { IoHelpBuoy } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
function Header() {
  const [toggle, setToggle] = useState(false);
  const showSideMenu = () => {
    // console.log("hi");
    setToggle(true);
  }

  const hideSideBar = (e) => {
    setToggle(false);
  }

  const links = [
    {
      icon: <IoSearchSharp />,
      text: "Search"
    },
    {
      icon: <CiDiscount1 />,
      text: "Offers",
      sup:"New"
    },
    {
      icon: <IoHelpBuoy />,
      text: "Help"
    },
    {
      icon: "",
      text: "SignIn"
    },
    {
      icon: <FaShoppingCart />,
      text: "Cart"
    }
  ]

  return (
    <>
      <div className="black-overlays w-full h-full fixed duration-500" onClick={hideSideBar} style={{
        opacity: toggle ? 1 : 0,
        visibility: toggle ? "visible" : "hidden"
      }}>

        {/* to make sidebar to show when toggle with left:0 from parent , but when not toggle then go inside left part  */}

        <div className="w-[400px] h-full bg-white absolute duration-[400ms] border-4 border-black" style={{
          left: toggle ? '0%' : '-100%'
        }}
          onClick={(e) => { e.stopPropagation() }}>

        </div>
      </div>
      <header className="p-3 shadow-xl">
        <div className="max-w-[1200px] m-auto border flex items-center">
          <div className='w-[100px] ' >
            <img src="/images/logo.jpeg" alt="logo" />
          </div>
          <div> <span className="font-bold border-b-[3px] border-[#221212]">Ratanda</span> jodhpur Rajistan India</div>
          {/* fontSize={25}   this makes inline css to this component which is mainly used in icon but cs applied by class names are external css . We can give size by tailwind class also for size here . */}
          <RxCaretDown onClick={showSideMenu} fontSize={25} className="text-[#ff5200] cursor-pointer" />

          <nav className="flex list-none gap-10 ml-auto font-semibold">
            {
              links.map((link, index) => {
                return (< li key={index} className="flex items-center gap-2 hover:text-[#ff5200] cursor-pointer">
                  {link.icon}
                  {link.text}
                  <sup>{link.sup?link.sup:""}</sup>
                </li>)
              })
            }


          </nav>

        </div>

      </header >
    </>

  )
}

export default Header
