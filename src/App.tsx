import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>ストレスボタン</h2>
      {count%2 === 0 && <div>
        <button 
        className="card0"
        style={{fontSize: (count + 50)/3}}
        onClick={() => setCount((count) => count + 1)}>ストレス</button>
      </div>}
      {count%2 === 1 && <div>
        <button 
        className="card1"
        style={{fontSize: (count + 50)/3}}
        onClick={() => setCount((count) => count + 1)}>ストレス</button>
      </div>}
      <p>カウント：{count}</p>
    </>
  );
}

export default App;
