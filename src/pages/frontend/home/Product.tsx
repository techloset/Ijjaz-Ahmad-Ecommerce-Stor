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

}

interface RootState {
    redux: {
        products: [];
    };
}
export default function Product() {
    const products = useSelector((state: RootState) => state.redux.products);



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

                <div className="flex mt-10 flex-wrap mb-6 justify-center gap-[31px]">
                    {products.map((item: ProductType, i) => {

                        if (i < 8) {
                            return <ProCard detail={item} />
                        }
                    }
                    )}
                </div>
                <div className="flex justify-center items-center my-20">
                    <span className="bg-warning border-2 px-2 py-2 rounded-full"></span>
                    <span className="border-2 px-2 py-2 rounded-full mx-2"></span>
                    <span className="border-2 px-2 py-2 rounded-full"></span>
                </div>
            </div>
        </>
    );
}
