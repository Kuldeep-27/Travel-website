import "./App.scss"
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";



const App = () => {
  return (
    <div className="app-container">
      <div className="container">
          <Navbar/>
          <Body/>
          <Footer/>
          
           
      </div>

    </div>
  )
}

export default App;