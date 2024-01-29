import React, { ReactNode } from 'react'
import eye from '../assets/icons/eye.svg';
import cart from '../assets/icons/shopping-cart.svg';
import star from '../assets/icons/star.svg';
import heart from '../assets/icons/heart.svg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addproduct } from '../pages/redux/Sclice/cartSlice';
type ProductType = {
    title: string;
    price: number;
    image: string;
    description: string;
    id: number;
    category: string;

}
export default function ProCard({ detail }: { detail: ProductType }) {
    console.log("🚀 ~ ProCard ~ detail:", detail.title)
    let name = detail.title;
    let titlename = name.slice(0, 16)

    const dispatch = useDispatch()
    const handleAddToCart = (item: any) => {
        let CartProduct = {
            title: item.title,
            id: item.id,
            price: item.price,
            image: item.image,
            description: item.description,
            category: item.category,
            amounts: 1
        };
        dispatch(addproduct(CartProduct) as any);
    };


    return (
        <div className=" border-2 border-gray-300 w-[330px] rounded-3xl p-3 relative cardmain mb-2">
            <div className=''>
                <span className='overlay-bg absolute right-4 top-4 lg:right-7 lg:top-5 p-2 text-center text-white flex items-center rounded-full'>
                    <img src={heart} alt="" />
                </span>
                <div >

                    <img src={detail.image} alt="Product" className="mx-auto h-[200px]" />
                </div>
            </div>
            <div className="content mt-8">
                <h3 className='mb-3 text-xl font-semibold text-primary'>{titlename}...</h3>
                <p className='text-l font-semibold text-primary'>${detail.price}</p>
                <div className="star-icon flex mt-2">
                    <img src={star} />
                    <img src={star} className="ms-1" />
                    <img src={star} className="ms-1" />
                    <img src={star} className="ms-1" />
                    <img src={star} className="ms-1" />
                </div>
            </div>
            <div className="overlay text-white">
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 overlay-bg p-2 rounded-2xl">
                        <div className="flex justify-between items-center text-center cursor-pointer" onClick={() => handleAddToCart(detail)}>
                            <p className='font-medium'>Add To Cart</p>
                            <p className="bg-warning px-[5px] py-2 text-center rounded-full">
                                <img src={cart} className='w-4' />
                            </p>
                        </div>
                    </div>
                    <Link to={`/product/${detail.id}`} className="overlay-bg flex items-center justify-center text-xl text-center rounded-2xl">
                        <img src={eye} />
                    </Link>
                </div>
            </div>
        </div>

    )
}
