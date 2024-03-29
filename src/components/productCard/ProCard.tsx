import React from 'react'
import eye from '../../assets/icons/eye.svg';
import cart from '../../assets/icons/shopping-cart.svg';
import star from '../../assets/icons/star.svg';
import heart from '../../assets/icons/heart.svg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/slice/CartSlice';
import { cartItem } from '../../constant/Types';

export default function ProCard({ detail }: { detail: cartItem }) {
    let name = detail.title;
    let titlename = name.slice(0, 16)

    const dispatch = useDispatch()
    const handleAddToCart = (item: cartItem) => {
        let cartProduct = {
            title: item.title,
            id: item.id,
            price: item.price,
            image: item.image,
            description: item.description,
            category: item.category,
            amounts: 1
        };
        dispatch(addProduct(cartProduct));
    };

    return (
        <div className=" border border-gray-300 mb-[26px] sm:m-0 w-[306.83px] h-[313.75px] rounded-3xl  relative cardMain ">
            <div className="mt-[22px]">
                <div className='w-[282.28px] h-[168.18px]'>
                    <span className='bg-footer-300 w-[27px] h-[27px] absolute right-4 top-4 lg:right-7 lg:top-5  text-center text-white flex items-center justify-center rounded-full'>
                        <img src={heart} className='w-[14px] h-[14px]' alt='heart'/>
                    </span>
                    <div >
                        <img src={detail.image} alt="Product" className="mx-auto w-[187.86px] h-[173.10px]" />
                    </div>
                </div>
                <div className="content transition-opacity mx-[22px] mb=[22px]">
                    <h3 className='mb-[15px] text-[17px] font-[500] text-primary'>{titlename}...</h3>
                    <p className='text-[17px] mb-[15px] font-semibold text-primary'>${detail.price}</p>
                    <div className="star-icon flex mt-2">
                        <img src={star} alt='...'  />
                        <img src={star} className="ms-1" alt='...'  />
                        <img src={star} className="ms-1" alt='...'  />
                        <img src={star} className="ms-1" alt='...'  />
                        <img src={star} className="ms-1" alt='...'  />
                    </div>
                </div>
                <div className="overlay absolute bottom-0 left-0 right-0 opacity-0 mx-[20px] pointer-events-none transition-all translate-y-1/2   text-white ">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2 bg-footer-300 p-2 rounded-2xl">
                            <div className="flex justify-between items-center text-center cursor-pointer" onClick={() => handleAddToCart(detail)}>
                                <p className='font-medium'>Add To Cart</p>
                                <p className="bg-warning px-[5px] py-2 text-center rounded-full">
                                    <img src={cart} className='w-4' />
                                </p>
                            </div>
                        </div>
                        <Link to={`/product/${detail.id}`} className="bg-footer-300 flex items-center justify-center text-xl text-center rounded-2xl">
                            <img src={eye} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}
