import { useState } from "react";
import Timer from "./Timer";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center App">
      <Timer />
    </div>
  );
}

export default App;
