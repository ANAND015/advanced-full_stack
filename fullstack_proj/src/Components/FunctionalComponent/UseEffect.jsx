import { useEffect, useState } from "react";
import axios from "axios";
var UseEffect = () => {
  // var[text, setText]=useState("Kongu");
  // useEffect(() => {
  //     console.log(text)
  // },[text]);
  // return (
  //     <section>
  //         <h1>Use Effect Example</h1>
  //         <input
  //         type="text"
  //         placeholder="Enter Your Text"
  //         value={text}
  //         onChange={(e)=>{setText(e.target.value)}}/>
  //         <h2>Text typed is {text}</h2>
  //     </section>
  // )
  //var [post, setPost] = useState([]);
  var [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axios
      // .get("https://jsonplaceholder.typicode.com/posts/")
      // .then((res) => {
      //   console.log(res);
      //   setPost(res.data);
      // })
      // .catch((err) => {
      //   console.log(err);
      // });

      //Task2_day5
      .get("https://dummyjson.com/recipes")
      .then((res) => {
        console.log(res);
        setRecipes(res.data.recipes || []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section>
      <h1>Fetching Data from Json placeholder API</h1>
      <h2>Post are </h2>
      <ol>
        {recipes.map((data,index)=>(
            <li key={index}>
              <img src={data.image} alt="" style={{width:"100px"}} />
              <h1>{data.name}</h1>
            </li>
        ))}
      </ol>
    </section>
  );
};
export default UseEffect;
