import Navbar from "./Components/Navbar"
import './App.css';
import AllRoutes from "./Components/AllRoutes";
import HomePage from "./Pages/HomePage";
// import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
