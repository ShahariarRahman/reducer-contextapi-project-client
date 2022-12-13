import { useEffect } from 'react';
import './App.css';

const App = () => {
  useEffect(() => {
    fetch('http://localhost:5000/product')
      .then(res => res.json())
      .then(data => console.log(data));
  }, [])
  return (
    <div className="App">
      <h1 className="">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
