//Component 1 is your UseContent.jsx

import { useContext } from "react"
import { ThemeProvider } from "../UseContext";

var StudentResults=()=>{
    var result=useContext(ThemeProvider);
    return(
        <section>
            <h3>Your Result {result.cgpa}</h3>
        </section>
    )
}
export default StudentResults