import React, { useEffect, useState } from 'react'
import ProCard from '../../../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import {FetchProduct} from '../../redux/Sclice/ProductSclice'

interface ReduxState {
    redux: {
      products: [];
      // Add other properties as needed
    };
    // Add other slices or properties as needed
  }
export default function Product() {
    const state = useSelector((state: ReduxState) => state);
    const [Products, SetProduct] = useState([])
    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch(FetchProduct())
        SetProduct(state.redux.products)
        console.log("🚀 ~ useEffect ~ state.redux.products:", state)
    }, [dispatch])
    // const eightProducts = Products.slice(5, 13);
    return (
        <>
            <div className="container">
                <div className="flex justify-between">
                    <p className='text-[30px] font-semibold text-[#2E8FC5]'>Popular products</p>
                    <p className='text-[30px] font-semibold text-[#2E8FC5]'>Popular products</p>
                </div>
                <div className="flex mt-10 flex-wrap mb-6 justify-center">
                    {/* {eightProducts.map((product, i) => {
                        let title = product.title.slice(0, 20)
                        return (
                            <div key={i} className='mb-3'>
                                {/* Name={title} Price={product.price} img={product.image} id={product.id} product={product} */}
                    {/* </div> */}
                    {/* ) */}
                    {/* })} */}
                    <ProCard />
                    <ProCard />
                    <ProCard />
                    <ProCard />
                    <ProCard />
                    <ProCard />
                    <ProCard />
                    <ProCard />
                </div>
            </div>
        </>
    )
}
