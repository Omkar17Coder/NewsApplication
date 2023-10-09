import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News' 

import { BrowserRouter as Router ,Route,Routes,Navigate} from "react-router-dom";
import NewItem from './NewItem';

function App() {
  return (
    
<>
<Navbar/>
<News/>


</>


  
  )
}

export default App