import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectedProduct, removeSelectedProduct, fetchProduct } from "../redux/actions/productAction";
import { useSelector } from "react-redux";
import './ProductDetails.css';

const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;

    const { productId } = useParams();
    const dispatch = useDispatch();

    console.log(product);


    // const fetchProdutDetail = async () => {

    //     const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
    //         console.log(err);
    //     });

    //     dispatch(selectedProduct(response.data));
    // }
//return function 
    useEffect(() => {
        if (productId && productId !== "") dispatch(fetchProduct(productId))
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productId])

    return (
        <div className="ui grid container ">
            {Object.keys(product).length === 0 ? (
                <div className="main-container">...Loading</div>
            ) : (
                <div className="ui placeholder segment m-5">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider">AND</div>
                        <div className="middle aligned row">
                            <div className="column lp">
                                <img className="ui fluid image" src={image} />
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2>
                                    <a className="ui teal tag label">${price}</a>
                                </h2>
                                <h3 className="ui brown block header">{category}</h3>
                                <p>{description}</p>
                                <div className="ui vertical animated button" tabIndex="0">
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    <div className="visible content">Add to Cart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductDetails;