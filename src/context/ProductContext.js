import React, { createContext, useEffect, useState } from 'react';
export const PRODUCT_CONTEXT = createContext();

const ProductContext = ({ children }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    const value = {
        data,
    };
    return (
        <PRODUCT_CONTEXT.Provider value={value} >
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};

export default ProductContext;