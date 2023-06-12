import axios from "axios";
import fakeStoreApi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../types/action-types";

/* setProducts is an action creator that returns plain javascript object with type and other info.*/

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    };
}

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    };
}


export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}

export const fetchProducts =  () => {

    return async (dispatch, getState) => {
        const response = await fakeStoreApi.get("/products");

        dispatch({
            type: ActionTypes.FETCH_PRODUCTS,
            payload: response.data
        });

    }

}

export const fetchProduct = (productId) =>{
    return async (dispatch,getState) =>{
      const response =  await fakeStoreApi.get(`/products/${productId}`);
       dispatch({
           type:ActionTypes.FETCH_PRODUCT,
           payload:response.data
       })
    }
}
