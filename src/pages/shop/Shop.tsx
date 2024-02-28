import React, { ChangeEvent, useEffect, useState } from 'react';
import AddSection from '../../components/addSection/Add';
import { useSelector } from 'react-redux';
import ProCard from '../../components/productCard/ProCard';
import { cartItem, rootStateProduct } from '../../constant/Types';
import TopBar from '../../components/topBar/TopBar';
export default function Shop() {


  const allProducts = useSelector((state: rootStateProduct) => state.redux.products);
  const [filterProducts, SetFilterProducts] = useState<cartItem[]>([]);
  useEffect(() => {
    SetFilterProducts(allProducts);
  }, [allProducts]);
  const getCategoryLengthArray = (products: cartItem[]) => {

    let categorySet = new Set(products.map((currElem) => currElem.category));
    categorySet.add("All");
    const categoryLengthArray = Array.from(categorySet).map((category) => {
      const length =
        category === "All"
          ? products.length
          : products.filter((product) => product.category === category).length;
      return { category, length };
    });

    return categoryLengthArray;
  };

  let categories = getCategoryLengthArray(allProducts);

  const updateFilterValue = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    let tempFilterProduct: cartItem[] = [];
    if (value === "All") {
      tempFilterProduct = allProducts;
    } else {
      tempFilterProduct = allProducts.filter((item: cartItem) => item.category === value);
    }
    SetFilterProducts(tempFilterProduct);
  };

  return (
    <>
      <div className="px-[15px] w-[100%] md:px-[50px] lg:px-[60px] xl:px-[70px]">
        <TopBar pageName="All Category" />
        <div className="flex my-10 flex-wrap justify-center sm:justify-between">
          <div className="w-[90%] sm:w-[50%] md:w-[30%] lg:w-[20%] py-7">
            <div className="flex justify-between">
              <p className='font-semibold text-footer-300'>Categories</p>
              <p>Reset</p>
            </div>
            <div className="my-3">
              {categories.map((category, i) => {
                return (
                  <div key={i} className="flex justify-between my-3">
                    <div className="flex items-center mb-4">
                      <input id={category.category} type="radio" name="category" className="w-[30px] h-[30px] text-[#B3D4E5] bg-[#B3D4E5] border-[#B3D4E5] rounded-[8px] focus:ring-[#B3D4E5] dark:focus:ring-[#B3D4E5] dark:ring-offset-[#B3D4E5] focus:ring-2 dark:bg-[#B3D4E5] dark:border-[#B3D4E5] appearance-none" value={category.category} onChange={updateFilterValue} />
                      <label htmlFor={category.category} className="ms-2">{category.category}</label>
                    </div>
                    <p>{category.length}</p>
                  </div>
                )
              })}
            </div>
            <hr />
            <div className="my-3">
              <p className='font-semibold text-footer-300'>Availability</p>
              <div className="flex justify-between my-3">
                <p>0 selected</p>
                <p>Reset</p>
              </div>
              <div className="flex justify-between my-3">
                <div className=" flex items-center mb-4">
                  <input id="In Stock" type="radio" name="category" className="w-[30px] h-[30px] text-[#B3D4E5] bg-[#B3D4E5] border-[#B3D4E5] rounded-[8px] focus:ring-[#B3D4E5] dark:focus:ring-[#B3D4E5] dark:ring-offset-[#B3D4E5] focus:ring-2 dark:bg-[#B3D4E5] dark:border-[#B3D4E5] appearance-none" value="In Stock" />
                  <label htmlFor="In Stock" className="ms-2">In Stock</label>
                </div>
                <p>5</p>
              </div>
              <div className="flex justify-between my-3" >
                <div className=" flex items-center mb-4">
                  <input id="Out Of Stock" type="radio" name="category" className="w-[30px] h-[30px] text-[#B3D4E5] bg-[#B3D4E5] border-[#B3D4E5] rounded-[8px] focus:ring-[#B3D4E5] dark:focus:ring-[#B3D4E5] dark:ring-offset-[#B3D4E5] focus:ring-2 dark:bg-[#B3D4E5] dark:border-[#B3D4E5] appearance-none" value="Out Of Stock" />
                  <label htmlFor="Out Of Stock" className="ms-2">Out Of Stock</label>
                </div>
                <p>0</p>
              </div>
            </div>
            <hr />
            <div className="my-3">
              <p className='font-semibold text-footer-300'>Product type</p>
              <div className="flex justify-between my-3">
                <p>0 selected</p>
                <p>Reset</p>
              </div>
              <div className="flex justify-between my-3">
                <div className=" flex items-center mb-4">
                  <input id="Smart-Watch" type="radio" name="category" className="w-[30px] h-[30px] text-[#B3D4E5] bg-[#B3D4E5] border-[#B3D4E5] rounded-[8px] focus:ring-[#B3D4E5] dark:focus:ring-[#B3D4E5] dark:ring-offset-[#B3D4E5] focus:ring-2 dark:bg-[#B3D4E5] dark:border-[#B3D4E5] appearance-none" value="Smart-Watch" />
                  <label htmlFor="Smart-Watch" className="ms-2">Smart-Watch</label>
                </div>
                <p>5</p>
              </div>
            </div>
            <hr />
            <div className="my-3">
              <p className='font-semibold text-footer-300'>Brand</p>
              <div className="flex justify-between my-3">
                <p>0 selected</p>
                <p>Reset</p>
              </div>
              <div className="flex justify-between my-3">
                <div className=" flex items-center mb-4">
                  <input id="Smart-Watch" type="radio" name="category" className="w-[30px] h-[30px] text-[#B3D4E5] bg-[#B3D4E5] border-[#B3D4E5] rounded-[8px] focus:ring-[#B3D4E5] dark:focus:ring-[#B3D4E5] dark:ring-offset-[#B3D4E5] focus:ring-2 dark:bg-[#B3D4E5] dark:border-[#B3D4E5] appearance-none" value="Smart-Watch" />
                  <label htmlFor="Smart-Watch" className="ms-2">Smart-Watch</label>
                </div>
                <p>5</p>
              </div>
            </div>
            <hr />
            <div className="my-3">
              <p className='font-semibold text-footer-300'>Colors</p>
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
              <p className='font-semibold text-footer-300'>Size</p>
              <div className="flex justify-between my-3">
                <p>0 selected</p>
                <p>Reset</p>
              </div>
              <div className="flex justify-between my-3">
                <div className=" flex items-center mb-4">
                  <input id="S" type="radio" name="category" className="w-[30px] h-[30px] text-[#B3D4E5] bg-[#B3D4E5] border-[#B3D4E5] rounded-[8px] focus:ring-[#B3D4E5] dark:focus:ring-[#B3D4E5] dark:ring-offset-[#B3D4E5] focus:ring-2 dark:bg-[#B3D4E5] dark:border-[#B3D4E5] appearance-none" value="S" />
                  <label htmlFor="S" className="ms-2">S</label>
                </div>
                <p>5</p>
              </div>
              <div className="flex justify-between my-3">
                <div className=" flex items-center mb-4">
                  <input id="M" type="radio" name="category" className="w-[30px] h-[30px] text-[#B3D4E5] bg-[#B3D4E5] border-[#B3D4E5] rounded-[8px] focus:ring-[#B3D4E5] dark:focus:ring-[#B3D4E5] dark:ring-offset-[#B3D4E5] focus:ring-2 dark:bg-[#B3D4E5] dark:border-[#B3D4E5] appearance-none" value="M" />
                  <label htmlFor="M" className="ms-2">M</label>
                </div>
                <p>5</p>
              </div>
              <div className="flex justify-between my-3">
                <div className=" flex items-center mb-4">
                  <input id="X" type="radio" name="category" className="w-[30px] h-[30px] text-[#B3D4E5] bg-[#B3D4E5] border-[#B3D4E5] rounded-[8px] focus:ring-[#B3D4E5] dark:focus:ring-[#B3D4E5] dark:ring-offset-[#B3D4E5] focus:ring-2 dark:bg-[#B3D4E5] dark:border-[#B3D4E5] appearance-none" value="X" />
                  <label htmlFor="X" className="ms-2">X</label>
                </div>
                <p>5</p>
              </div>
              <div className="flex justify-between my-3">
                <div className=" flex items-center mb-4">
                  <input id="XX" type="radio" name="category" className="w-[30px] h-[30px] text-[#B3D4E5] bg-[#B3D4E5] border-[#B3D4E5] rounded-[8px] focus:ring-[#B3D4E5] dark:focus:ring-[#B3D4E5] dark:ring-offset-[#B3D4E5] focus:ring-2 dark:bg-[#B3D4E5] dark:border-[#B3D4E5] appearance-none" value="XX" />
                  <label htmlFor="XX" className="ms-2">XX</label>
                </div>
                <p>5</p>
              </div>
              <div className="flex justify-between my-3">
                <div className=" flex items-center mb-4">
                  <input id="XXL" type="radio" name="category" className="w-[30px] h-[30px] text-[#B3D4E5] bg-[#B3D4E5] border-[#B3D4E5] rounded-[8px] focus:ring-[#B3D4E5] dark:focus:ring-[#B3D4E5] dark:ring-offset-[#B3D4E5] focus:ring-2 dark:bg-[#B3D4E5] dark:border-[#B3D4E5] appearance-none" value="XXL" />
                  <label htmlFor="XXL" className="ms-2">XXL</label>
                </div>
                <p>5</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="w-[90%] sm:w-[50%] md:w-[70%] lg:w-[80%] py-7">
            <div className="flex flex-wrap mb-6 justify-center sm:gap-[24px]">

              {filterProducts.map((item: cartItem, i) => {
                if (i < 12) {
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
        </div>
      </div>
      <div className="my-16">
        <AddSection />
      </div>

    </>
  );
}
