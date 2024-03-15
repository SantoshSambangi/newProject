import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import ProductsPage from "./components/ProductsPage";
import Modal from "./modal";
import TestModal from "./modal/test";
import ChatGpt from "./pages/ChatGpt";
import Instagram from "./pages/Instagram";
import Linkedin from "./pages/Linkedin";
import MaterialUi from "./pages/MaterialUi";
import MyForm from "./pages/MyForm";
import MyReusableComponent from "./pages/MyReusableComponent";
import PracticeYouTube from "./pages/PracticeYouTube";
import SomeOtherComponent from "./pages/SomeOtherComponent";
import YouTubePrep from "./pages/YouTubePrep";
import CounterComponent from "./pages/CounterComponent";
import MyComponent from "./components/Button";
import Prepration from "./pages/Prepration";
import FormWithoutYup from "./components/form-without-yup";
import FormWithYup from "./components/form-with-yup";
import FormRoadsideCoder from "./components/FormRoadsideCoder";
// import { Button } from "@mui/material";

function App() {
  // const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      {/* <h1>Redux Toolkit</h1> */}
      {/* <HomePage/> */}
      {/* <ProductsPage/> */}
      <PracticeYouTube />
      {/* <MyForm/> */} 
      {/* <TestModal /> */}
      {/* <MaterialUi/> */}
      {/* <YouTubePrep/> */}
      {/* <Linkedin /> */}
      {/* <ChatGpt/> */}
      {/* <MyReusableComponent/> */}
      {/* <SomeOtherComponent/> */}
      {/* <Instagram /> */}
      {/* <MyComponent /> */}
      {/* <CounterComponent value={counter} callback={()=> setCounter(counter + 1)}/> */}
      {/* <Prepration/> */}
      {/* <FormWithoutYup /> */}
      {/* <FormWithYup/> */}
      {/* <FormRoadsideCoder/> */}
    </div>
  );
}

export default App;
