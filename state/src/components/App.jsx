import { useState } from 'react';
import './App.css';
import Counter from './Counter/Counter';
import LikeButton from './LikeButton/LikeButton';

function App() {

  const [theme, setTheme] = useState('light')

  const handleThemeChange = event => {
    setTheme(event.target.value)
  }

  return (
    <div className={`App ${theme}`}>

      <select onChange={handleThemeChange}>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>

      <hr />

      <LikeButton />

      <hr />

      <Counter />

      <hr />
    </div>
  );
}

export default App