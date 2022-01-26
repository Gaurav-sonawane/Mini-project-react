import { useState } from "react";

export default function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}

function Hello() {
  let counter = 100;
  const like = () => {
    counter++;
    console.log(counter);
  };

  let [counter1, setCounter1] = useState(100);
  const like1 = () => {
    const newCounter1 = counter1 + 1;
    setCounter1(newCounter1);
  };

  return (
    <div>
      <h1>
        {counter}
        <button onClick={like}>Like</button>
      </h1>
      <h1>
        counter1: {counter1}
        <button onClick={like1}>Like1</button>
      </h1>
    </div>
  );
}
