import React, { useState } from "react";
import {Header,MainPage,WorkExperience} from "./components/index"
import {ConnectionDrawer} from "./components/Drawer/index"
function App() {
  const [state,setState] = useState({
    openDrawer : false
  })
  return (
    <div className="App" style={{
      width:"100vw",
      height:"100vh",
      marginTop:"0px"
    }}>
      <header className="App-header" style={{width:"100%"}}>
        <Header 
           handleOpenDrawer = {(prevState)=> setState({...prevState,openDrawer: !state.openDrawer})}
        />
      </header>
      <div style={{width:"100%",paddingTop:"140px"}}>
        <MainPage />
      </div>
      <div style={{width:"100%"}}>
        <WorkExperience 
            handleOpenDrawer = {(prevState)=> setState({...prevState,openDrawer: !state.openDrawer})}
        />
      </div>
      <ConnectionDrawer 
          openDrawer ={state.openDrawer}
          handleOpenDrawer = {(prevState)=> setState({...prevState,openDrawer: !state.openDrawer})}
      />
    </div>
  );
}

export default App;
