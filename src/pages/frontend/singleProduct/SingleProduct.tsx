import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FetchSingleProduct } from '../../redux/Sclice/singleProductSlice'
import images from '../../../assets/images/Product/headphone3.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { addproduct } from '../../redux/Sclice/cartSlice';

interface ProductType {
    title: string;
    price: number;
    image: string;
    description: string;
    id: number;
    category: string;
}

interface SingleProductState {
    singleProduct: ProductType;
}

interface RootState {
    redux: {
        products: [];
    };
    singleProduct: SingleProductState;
}

export default function SingleProduct() {
    const [Path, SetPath] = useState<string>(images);
    const [amount, setAmount] = useState<number>(1);

    const products = useSelector((state: RootState) => state.redux.products);
    const singleProduct = useSelector((state: RootState) => state.singleProduct.singleProduct);

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            dispatch(FetchSingleProduct(id) as any);
        }
    }, [id, dispatch]);



    const RelatedProduct = products.slice(2, 6);
    const handleAddToCart = () => {
        let CartProduct = {
            title: singleProduct.title,
            id: singleProduct.id,
            price: singleProduct.price,
            image: singleProduct.image,
            description: singleProduct.description,
            category: singleProduct.category,
            amounts:amount
        };
        dispatch(addproduct(CartProduct) as any);
    };

    const setDecrease = () => {
        setAmount((prevAmount) => (prevAmount > 1 ? prevAmount - 1 : 1));
    };

    const setIncrease = () => {
        setAmount((prevAmount) => (prevAmount + 1));
    };

    return (
        <>
            <div className="container">
                <div className="flex flex-wrap justify-between my-10">
                    <div className="product-img p-2 mx-auto min-w-full md:w-[50%] lg:min-w-[50%]">
                        <img
                            src={Path}
                            className="border-2 p-3 rounded-3xl h-[300px] sm:h-[450px] w-[670px]"
                            alt="Product"
                        />
                        <div className="flex md:gap-3 my-3 min-w-full md:min-w-[50%] lg:min-w-[50%]">

                            <img
                                src={singleProduct.image}
                                className=" h-[100px] w-[150px] md:h-[200px] md:w-[325px] border-2 rounded-3xl"
                                onClick={() => SetPath(singleProduct.image)}
                                alt="Logo 3"
                            />

                            <img
                                src={images}
                                className="h-[100px] w-[150px] md:h-[200px] md:w-[325px] border-2 rounded-3xl"
                                onClick={() => SetPath(images)}
                                alt="Logo 2"
                            />


                        </div>
                    </div>
                    <div className="py-7 mx-auto w-full md:w-[50%] lg:w-[50%]">
                        <div>
                            <p className='mb-5 text-4xl text-primary font-semibold'>{singleProduct.title}</p>
                            <p className='text-2xl mb-3 text-primary font-semibold'>${singleProduct?.title}</p>
                            <div className="flex flex-wrap">
                                <div className="icon">
                                    <i className="fa-regular fa-star text-warning text-xl mx-1"></i>
                                    <i className="fa-regular fa-star text-warning text-xl mx-1"></i>
                                    <i className="fa-regular fa-star text-warning text-xl mx-1"></i>
                                    <i className="fa-regular fa-star text-warning text-xl mx-1"></i>
                                    <i className="fa-regular fa-star text-warning text-xl mx-1"></i>
                                </div>
                                <p className='ms-2 mb-5'>No Reviews</p>
                            </div>
                            <p className='mb-3 font-semibold'>Availability:<span className="text-[#30BD57] font-light"><i className="fa-solid fa-check mx-3"></i> In stock</span></p>
                            <p className='mb-5 text-lg'>Hurry up! only 20 product left in stock!</p>
                            <hr />
                            <p className='lg:w-[565px] md:w-[300px] sm:w-[200px] py-5'>{singleProduct.description}</p>
                            <hr />
                            <div className="flex items-center mt-5">
                                <p className='font-semibold'>Quantity:</p>
                                <div className="flex ms-3">
                                    <button className="outline-none py-2 px-3 border-gray-950 border bg-gray-200" onClick={setDecrease}>-</button>
                                    <button className="outline-none py-2 px-7 border-gray-950 border bg-gray-200">{amount}</button>
                                    <button className="outline-none py-2 px-3 border-gray-950 border bg-gray-200" onClick={setIncrease}>+</button>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center my-5">
                                <button className="py-4 px-7 md:px-8 lg:px-12 bg-warning mx-3 mb-3 rounded-full text-white text-center" onClick={handleAddToCart}>Add To Cart</button>
                                <button className="py-4 px-7 md:px-9 lg:px-12 bg-warning mx-3 mb-3 rounded-full text-white text-center">Buy It Now</button>
                                <button className="py-2 px-[15px] bg-gray-200 mb-3 rounded-full text-center">
                                    <i className="fa-regular fa-heart"></i>
                                </button>
                            </div>
                            <hr />
                            <p className='font-semibold mb-4 mt-6'>ID: <span className='font-light ms-2'>{id}</span></p>
                            <p className='font-semibold my-4'>Category: <span className='font-light ms-2'>{singleProduct.category}</span></p>
                            <div className='font-semibold flex items-center flex-wrap my-4'>
                                <p>Share:</p>
                                <div>
                                    <i className="fa-brands fa-google text-xl mx-3"></i>
                                </div>
                                <div>
                                    <i className="fa-brands fa-square-facebook border-black text-xl mx-3"></i>
                                </div>
                                <div>
                                    <i className="fa-brands fa-whatsapp text-xl mx-3"></i>
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
                    <div className="border-2 border-gray-300 rounded-xl p-3 px-5 flex flex-wrap items-center">
                        <div className="content-1">
                            <h3 className='text-2xl font-semibold text-primary'>Customer reviews</h3>
                            <p className='text-l my-5'>No reviews yet</p>
                            <button className="py-3 px-6 text-white bg-primary underline">Write A Review</button>
                        </div>
                    </div>
                </div>
                <h1 className="text-primary text-3xl font-semibold mb-5 mt-10">Related Product</h1>
                <div className="flex flex-wrap mb-6 justify-center">
                    {RelatedProduct.map((item, i) => {
                        let { image, title, price, id } = item
                        let name: any = title;
                        let tname: string = name.slice(0, 20) as string;
                        return (
                            <div key={i} className='mb-4'>
                                <div className="card">
                                    <div className="border-2 border-gray-300 rounded-3xl p-3 px-5 min-w-[100%]  sm:min-w-[280px]  md:min-w-[300px] lg:min-w-[330px] relative cardmain sm:mx-2">
                                        <div className="image">
                                            <span className='overlay-bg absolute right-4 top-4 lg:right-7 lg:top-5 p-2 text-center text-white w-8 h-8 flex items-center rounded-full'>
                                                <i className="fa-regular fa-heart text-sm me-8"></i>
                                            </span>
                                            <img src={image} alt="Product" className='h-[200px] w-[200px] mx-auto' />
                                        </div>
                                        <div className="content">
                                            <h3 className='mb-3 text-xl font-semibold text-primary'>{tname}...</h3>
                                            <p className='text-l font-semibold text-primary'>${price}</p>
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
                                                    <button className="flex justify-between items-center text-center cursor-pointer">
                                                        <p className='font-medium ms-1 md:ms-2 text-center'>Add To Cart</p>
                                                        <div className="bg-warning p-2 py-1 text-center ms-3 md:ms-7 rounded-full">
                                                            <i className="fa-solid fa-cart-shopping"></i>
                                                        </div>
                                                    </button>
                                                </div>
                                                <Link to={`/singleproduct/${id}`} className="overlay-bg flex items-center justify-center text-xl p-2 text-center rounded-2xl">
                                                    <i className="fa-solid fa-eye"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
