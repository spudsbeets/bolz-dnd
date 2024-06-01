import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EncounterPanel from './components/encounterPanel'
import BattlefieldPanel from './components/battlefieldPanel'
import TitlePanel from './components/titlePanel'
import EncounterA from './components/encounterA'
import EncounterB from './components/encounterB'
import EncounterC from './components/encounterC'
import EncounterD from './components/encounterD'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={
      <div id="opening-page" className="grid grid-cols-8 w-full h-full">
        <EncounterPanel />
        <TitlePanel />
        <BattlefieldPanel />
      </div>
    }>
    </Route>
    <Route path="/encounterA" element={<EncounterA />}></Route>
    <Route path="/encounterB" element={<EncounterB />}></Route>
    <Route path="/encounterC" element={<EncounterC />}></Route>
    <Route path="/encounterD" element={<EncounterD />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
