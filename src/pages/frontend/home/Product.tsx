import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { addproduct } from '../../redux/Sclice/cartSlice';
import eye from '../../../assets/icons/eye.svg';
import cart from '../../../assets/icons/shopping-cart.svg';
import star from '../../../assets/icons/star.svg';
import heart from '../../../assets/icons/heart.svg';
import ProCard from '../../../components/ProCard';

interface ProductType {
    title: string;
    price: number;
    image: string;
    description: string;
    id: number;
    category: string;
    item: ReactNode;
}

interface RootState {
    redux: {
        products: [];
    };
}
export default function Product() {
    const products = useSelector((state: RootState) => state.redux.products);
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
        <>
            <div className="container">
                <div className="flex flex-wrap justify-between mt-20">
                    <div>
                        <p className='text-[30px] font-semibold text-[#2E8FC5]'>Popular products</p>
                    </div>
                    <div className="flex flex-wrap gap-x-3">
                        <div>
                            <button className="text-cyan-800 text-base font-medium rounded-[20px] px-12 py-2 border border-zinc-400 justify-center items-center"
                            >All</button>
                        </div>
                        <div>
                            <button className="text-cyan-800 text-base font-medium rounded-[20px] px-6 py-2 border border-zinc-400 justify-center items-center"
                            >Clothing</button>
                        </div>
                        <div className='hidden sm:block'>
                            <button className="text-cyan-800 text-base font-medium rounded-[20px] px-10 py-2 border border-zinc-400 justify-center items-center"
                            >jewelery</button>
                        </div>
                        <div className='hidden sm:block'>
                            <button className="text-cyan-800 text-base font-medium rounded-[20px] px-10 py-2 border border-zinc-400 justify-center items-center"
                            >electron</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex mt-10 flex-wrap mb-6 justify-center gap-[31px]">
                {products.map((item: ProductType, i) => {

                    if (i < 8) {
                        return <ProCard detail={item.item} />
                    }
                }
                )}
                 
                {products.map((item: ProductType, i) => {
                    let name = item.title.slice(0, 15)
                    if (i < 8) {
                        return (
                            <div className=" border-2 border-gray-300 w-[308.831px] h-[313.748px] rounded-3xl p-3 relative cardmain">
                                <div className=''>
                                    <span className='overlay-bg absolute right-4 top-4 lg:right-7 lg:top-5 p-2 text-center text-white flex items-center rounded-full'>
                                        <img src={heart} alt="" />
                                    </span>
                                    <div >

                                        <img src={item.image} alt="Product" className="mx-auto h-[173px] w-[187.856px]" />
                                    </div>
                                </div>
                                <div className="content mt-4">
                                    <h3 className='mb-3 text-xl font-semibold text-primary'>{name}...</h3>
                                    <p className='text-l font-semibold text-primary'>${item.price}</p>
                                    <div className="gap-2 flex mt-2">
                                        <img src={star} className='w-[14.749px] h-[14.749px]' />
                                        <img src={star} className="w-[14.749px] h-[14.749px]" />
                                        <img src={star} className="w-[14.749px] h-[14.749px]" />
                                        <img src={star} className="w-[14.749px] h-[14.749px]" />
                                        <img src={star} className="w-[14.749px] h-[14.749px]" />
                                    </div>
                                </div>
                                <div className="overlay text-white">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="col-span-2 overlay-bg p-3 rounded-2xl">
                                            <div className="flex justify-between items-center text-center cursor-pointer" onClick={() => handleAddToCart(item)}>
                                                <p className='font-medium  text-center'>Add To Cart</p>
                                                <p className="bg-warning px-[5px] py-1 text-center rounded-full">
                                                    <img src={cart} className='w-4' />
                                                </p>
                                            </div>
                                        </div>
                                        <Link to={`/product/${item.id}`} className="overlay-bg flex items-center justify-center text-xl text-center rounded-2xl">
                                            <img src={eye} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>

        </>
    );
}
