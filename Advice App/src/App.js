import { use, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const response = await axios.get("https://api.adviceslip.com/advice");
    setAdvice(response.data.slip.advice);
    setCount((prev) => prev + 1);
  }

  return (
    <div className="App">
      <h1>ADVICE APP</h1>
      <h3>
        <strong>welcome to my advice app </strong>
      </h3>
      <hr></hr>
      <h4>{advice}</h4>
      <hr></hr>
      <button onClick={getAdvice}>Get Advice</button>
      <p>you have {count} pieces of advice today</p>
    </div>
  );
}
