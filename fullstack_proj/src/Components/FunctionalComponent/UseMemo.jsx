import { useMemo, useState } from "react";
var slowFunction = (number) => {
  for (let i = 0; i < 1000; i++) {}
  return number * 2;
};

var UseMemo = () => {
  var [num, setNum] = useState(0);
  var [theme, updateTheme] = useState(true);
  var darkLight = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };
  var doublingANumber = useMemo(()=>{ 
    return slowFunction(num);
  },[num]);
  return (
    <section>
      <h1>This is the Example of UseMemo</h1>
      {/* Task3_day5   */}
      <p style={{fontSize:30}}>UseMemo allows you to optimize performance by caching the result of expensive computations. If the inputs to the computation haven't changed since the last render, useMemo returns the cached result instead of recalculating it, which can significantly improve the performance of your application.</p>
      <input
        type="number"
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      <button onClick={() => updateTheme((theme = !theme))}>
        Toggle Theme{" "}
      </button>
      <h2 style={darkLight}>{doublingANumber}</h2>
    </section>
  );
};
export default UseMemo;
