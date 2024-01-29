import React from 'react';
type typeProps = {
  img: string,
  title: string,
}
export default function HeroCard(props: typeProps) {
  return (
    <>
      <div className="border-2 border-gray-300 rounded-3xl mx-2 h-[147px] py-3 px-5 relative flex items-center justify-center">
        <div className="w-[40%] overflow-hidden">
          <img src={props.img} />
        </div>
        <div className="w-[60%]">
          <h3 className='mb-3 text-xl font-semibold text-primary'>{props.title}</h3>
          <p className='text-lg font-semibold text-primary'>(6 items)</p>

        </div>
      </div>
    </>
  );
}
