import React, { ChangeEvent, useEffect, useState } from 'react';
import AddSection from '../../../components/addSection';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FetchProduct } from '../../redux/Sclice/ProductSclice';
import { addproduct } from '../../redux/Sclice/cartSlice';
import images from '../../../assets/icons';

interface RootState {
  redux: {
    products: [];
  };
}
export default function Shop() {
  // const { state } = useHookContext();
  const state = useSelector((state: RootState) => state.redux.products);

  // const products = stat;


  const [allproducts, setallproducts] = useState(state);
  const [fitlteProducts, SetfitlteProducts] = useState(state);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(FetchProduct() as any)
  }, [dispatch])








  const getUnique = (products: any[], property: string) => {
    let newVal = products.map((currElem) => {
      return currElem[property];
    });
    const cata: string[] = ["All", ...Array.from(new Set(newVal))];

    return cata;
  };

  let categories = getUnique(state, "category");

  const updatefiltervalue = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    let tempfilterproduct: any;
    let fitlte_Products = allproducts;
    tempfilterproduct = [...fitlte_Products];

    if (value !== "All") {
      tempfilterproduct = tempfilterproduct.filter((item: any) => {
        return item.category === value;
      });
    }

    SetfitlteProducts(tempfilterproduct);
  };
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
        <div className="flex my-10 flex-wrap justify-between">
          <div className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[20%] py-7">
            <div className="flex justify-between">
              <p className='font-semibold text-overlay'>Categories</p>
              <p>Reset</p>
            </div>
            <div className="my-3">
              {categories.map((category, i) => (
                <div key={i} className="flex justify-between my-3">
                  <p>
                    <input
                      className="form-check-input"
                      type="radio"
                      id={`flexRadioDefault${i + 1}`}
                      name="category"
                      value={category}
                      onChange={updatefiltervalue}
                    />
                    <span className='ms-2'>{category}</span>
                  </p>
                  <p>{category.length}</p>
                </div>
              ))}
            </div>
            <hr />
            <div className="my-3">
              <p className='font-semibold text-overlay'>Availability</p>
              <div className="flex justify-between my-3">
                <p>0 selected</p>
                <p>Reset</p>
              </div>
              <div className="flex justify-between my-3">
                <p><input type="checkbox" /><span className='ms-2'>In Stock</span></p>
                <p>5</p>
              </div>
              <div className="flex justify-between my-3" >
                <p><input type="checkbox" /><span className='ms-2'>Out Of Stock</span></p>
                <p>0</p>
              </div>
            </div>
            <hr />
            <div className="my-3">
              <p className='font-semibold text-overlay'>Product type</p>
              <div className="flex justify-between my-3">
                <p>0 selected</p>
                <p>Reset</p>
              </div>
              <div className="flex justify-between my-3">
                <p><input type="checkbox" /><span className='ms-2'>Smart-Watch</span></p>
                <p>5</p>
              </div>
            </div>
            <hr />
            <div className="my-3">
              <p className='font-semibold text-overlay'>Brand</p>
              <div className="flex justify-between my-3">
                <p>0 selected</p>
                <p>Reset</p>
              </div>
              <div className="flex justify-between my-3">
                <p><input type="checkbox" /><span className='ms-2'>Smart-Watch</span></p>
                <p>5</p>
              </div>
            </div>
            <hr />
            <div className="my-3">
              <p className='font-semibold text-overlay'>Colors</p>
              <div className="flex justify-between my-3">
                <p>0 selected</p>
                <p>Reset</p>
              </div>
              <div className="flex justify-between my-3">
                <span className="w-[15px] h-[15px] bg-[#EDA415] rounded-full"></span>
                <span className="w-[15px] h-[15px] bg-[#E42424] rounded-full"></span>
                <span className="w-[15px] h-[15px] bg-[#1B5A7D] rounded-full"></span>
                <span className="w-[15px] h-[15px] bg-[#ACACAC] rounded-full"></span>
                <span className="w-[15px] h-[15px] bg-[#1D5F23] rounded-full"></span>
                <span className="w-[15px] h-[15px] bg-[#2E56A3] rounded-full"></span>
                <span className="w-[15px] h-[15px] bg-[#8131A7] rounded-full"></span>
                <span className="w-[15px] h-[15px] bg-[#BC2944] rounded-full"></span>
                <span className="w-[15px] h-[15px] bg-[#9BC14C] rounded-full"></span>
              </div>
            </div>
            <hr />
            <div className="my-3">
              <p className='font-semibold text-overlay'>Size</p>
              <div className="flex justify-between my-3">
                <p>0 selected</p>
                <p>Reset</p>
              </div>
              <div className="flex justify-between my-3">
                <p><input type="checkbox" /><span className='ms-2'>S</span></p>
                <p>5</p>
              </div>
              <div className="flex justify-between my-3">
                <p><input type="checkbox" /><span className='ms-2'>M</span></p>
                <p>5</p>
              </div>
              <div className="flex justify-between my-3">
                <p><input type="checkbox" /><span className='ms-2'>X</span></p>
                <p>5</p>
              </div>
              <div className="flex justify-between my-3">
                <p><input type="checkbox" /><span className='ms-2'>XX</span></p>
                <p>5</p>
              </div>
              <div className="flex justify-between my-3">
                <p><input type="checkbox" /><span className='ms-2'>XXL</span></p>
                <p>5</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="w-[100%] sm:w-[50%] md:w-[70%] lg:w-[80%] py-7">
            <div className="flex flex-wrap mb-6 justify-center">
              {fitlteProducts.map((item, i) => {
                let { image, title, price, id } = item;
                let name: any = title;
                let tname: string = name.slice(0, 20) as string;
                if (i < 12) {

                  return (
                    <div key={i} className='mb-3'>
                      <div key={i} className='mb-4'>
                        <div className="card">
                          <div className="border-2 border-gray-300 rounded-3xl p-3 px-5 min-w-[100%]  sm:min-w-[280px]  md:min-w-[300px] lg:min-w-[330px] relative cardmain sm:mx-2">
                            <div className="image">
                              <span className='overlay-bg absolute right-4 top-4 lg:right-7 lg:top-5 p-2 text-center text-white w-8 h-8 flex items-center rounded-full'>
                                <img src={images.heart} alt="" />
                              </span>
                              <img src={image} alt="Product" className='h-[200px] w-[200px] mx-auto' />
                            </div>
                            <div className="content">
                              <h3 className='mb-3 text-xl font-semibold text-primary'>{tname}..</h3>
                              <p className='text-l font-semibold text-primary'>${price}</p>
                              <div className="star-icon flex mt-2">
                                <img src={images.star} alt="" />
                                <img src={images.star} className="ms-1" />
                                <img src={images.star} className="ms-1" />
                                <img src={images.star} className="ms-1" />
                                <img src={images.star} className="ms-1" />
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
                                <Link to={`/singleproduct/${id}`} className="overlay-bg flex items-center justify-center text-xl text-center rounded-2xl">
                                  <img src={images.eye} />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="my-16">
          <AddSection />
        </div>
      </div>

    </>
  );
}
