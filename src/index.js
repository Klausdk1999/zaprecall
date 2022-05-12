import ReactDOM from "react-dom";

import Body from './components/Body';
import Menu from './components/Menu';

function App() {
    return (
    <>
      <Body/>
      <Menu/>
    </>
    );
}
  
ReactDOM.render(<App />, document.querySelector(".root"));