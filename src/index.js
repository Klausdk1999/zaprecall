import ReactDOM from "react-dom";
import React from "react";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import seta from "./assets/media/setinha.png";
//src={seta}
import Body from './components/Body';
import Start from './components/Start';



function App() {
  const [init, setInit] = React.useState(false);
    return (
      <>
      { !init ? 
      
          <Start setInit={setInit}/>
          :
          <Body />
      }
      </>
    );
}
  
ReactDOM.render(<App />, document.querySelector(".root"));