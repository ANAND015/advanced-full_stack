import ClassCompEg from './Components/ClassComponent/ClassCompEg'
import About from './Components/FunctionalComponent/About'
import Contact from './Components/FunctionalComponent/Contact'
import Gallery from './Components/FunctionalComponent/Gallery'
import Home from './Components/FunctionalComponent/Home'
import NavBar from './Components/FunctionalComponent/NavBar'
import Footer from './Components/FunctionalComponent/Footer'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import UseEffect from './Components/FunctionalComponent/UseEffect'
import UseRef from './Components/FunctionalComponent/UseRef'
import UseMemo from './Components/FunctionalComponent/UseMemo'
import Signup from './Components/Authentication/Signup'
import Login from './Components/Authentication/Login'
function App() {
   return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavBar/>} />
      <Route path='Home' element={ <Home/>}/>
      <Route path='Gallery' element={<Gallery/>}/>
      <Route path='About' element={<About college="Kongu Engineering College"/>}/>
      <Route path='Contact' element={<Contact />}/>
      <Route path='class' element={<ClassCompEg/>}/>
      <Route path='UseEffect' element={<UseEffect/>}/> 
      <Route path='UseRef' element={<UseRef/>}/> 
      <Route path='UseMemo' element={<UseMemo/>}/>
      <Route path='SignUp' element={<Signup/>}/>
      <Route path='Login' element={<Login/>}/>


    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
