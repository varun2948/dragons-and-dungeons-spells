import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './slice/counter.slice';
import { AppDispatch } from './store/store';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [])

  return (
    <div className="App">
      <div className="spells-container">
        <div className='card'>
          <h3 className='card-title'>Avadakadabra</h3>
          <div className='card-body'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, perspiciatis sit! Beatae eius ipsa rerum, sapiente ea provident doloremque quidem quibusdam perferendis? Soluta, magni dolor ea iusto eos recusandae ullam.</div>
        </div>
      </div>
    </div>
  );
}

export default App;
