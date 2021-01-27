import {SET_PRODUCTS} from "../action-types";
import {services} from "../../services";

const {productsServices} = services;

export const setProducts = () => async (dispatch) => {
   const response = await productsServices.getProducts();
   const data = await response.json();

   dispatch({type: SET_PRODUCTS, payload: data});
};