import React, { ChangeEvent, useEffect, useState } from 'react';
import AddSection from '../../../components/addSection';
import { useDispatch, useSelector } from 'react-redux';

import { addproduct } from '../../redux/Sclice/cartSlice';

import ProCard from '../../../components/ProCard';
interface RootState {
  redux: {
    products: [];
  };
}
interface ProductType {
  title: string;
  price: number;
  image: string;
  description: string;
  id: number;
  category: string;
  
}
export default function Shop() {

  const allproducts = useSelector((state: RootState) => state.redux.products);

  const [fitlteProducts, SetfitlteProducts] = useState(allproducts);

  const dispatch = useDispatch()
  useEffect(() => {
    SetfitlteProducts(allproducts);
  }, [allproducts]);

  const getCategoryLengthArray = (products: any[], property: string) => {
    let categorySet = new Set(products.map((currElem) => currElem[property]));

    categorySet.add("All");

    const categoryLengthArray = Array.from(categorySet).map((category) => {
      const length =
        category === "All"
          ? products.length
          : products.filter((product) => product[property] === category).length;

      return { category, length };
    });

    return categoryLengthArray;
  };

  let categories = getCategoryLengthArray(allproducts, "category");


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
        <div className="flex my-10 flex-wrap justify-center sm:justify-between">
          <div className="w-[90%] sm:w-[50%] md:w-[30%] lg:w-[20%] py-7">
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
                      value={category.category}
                      onChange={updatefiltervalue}
                    />
                    <span className='ms-2'>{category.category}</span>
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
          <div className="w-[90%] sm:w-[50%] md:w-[70%] lg:w-[80%] py-7">
            <div className="flex flex-wrap mb-6 justify-center sm:gap-[24px]">

              {fitlteProducts.map((item: ProductType, i) => {

                if (i > 7) {
                  return <ProCard detail={item} />
                }
              }
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="my-16">
        <AddSection />
      </div>

    </>
  );
}
