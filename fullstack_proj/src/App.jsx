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
      <Route path='/home' element={ <Home/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/about' element={<About college="Kongu Engineering College"/>}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/class' element={<ClassCompEg/>}/>
      <Route path='/useEffect' element={<UseEffect/>}/> 
      <Route path='/useRef' element={<UseRef/>}/> 
      <Route path='/useMemo' element={<UseMemo/>}/>
      <Route path='/signUp' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>


    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
