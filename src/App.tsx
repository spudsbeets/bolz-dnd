import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={
      <div id="opening-page" className="grid grid-cols-8 w-full h-full">
      <div id="encounters-div" className="col-start-1 col-span-3 bg-slate-900 border-8 border-slate-100 font-pixel rounded-l-lg">
        <h1 className="bg-slate-900 text-6xl mt-12">ENCOUNTERS</h1>
        <div id="encounter-button-div" className="bg-slate-900 text-6xl flex flex-col flex-wrap m-6 items-center">
        <button id="encounter-a" className="bg-slate-700 w-24 h-24 border-4 border-slate-100 hover:bg-slate-400 rounded-md m-4">A</button>
        <button id="encounter-a" className="bg-slate-700 w-24 h-24 border-4 border-slate-100 hover:bg-slate-400 rounded-md m-4">B</button>
        <button id="encounter-a" className="bg-slate-700 w-24 h-24 border-4 border-slate-100 hover:bg-slate-400 rounded-md m-4">C</button>
        <button id="encounter-a" className="bg-slate-700 w-24 h-24 border-4 border-slate-100 hover:bg-slate-400 rounded-md m-4">D</button>
        </div>
      </div>
      <div id="title-div" className="col-start-4 col-span-2 bg-slate-900 border-8 border-slate-100 flex flex-row text-9xl font-title pt-16">
        <div id="bolz-div" className="flex flex-col bg-slate-900 ml-4">
        <h1 className="bg-slate-900">B</h1>
        <h1 className="bg-slate-900">O</h1>
        <h1 className="bg-slate-900">L</h1>
        <h1 className="bg-slate-900">Z</h1>
        </div>
        <div id="dnd-div" className="flex flex-col bg-slate-900 ml-20 mt-12">
        <h1 className="bg-slate-900">D</h1>
        <h1 className="bg-slate-900">N</h1>
        <h1 className="bg-slate-900">D</h1>
        </div>
      </div>
      <div id="battlefield-div" className="col-start-6 col-span-3 bg-slate-900 border-8 border-slate-100 font-pixel rounded-r-lg flex flex-col">
        <h1 className="bg-slate-900 text-6xl mt-12">BATTLEFIELD</h1>
        <div id="width-div" className="flex flex-row bg-slate-900 mt-4">
          <h2 className="bg-slate-900 text-4xl mx-4">WIDTH:</h2>
          <input type="text" className="bg-slate-400 text-2xl w-16 text-slate-900"></input>
        </div>
        <div id="height-div" className="flex flex-row bg-slate-900 mt-4">
          <h2 className="bg-slate-900 text-4xl mx-4">HEIGHT:</h2>
          <input type="text" className="bg-slate-400 text-2xl w-16 text-slate-900"></input>
        </div>
        <div id="enemies-div" className="flex flex-col bg-slate-900 mt-4">
          <div id="enemy-1-div" className="bg-slate-900 mt-4 flex flex-row">
          <h2 className="bg-slate-900 text-4xl mx-4">ENEMY 1:</h2>
          <input type="text" className="bg-slate-400 text-xl w-40 text-slate-900"></input>
          </div>
          <div id="enemy-2-div" className="bg-slate-900 mt-4 flex flex-row">
          <h2 className="bg-slate-900 text-4xl mx-4">ENEMY 2:</h2>
          <input type="text" className="bg-slate-400 text-xl w-40 text-slate-900"></input>
          </div>
          <div id="enemy-3-div" className="bg-slate-900 mt-4 flex flex-row">
          <h2 className="bg-slate-900 text-4xl mx-4">ENEMY 3:</h2>
          <input type="text" className="bg-slate-400 text-xl w-40 text-slate-900"></input>
          </div>
          <div id="enemy-4-div" className="bg-slate-900 mt-4 flex flex-row">
          <h2 className="bg-slate-900 text-4xl mx-4">ENEMY 4:</h2>
          <input type="text" className="bg-slate-400 text-xl w-40 text-slate-900"></input>
          </div>
          <div id="ally-1-div" className="bg-slate-900 mt-4 flex flex-row">
          <h2 className="bg-slate-900 text-4xl mx-4">ALLY 1:</h2>
          <input type="text" className="bg-slate-400 text-xl w-40 text-slate-900"></input>
          </div>
          <div id="ally-2-div" className="bg-slate-900 mt-4 flex flex-row">
          <h2 className="bg-slate-900 text-4xl mx-4">ALLY 2:</h2>
          <input type="text" className="bg-slate-400 text-xl w-40 text-slate-900"></input>
          </div>
          <button id="go-button" className="text-4xl bg-slate-700 w-24 border-8 border-slate-400 rounded-2xl mx-auto mt-4 hover:bg-slate-400">GO</button>
        </div>
      </div>
      </div>
    }>
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
