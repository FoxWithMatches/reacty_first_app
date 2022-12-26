import React from 'react';
import './App.css';
import { CounterComponent } from './counterComponent';

function App() {
  const handler = () => {
    console.log('on click');
  }

  return (
    <div className="App">
      <CounterComponent title={'Апельсин'} count={8} />
      <CounterComponent title={'Яблоки'} count={28}/>
      <CounterComponent title={'Сок'} />
      <button onClick={handler}>Push me</button>
    </div>
  );
}

export default App;
