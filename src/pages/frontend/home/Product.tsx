import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { addproduct } from '../../redux/Sclice/cartSlice';
import images from '../../../assets/icons';
import { FetchProduct } from '../../redux/Sclice/ProductSclice';
interface ProductType {
    title: string;
    price: number;
    image: string;
    description: string;
    id: number;
    category: string;
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

    useEffect(() => {
        dispatch(FetchProduct() as any)
      }, [dispatch])
    
    return (
        <>
            <div className="container">
                <div className="flex flex-wrap justify-between">
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
                            <button className="text-cyan-800 text-base font-medium rounded-[20px] px-14 py-2 border border-zinc-400 justify-center items-center"
                            >jewelery</button>
                        </div>
                        <div className='hidden sm:block'>
                            <button className="text-cyan-800 text-base font-medium rounded-[20px] px-14 py-2 border border-zinc-400 justify-center items-center"
                            >electron</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex mt-10 flex-wrap mb-6 justify-center gap-2">
                {products.map((item: ProductType, i) => {
                    let name = item.title.slice(0, 15)
                    if (i < 8) {
                        return (


                            <div className=" border-2 border-gray-300 rounded-3xl p-3 px-5 relative cardmain mb-2">
                                <div className='w-[282.28px] h-[168.18px]'>
                                    <span className='overlay-bg absolute right-4 top-4 lg:right-7 lg:top-5 p-2 text-center text-white w-8 h-8 flex items-center rounded-full'>
                                        <img src={images.heart} alt="" />
                                    </span>
                                    <div >

                                        <img src={item.image} alt="Product" className="w-[187.86px] h-[173.10px] mx-auto" />
                                    </div>
                                </div>
                                <div className="content mt-8">
                                    <h3 className='mb-3 text-xl font-semibold text-primary'>{name}...</h3>
                                    <p className='text-l font-semibold text-primary'>${item.price}</p>
                                    <div className="star-icon flex mt-2">
                                        <i className="fa-solid fa-star text-gray-300"></i>
                                        <i className="fa-solid fa-star text-gray-300 ms-1"></i>
                                        <i className="fa-solid fa-star text-gray-300 ms-1"></i>
                                        <i className="fa-solid fa-star text-gray-300 ms-1"></i>
                                        <i className="fa-solid fa-star text-gray-300 ms-1"></i>
                                    </div>
                                </div>
                                <div className="overlay text-white">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="col-span-2 overlay-bg p-2 rounded-2xl">
                                            <div className="flex justify-between items-center text-center cursor-pointer" onClick={() => handleAddToCart(item)}>
                                                <p className='font-medium  text-center'>Add To Cart</p>
                                                <p className="bg-warning px-2 py-1 text-center rounded-full">
                                                    <img src={images.shoppingcart} alt="" />
                                                </p>
                                            </div>
                                        </div>
                                        <Link to={`/singleproduct/${item.id}`} className="overlay-bg flex items-center justify-center text-xl text-center rounded-2xl">
                                            <img src={images.eye} />
                                        </Link>
                                    </div>
                                </div>
                            </div>


                        );
                    } else {
                        return null;
                    }
                })}
            </div>

        </>
    );
}
