import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { actionTypes } from '../state/ProductState/actionTypes';
import { initialState, productReducer } from '../state/ProductState/productReducer';
const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialState);
    useEffect(() => {
        dispatch({ type: actionTypes.FETCHING_START });
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data }))
            .catch(err => dispatch({ type: actionTypes.FETCHING_ERROR }));
    }, []);

    const value = {
        state, dispatch
    };
    return (
        <PRODUCT_CONTEXT.Provider value={value} >
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(PRODUCT_CONTEXT);
    return context;
}

export default ProductProvider;