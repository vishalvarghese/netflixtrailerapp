import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import {action,orginals} from './urls'
function App() {
  return (
<div className="App">
<NavBar/>
<Banner/>
<RowPost title='Netflix Orginals' url={orginals}/>
<RowPost title='Action' isSmall url={action}/>
</div>
  );
}

export default App;
