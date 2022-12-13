import { createContext, useEffect, useState } from 'react';
import './App.css';

export const PRODUCT_CONTEXT = createContext();

const App = () => {


  return (
    <PRODUCT_CONTEXT.Provider  >
      <div className="App">
        <h1 className="">
          aaa
        </h1>
      </div>
    </PRODUCT_CONTEXT.Provider>
  );
}

export default App;
