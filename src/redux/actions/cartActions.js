

import * as actionTypes from '../constrants/cartConstrant';

import axios from 'axios';

export const addToCart = (id, quantity,decrement=false) => async (dispatch) => {
    try { 
        const { data } = await axios.get(`https://deploy-mern-ten.vercel.app/product/${id}`);   

        dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });

    } catch (error) {
        console.log('Error while calling cart API');
    }
};

export const removeFromCart = (id) => (dispatch) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

};
