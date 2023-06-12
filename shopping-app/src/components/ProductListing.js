import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
import axios from 'axios';
import ProductComponent from "./ProductComponent";
import { useDispatch } from "react-redux";
import { setProducts,fetchProducts } from "../redux/actions/productAction";


const ProductListing = () => {
    // const products = useSelector((state) => state);
    const dispatch = useDispatch();

    // const fetchProducts = async () => {
    //     const response = await axios.get("https://fakestoreapi.com/products").catch(err => {
    //         console.log(err);
    //     })
    //     dispatch(setProducts(response.data));
    //     console.log(response.data);
    // }

    useEffect(() => { 
        dispatch(fetchProducts())
     }, []);


    return (<div className="ui grid container">
        <ProductComponent />
    </div>)
}

export default ProductListing;