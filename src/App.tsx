import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EncounterPanel from './components/encounterPanel'
import TitlePanel from './components/titlePanel'
import EncounterA from './components/encounterA'
import EncounterB from './components/encounterB'
import EncounterC from './components/encounterC'
import EncounterD from './components/encounterD'
import Battlefield from './components/battlefield'
import BattlefieldType from './types/types'
import { useState } from 'react'

function App() {

  const [battle, setBattle] = useState<boolean>(false)

  const [battlefield, setBattlefield] = useState<BattlefieldType>({
    width: "",
    height: "",
    enemy1: ""
  })

  function populateBattlefield() {
    battlefield.width = (document.getElementById("width-input") as HTMLInputElement).value;
    battlefield.height = (document.getElementById("height-input") as HTMLInputElement).value;
    battlefield.enemy1 = (document.getElementById("enemy-1-input") as HTMLInputElement).value;
    battlefield.enemy2 = (document.getElementById("enemy-2-input") as HTMLInputElement).value;
    battlefield.enemy3 = (document.getElementById("enemy-3-input") as HTMLInputElement).value;
    battlefield.enemy4 = (document.getElementById("enemy-4-input") as HTMLInputElement).value;
    battlefield.ally1 = (document.getElementById("ally-1-input") as HTMLInputElement).value;
    battlefield.ally2 = (document.getElementById("ally-2-input") as HTMLInputElement).value;
    setBattlefield(battlefield)
  }

  const pageContent = 
  !battle
  ?
  <div id="opening-page" className="grid grid-cols-8 w-full h-full">
  <EncounterPanel />
  <TitlePanel />
  <div id="battlefield-div" className="col-start-6 col-span-3 bg-slate-900 border-8 border-slate-100 font-mono rounded-r-lg flex flex-col">
  <h1 className="bg-slate-900 text-6xl mt-12">BATTLEFIELD</h1>
  <div id="width-div" className="flex flex-row bg-slate-900 mt-4">
    <h2 className="bg-slate-900 text-4xl mx-4">WIDTH:</h2>
    <input id="width-input" type="text" className="bg-slate-400 text-2xl w-16 text-slate-900"></input>
  </div>
  <div id="height-div" className="flex flex-row bg-slate-900 mt-4">
    <h2 className="bg-slate-900 text-4xl mx-4">HEIGHT:</h2>
    <input id="height-input" type="text" className="bg-slate-400 text-2xl w-16 text-slate-900"></input>
  </div>
  <div id="enemies-div" className="flex flex-col bg-slate-900 mt-4">
    <div id="enemy-1-div" className="bg-slate-900 mt-4 flex flex-row">
    <h2 className="bg-slate-900 text-4xl mx-4">ENEMY 1:</h2>
    <input id="enemy-1-input" type="text" className="bg-slate-400 text-xl w-40 text-slate-900"></input>
    </div>
    <div id="enemy-2-div" className="bg-slate-900 mt-4 flex flex-row">
    <h2 className="bg-slate-900 text-4xl mx-4">ENEMY 2:</h2>
    <input id="enemy-2-input" type="text" className="bg-slate-400 text-xl w-40 text-slate-900"></input>
    </div>
    <div id="enemy-3-div" className="bg-slate-900 mt-4 flex flex-row">
    <h2 className="bg-slate-900 text-4xl mx-4">ENEMY 3:</h2>
    <input id="enemy-3-input" type="text" className="bg-slate-400 text-xl w-40 text-slate-900"></input>
    </div>
    <div id="enemy-4-div" className="bg-slate-900 mt-4 flex flex-row">
    <h2 className="bg-slate-900 text-4xl mx-4">ENEMY 4:</h2>
    <input id="enemy-4-input" type="text" className="bg-slate-400 text-xl w-40 text-slate-900"></input>
    </div>
    <div id="ally-1-div" className="bg-slate-900 mt-4 flex flex-row">
    <h2 className="bg-slate-900 text-4xl mx-4">ALLY 1:</h2>
    <input id="ally-1-input" type="text" className="bg-slate-400 text-xl w-40 text-slate-900"></input>
    </div>
    <div id="ally-2-div" className="bg-slate-900 mt-4 flex flex-row">
    <h2 className="bg-slate-900 text-4xl mx-4">ALLY 2:</h2>
    <input id="ally-2-input" type="text" className="bg-slate-400 text-xl w-40 text-slate-900"></input>
    </div>
    <div className="flex flex-row flex-nowrap justify-evenly bg-slate-900">
    <button onClick={() => {
      populateBattlefield()
      console.log(battlefield)
      }} className="text-4xl bg-slate-700 w-64 border-8 border-slate-400 rounded-2xl mt-4 hover:bg-slate-400">LOCK IN</button>
    <button onClick={() => setBattle(true)}id="go-button" className="text-4xl bg-slate-700 w-24 border-8 border-slate-400 rounded-2xl mt-4 hover:bg-slate-400">GO</button>
    </div>
  </div>
</div>
</div>
: <Battlefield battlefield={battlefield} setBattle={setBattle} />

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={
      pageContent
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
