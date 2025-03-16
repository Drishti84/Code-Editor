import { useState } from 'react'
import CodeEditor from './components/CodeEditor'
import TerminalComponent from './components/Terminal'
import './App.css'
import FileExplorer from './components/FileExplorer'
import DescriptionBox from './components/DescriptionBox'

function App() {
  

  return (
    <>

<div className="app-container">
  {/* <div className="left-panel"><GeminiAI /></div> */}

  <div className="left-panel">
  <DescriptionBox />
    </div>
  <div className="middle-panel"><FileExplorer/></div>
  <div className="right-panel">
    <div style={{width:"750px",height:"35live-code0px"}}>
    <CodeEditor />
    </div>
  
    <TerminalComponent /></div>
</div>

    </>
  )
}

export default App
