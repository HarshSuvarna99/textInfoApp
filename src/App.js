import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App() {
  return (
    <>
      <Navbar title = "Harsh" description = "About Harsh"/>
      <div className="container">
        <TextForm heading = "Capital"/>
      </div>
      
    </>
  );
}

export default App;
