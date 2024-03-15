import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import { fetchProducts } from '../redux/slices/productSlice';

const ProductsPage = () => {

        const dispatch = useDispatch();
        const Data = useSelector((state) => state.products);
        console.log(Data)

        if(Data.isLoading){
          return <h1>Loading......</h1>
        }

        const deleteHandler = () =>{

        }
  return (
    <div>
        <h2>Products</h2>
        <button onClick={(e) => dispatch(fetchProducts())}>Fetch Products</button>
        {
          Data.products.map((e, i) => <li key={i}>{e.title} &nbsp; <button onClick={()=>deleteHandler(i)}>Delete</button> <button>Edit</button></li>)
        }
    </div>
  )
}

export default ProductsPage;