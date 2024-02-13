import React, { createContext, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FetchProduct } from '../store/Slice/ProductSclice';
import { AppDispatch } from '../store/Store'; 

const GetProduct = createContext({});

export default function GetProductProvider(props: { children: React.ReactNode }) {
  const dispatch = useDispatch<AppDispatch>(); 

  useEffect(() => {
    dispatch(FetchProduct());
  }, [dispatch]);
  return (
    <GetProduct.Provider value={{}}>
      {props.children}
    </GetProduct.Provider>
  );
}

export const useGetProduct = () => useContext(GetProduct);
