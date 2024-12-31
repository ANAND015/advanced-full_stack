import Component2 from "./ContextComponents/Component2";
import React from "react";
export var ThemeProvider = React.createContext();
var ExamResult = () => {
  return (
    <section>
      <ThemeProvider.Provider value={{cgpa:"7.43"}}>
        <h1>This is the Example of UseContext-Parent Component</h1>
        <Component2 />
      </ThemeProvider.Provider>
    </section>
  );
};
export default ExamResult;
