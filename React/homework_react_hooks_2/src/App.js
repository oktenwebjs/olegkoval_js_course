import React, {useEffect, useState, memo, useCallback, useMemo} from "react";
import './App.css';

const Timer = () => {
  let [seconds, incSeconds] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => incSeconds((seconds) => seconds + 1), 1000);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return <h2>Is visible {seconds} seconds</h2>
}

const Title = memo(({onClick}) => {
  return (
      <h3>This is the title with Memo hook {onClick()}</h3>
  );
});

const productsPrice = [1.05, 2.25, 3, 99, 125];

function App() {
  const [isVisible, setVisible] = useState(false);
  const [prices, setPrices] = useState(productsPrice);

  const updateTitleSuffix = useCallback(() => Math.random(), [isVisible]);

  const productsTotal = useMemo(
      () => prices.reduce((acc, el) => (acc += el), 0).toFixed(2),
      [prices]
  );

  return (
    <div className="App">
      <h1>React Hooks part #2</h1>
      <button onClick={() => setVisible(!isVisible)}>Toggle timer</button>
      {isVisible && <Timer/>}
      <Title onClick={updateTitleSuffix} />
      <h3 onClick={() => setPrices(prev => [...prev, Math.random()])}>Products total: {productsTotal}</h3>
    </div>
  );
}

export default App;
