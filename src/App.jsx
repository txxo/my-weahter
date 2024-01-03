
import { createSignal } from 'solid-js';
import './App.css'
import Weather from './components/Weather'

function App() {
  const [selectOption, setSelectedOption] = createSignal(null)
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const getContent = () => {
    switch (selectOption()) {
      case 'A':
        return <Weather />;
      case 'B':
        return null;
      default:
        return null;
    }
  };


  return (
    <>
      <button onClick={() => handleOptionClick('A')}>9日天氣預測</button>
      <button onClick={() => handleOptionClick('B')}>空白頁面</button>
      <div class='content'>{getContent}</div>
    </>

  )
}

export default App