import React from 'react'
type Props = {
  title: string,
  img: string,
  des: string,
}
export default function DealCard(Props: Props) {
  return (
    <>
      <div className="flex ">
        <div className="w-20">
          <img src={Props.img} />
        </div>
        <div className='ms-5'>
          <h3 className='mb-2 text-primary font-bold'>{Props.title}</h3>
          <span>{Props.des}</span>
        </div>
      </div>
    </>
  )
}
