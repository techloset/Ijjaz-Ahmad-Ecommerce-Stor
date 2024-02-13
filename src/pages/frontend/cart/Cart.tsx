import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeproduct, deleteproduct } from '../../../store/slice/CartSlice';
import { Link } from 'react-router-dom';
import arrrow from '../../../assets/icons/arrow-down.svg';
import xmark from '../../../assets/icons/close-circle.svg';
import { rootStateCart } from '../../../constant/Types';

const Cart: React.FC = () => {
  const [amount, setAmount] = useState(1);
  const cart = useSelector((state: rootStateCart) => state.cart.cart);
  const dispatch = useDispatch();

  const deleteAll = () => {
    dispatch(deleteproduct());
  };
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    setAmount(amount + 1);
  };

  return (
    <>
      <div className="px-[15px] w-[100%] md:px-[50px] lg:px-[60px] xl:px-[70px] mx-auto mb-[96px] mt-[31px]">
        {cart.length ? (
          <div className="flex flex-wrap justify-evenly">
            <div className="w-[100%]  lg:w-[69%]">
              <div className="relative overflow-x-auto mb-8">
                <table className="w-full text-sm text-left rtl:text-right">
                  <thead className="text-xs text-gray-700 uppercase bg-footer">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Product
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-3">
                        SubTotal
                      </th>
                      <th scope="col" className="px-6 py-3">

                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, i) => {

                      let title = item.title.slice(0, 15);
                      return (
                        <tr key={i} className='border-b-2 relative'>
                          <th scope="row" className="px-6 py-3 font-medium">
                            <div className="flex items-center">
                              <img src={item.image} alt="image" className='min-w-[50px] min-h-[50px] max-w-0 me-4' />
                              <p> {title}</p>
                            </div>
                          </th>
                          <td className="px-6 py-3">
                            ${Math.round(item.price)}
                          </td>
                          <td className="px-6 py-3">
                            <div className="flex ms-3">
                              <button className="outline-none py-2 px-3 border-gray-950 border bg-gray-200" onClick={setDecrease}>-</button>
                              <button className="outline-none py-2 px-7 border-gray-950 border bg-gray-200">{amount}</button>
                              <button className="outline-none py-2 px-3 border-gray-950 border bg-gray-200" onClick={setIncrease}>+</button>
                            </div>
                          </td>
                          <td className="px-6 py-3">
                            ${Math.round(amount * item.price)}
                          </td>
                          <td className="px-6 py-3">
                            <button className='btn absolute right-4 top-8' onClick={() => dispatch(removeproduct(item.id))}>
                              <img src={xmark} /> </button>
                          </td>

                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-wrap justify-center mb-5 sm:justify-between items-center font-medium">
                <Link to={'/catalog'} className='bg-warning text-white py-3 px-8 uppercase rounded-full'>Continue shopping</Link>

                <Link to={'#'} className='border-light border-2 my-5 sm:my-0 text-gray-400 py-3 px-8 uppercase rounded-full'>Update Cart</Link>
                <Link to={'/cart'} className='text-[#C33131] border-2 border-[#C33131] py-3 px-8 uppercase rounded-full' onClick={deleteAll}>Clear cart</Link>
              </div>
            </div>
            <div className="w-[100%]  lg:w-[29%] ">
              <div className="border-2">

                <h2 className='text-xs text-gray-700 uppercase bg-footer mb-0 text-center  font-bold py-3'>Cart Total</h2>
                <form className="flex flex-col mx-6 my-4">
                  <div className="flex flex-wrap justify-between py-3 border-b-2 font-medium">
                    <span>SubTotal</span> <span>$457674</span>
                  </div>
                  <div className="flex justify-between border-2 rounded-2xl my-[33px] items-center ">
                    <input type='email' className="w-9/12 outline-none ps-3  text-gray-400" placeholder='Enter coupon' />
                    <button className="text-sm text-primary p-3">Apply</button>
                  </div>
                  <span className='border-b-2'></span>
                  <div className="flex justify-between border-2  my-[33px] items-center rounded-2xl">
                    <input className="outline-none ps-3 w-9/12 text-gray-400" placeholder='County' />
                    <button className=" text-end font-semibold text-primary p-2"><img src={arrrow} alt="" /></button>
                  </div>
                  <div className="flex flex-wrap justify-between py-3">
                    <span>Total Amount</span> <span>$457674</span>
                  </div>
                  <Link to={'/'} className='bg-warning text-white py-3 text-center uppercase rounded-full'>
                    Proceed to ckeckout
                  </Link>
                </form>
              </div>

            </div>
          </div>
        ) : (
          <>
            <h1 className='sm:text-[55px] text-[25px] text-center sm:text-left'>
              <span className='text-primary'>No</span>
              <span className='text-warning sm:text-[50px]'> Product in</span>
              <span className='text-primary'> Your</span>
              <span className='text-warning sm:text-[50px]'> Cart</span>
            </h1>
            <div className='sm:text-left text-center my-4'>
              <Link to={'/catalog'} className='bg-warning text-white py-3 px-8 uppercase rounded-full'>Continue shopping</Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
