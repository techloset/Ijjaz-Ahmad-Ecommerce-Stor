import React, { createContext, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FetchProduct } from '../redux/Sclice/ProductSclice';

const GetProduct = createContext({});

export default function GetProductProvider(props: { children: React.ReactNode }) {
  const dispatch = useDispatch();

  useEffect(() => {
   
    dispatch(FetchProduct() as any);
  }, []);

  return (
    <GetProduct.Provider value={{}}>
      {props.children}
    </GetProduct.Provider>
  );
}

export const useGetProduct = () => useContext(GetProduct);
