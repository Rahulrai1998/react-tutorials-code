import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Toasts from "./components/Toasts";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title="Text Utils" about="About us" />
      <div className="container my-4">
        <TextForm formHeading="Enter Text" />
        
      </div>
      <About/>
     
    </>
  );
}

export default App;
