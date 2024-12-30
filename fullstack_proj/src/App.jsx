import ClassCompEg from './Components/ClassComponent/ClassCompEg'
import About from './Components/FunctionalComponent/About'
import Contact from './Components/FunctionalComponent/Contact'
import Gallery from './Components/FunctionalComponent/Gallery'
import Home from './Components/FunctionalComponent/Home'
import NavBar from './Components/FunctionalComponent/Navbar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
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
    </Routes>
    </BrowserRouter>
  )
}

export default App
