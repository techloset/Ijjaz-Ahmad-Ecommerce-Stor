import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchSingleProduct } from '../../store/slice/SingleProductSlice'
import img from '../../assets/images/Product/headphone3.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../store/slice/CartSlice';
import star2 from '../../assets/icons/star-2.png';
import facebook from '../../assets/icons/facebook.svg';
import whatapp from '../../assets/icons/whatsapp.svg';
import google from '../../assets/icons/google.svg';
import ProCard from '../../components/productCard/ProCard';
import { AppDispatch } from '../../store/Store';
import { cartItem, rootStateProduct, rootStateSingle } from '../../constant/Types';
import TopBar from '../../components/topBar/TopBar';

export default function SingleProduct() {
    const [amount, setAmount] = useState<number>(1);
    const products = useSelector((state: rootStateProduct) => state.redux.products);
    const singleProduct = useSelector((state: rootStateSingle) => state.singleProduct.singleProduct);
    const [Path, SetPath] = useState<string>(singleProduct.image);
    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        if (id) {
            dispatch(FetchSingleProduct(id));
        }
    }, [id, dispatch])
    useEffect(() => {
        SetPath(singleProduct.image)
    }, [singleProduct]);
    const handleAddToCart = () => {
        let cartProduct = {
            title: singleProduct.title,
            id: singleProduct.id,
            price: singleProduct.price,
            image: singleProduct.image,
            description: singleProduct.description,
            category: singleProduct.category,
            amounts: amount
        };
        dispatch(addProduct(cartProduct));
    };
    const setDecrease = () => {
        setAmount((prevAmount) => (prevAmount > 1 ? prevAmount - 1 : 1));
    };
    const setIncrease = () => {
        setAmount((prevAmount) => (prevAmount + 1));
    };
    return (
        <div className="px-[15px] w-[100%] md:px-[50px] lg:px-[60px]">
            <TopBar pageName="SingleProduct" />
            <div className="flex flex-wrap gap-[49px]">
                <div className="product-img p-2 w-full md:w-[100%] lg:w-[45%]">
                    <img
                        src={Path}
                        className="border-2 p-3 rounded-3xl h-[300px] w-[347px] md:h-[561px] md:w-[647px]"
                        alt="Product"
                    />
                    <div className="flex md:gap-3 my-3">
                        <img
                            src={singleProduct.image}
                            className="h-[100px] p-2 w-[160px] md:h-[155px] md:w-[318px] lg:w-[320px] border-2 rounded-3xl"
                            onClick={() => SetPath(singleProduct.image)}
                            alt="Logo 3"
                        />
                        <img
                            src={img}
                            className="h-[100px] ms-2 sm:ms-0 p-2 w-[160px] md:h-[155px] md:w-[318px] lg:w-[320px] border-2 rounded-3xl"
                            onClick={() => SetPath(img)}
                            alt="Logo 2"
                        />
                    </div>
                </div>
                <div className="w-full md:w-[100%] lg:w-[45%]">
                    <div>
                        <p className='mb-[11px] text-[29px] text-primary font-[500]'>{singleProduct.title}</p>
                        <p className='mb-[19px] text-[29px] text-[#4A4A4A] font-semibold'>${singleProduct.price}</p>
                        <div className="flex flex-wrap">
                            <div className="flex gap-[9px]">
                                <img src={star2} className="h-[24px] w-[24px]" alt='...' />
                                <img src={star2} className="h-[24px] w-[24px]" alt='...' />
                                <img src={star2} className="h-[24px] w-[24px]" alt='...' />
                                <img src={star2} className="h-[24px] w-[24px]" alt='...' />
                                <img src={star2} className="h-[24px] w-[24px]" alt='...' />
                            </div>
                            <p className='ms-2 mb-5'>No Reviews</p>
                        </div>
                        <p className='font-semibold mb-[16px]'>Availability:<span className="text-[#30BD57] font-light"><i className="fa-solid fa-check mx-3"></i> In stock</span></p>
                        <p className='pb-[22px] text-lg border-b-2'>Hurry up! only 20 product left in stock!</p>
                        <div className="flex items-center mt-[40px]">
                            <p className='font-semibold'>Color:</p>
                            <div className="flex gap-4">
                                <button className="outline-none ms-3 rounded-full bg-[#D0EC48] p-2 border-gray-300 border"></button>
                                <button className="outline-none rounded-full bg-[#565656] p-2"></button>
                            </div>
                        </div>

                        <div className="flex items-center my-[26px]">
                            <p className='font-semibold'>Size:</p>
                            <div className="flex flex-wrap ms-3">
                                <button className="outline-none py-1 px-4 border-gray-950 border bg-gray-200">30</button>
                                <button className="outline-none mx-4 py-1 px-4 bg-gray-200">56</button>
                                <button className="outline-none me-4 py-1 px-4 bg-gray-200">42</button>
                                <button className="outline-none py-1 px-4 bg-gray-200">48</button>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <p className='font-semibold'>Quantity:</p>
                            <div className="flex ms-3">
                                <button className="outline-none py-2 px-3 border-gray-950 border bg-gray-200" onClick={setDecrease}>-</button>
                                <button className="outline-none py-2 px-7 border-gray-950 border bg-gray-200">{amount}</button>
                                <button className="outline-none py-2 px-3 border-gray-950 border bg-gray-200" onClick={setIncrease}>+</button>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center mt-[42px] border-b-2 pb-[25px]">
                            <button className="py-4 px-7 md:px-8 lg:px-12 bg-warning mx-3 mb-3 rounded-full text-white text-center" onClick={handleAddToCart}>Add To Cart</button>
                            <button className="py-4 px-7 md:px-9 lg:px-12 bg-warning mx-3 mb-3 rounded-full text-white text-center">Buy It Now</button>
                            <button className="py-3 flex items-center justify-center px-[15px] bg-[#EEEEEE] mb-3 rounded-full text-center">
                                <i className="fa-regular fa-heart text-[20px]"></i>                                </button>

                        </div>
                        <hr />
                        <p className='font-semibold mt-[15px]'>SKU: <span className='font-light ms-2'>01133-9-9</span></p>
                        <p className='font-semibold my-[31px]'>Category: <span className='font-light ms-2'>{singleProduct.category}</span></p>
                        <div className='font-semibold flex items-center flex-wrap'>
                            <p className='me-3'>Share:</p>
                            <div>
                                <img src={facebook} alt="" />
                            </div>
                            <div>
                                <img src={whatapp} alt="" className='mx-3' />
                            </div>
                            <div>
                                <img src={google} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap item-center gap-2 justify-center my-10">
                <button className="border-2 py-3 px-6 text-primary rounded-2xl">Description</button>
                <button className="py-3 px-10 text-white bg-primary my-3 md:my-0 rounded-2xl">Reviews</button>
            </div>
            <div className="card">
                <div className="border-2 border-gray-300 rounded-xl py-3 px-5 lg:ps-[49px] lg:py-[42px] flex flex-wrap items-center">
                    <div className="content-1">
                        <h3 className='text-2xl font-semibold text-primary'>Customer reviews</h3>
                        <p className='text-l my-5'>No reviews yet</p>
                        <button className="py-3 px-6 text-white bg-primary underline">Write A Review</button>
                    </div>
                </div>
            </div>
            <h1 className="text-primary text-3xl font-semibold mb-[53px] mt-[64px]">Related Product</h1>
            <div className="flex flex-wrap mb-6 justify-center sm:gap-[24px]">
                {products.map((item: cartItem, i) => {
                    if (i<4) {
                        return (
                            <div key={i}>
                                <ProCard detail={item} />
                            </div>
                        )
                    }
                }
                )}
            </div>
        </div>
    );
}
