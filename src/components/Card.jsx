import React from 'react'

function Card() {
    return (
        <div className='w-[250px]'>
            <div className="object-cover rounded-[15px] overflow-hidden relative">
                <img src="https://media.istockphoto.com/photos/paneer-tikka-at-skewers-in-black-bowl-at-dark-slate-background-paneer-picture-id1186759790?k=20&m=1186759790&s=612x612&w=0&h=e9MlX_7cZtq9_-ORGLPNU27VNP6SvDz7s-iwTxrf7wU=" alt="" />

                <div className='image-overlay absolute top-0 h-full w-full '></div>
            </div>
        </div>
    )
}

export default Card
