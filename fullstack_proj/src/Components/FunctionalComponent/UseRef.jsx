import { useEffect } from "react";
import { useRef, useState } from "react";

var UseRef = () => {
  var [text, setText] = useState("");
  var [number,setcount]=useState(0);
  var prevNumber=useRef("");
  var prevText = useRef("");
  useEffect(() => {
    prevText.current = text;
    prevNumber.current=number;
  }, [text,number]);
  return (
    <section>
      <h1>This is the Example of UseRef</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      /> 
      <input //task 1_day5
        type="number"
        value={number}
        onChange={(e) => setcount(e.target.value)}
      />
      <h2>My Current Render is {text}</h2>
      <h3>My Previous Render is {prevText.current}</h3>
      <h2>My Current Render is {number}</h2>
      <h3>My Previous Render is {prevNumber.current}</h3>
    </section>
  );
};
export default UseRef;
