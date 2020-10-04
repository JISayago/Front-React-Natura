import React from 'react';
import CenterBox from './Componentes/CenterBox';
import HeaderBox from './Componentes/HeaderBox';
import LeftBox from './Componentes/LeftBox';
import './App.css';



function App() {
  return (
    <div className="App">
       <div className="App-Header"> 
         <HeaderBox />
       </div>
       <div className ="LeftCenter">  
          <div className ="App-Left">  
          <LeftBox />
           </div>
           <div className ="App-Center">
           <CenterBox />
           </div>
       </div>
    </div>
  );
}

export default App;
