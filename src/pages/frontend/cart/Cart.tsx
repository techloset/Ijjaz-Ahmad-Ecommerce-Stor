import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeproduct, deleteproduct } from '../../redux/Sclice/cartSlice';
import { Link } from 'react-router-dom';
import arrrow from '../../../assets/icons/arrow-down.svg';
import xmark from '../../../assets/icons/close-circle.svg';
interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  max: number;
}

const Cart: React.FC = () => {
  const [amount, setAmount] = useState(1);
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();

  interface RootState {
    cart: {
      cart: CartItem[];
    };
  }
  const deleteall = () => {
    dispatch(deleteproduct());
  };

  return (
    <>
      <div className="container mx-auto my-8">
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
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, i) => {
                      const setDecrease = () => {
                        amount > 1 ? setAmount(amount - 1) : setAmount(1);
                      };

                      const setIncrease = () => {
                        setAmount(amount + 1);
                      };

                      let title = item.title.slice(0, 15);
                      return (
                        <tr key={i} className='border-b-2 relative'>
                          <th scope="row" className="px-6 py-3 font-medium">
                            <div className="flex items-center">
                              <img src={item.image} alt="image" className='min-w-[50px] min-h-[50px] max-w-0 me-4' />
                              {title}
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
                          <button className='btn absolute right-4 top-8' onClick={() => dispatch(removeproduct(item.id))}>
                            <img src={xmark} />                            </button>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-wrap justify-center mb-5 sm:justify-between items-center font-medium">
                <Link to={'/shop'} className='bg-warning text-white py-3 px-8 uppercase rounded-full'>Continue shopping</Link>

                <Link to={'#'} className='border-gray-400 border-2 my-5 sm:my-0 text-gray-400 py-3 px-8 uppercase rounded-full'>Update Cart</Link>
                <Link to={'/cart'} className='text-[#C33131] border-2 border-[#C33131] py-3 px-8 uppercase rounded-full' onClick={deleteall}>Clear cart</Link>
              </div>
            </div>
            <div className="w-[100%]  lg:w-[29%] border-2">
              <h2 className='text-xs text-gray-700 uppercase bg-footer mb-0 text-center  font-bold py-3'>Cart Total</h2>


              <form className="flex flex-col mx-6 my-4">
                <div className="flex flex-wrap justify-between py-3 border-b-2 font-medium">
                  <span>SubTotal</span> <span>$457674</span>
                </div>
                <div className="flex justify-between border-2 rounded-2xl mt-4 items-center ">
                  <input type='email' className="w-9/12 outline-none ps-3  text-gray-400" placeholder='Enter coupon' />
                  <button className="text-sm text-primary p-3">Apply</button>
                </div>
                <span className='border-b-2  my-4'></span>
                <div className="flex justify-between border-2  items-center rounded-2xl">
                  <input className="outline-none ps-3 w-9/12 text-gray-400" placeholder='County' />
                  <button className=" text-end font-semibold text-primary p-2"><img src={arrrow} alt="" /></button>
                </div>
                
                <div className="flex flex-wrap justify-between py-3">
                  <span>Total Amount</span> <span>$457674</span>
                </div>
                  <Link to={'/'} className='bg-warning text-white py-2 px-3 text-center uppercase rounded-full'>
                    Proceed to ckeckout
                  </Link>
              </form>

            </div>
          </div>
        ) : (
          <>
            <h1 className='sm:text-[55px] text-[25px] text-center sm:text-left'>
              <span className='text-primary'>No</span>
              <span className='text-warning sm:text-[50px]'> Product</span>
              <span className='text-primary'> Your</span>
              <span className='text-warning sm:text-[50px]'> Cart</span>
            </h1>
            <div className='sm:text-left text-center my-4'>
              <Link to={'/shop'} className='bg-warning text-white py-3 px-8 uppercase rounded-full'>Continue shopping</Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
