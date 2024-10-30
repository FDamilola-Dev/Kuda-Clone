import Header from "./Static/Header"
import { BrowserRouter,Routes,Route }from 'react-router-dom'
import Hero from "./components/Hero"
const App = () => {
  return (
    //  <BrowserRouter>
     <div>
      {/* <Routes> */}
     {/* <Route path="/career" */}
     <Header/>
     <Hero/>
    {/* //  </Routes> */}
     </div>
    // </BrowserRouter> 
  )
}

export default App 