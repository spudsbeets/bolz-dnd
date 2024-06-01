import { Link } from 'react-router-dom'

function EncounterPanel() {
    return(
        <div id="encounters-div" className="col-start-1 col-span-3 bg-slate-900 border-8 border-slate-100 font-pixel rounded-l-lg">
        <h1 className="bg-slate-900 text-6xl mt-12">ENCOUNTERS</h1>
        <div id="encounter-button-div" className="bg-slate-900 text-6xl flex flex-col flex-wrap m-6 items-center">
        <Link to="/encounterA" target="_blank" className="bg-slate-900"><button id="encounter-a" className="bg-slate-700 w-24 h-24 border-4 border-slate-100 hover:bg-slate-400 rounded-md m-4">A</button></Link>
        <Link to="/encounterB" target="_blank" className="bg-slate-900"><button id="encounter-b" className="bg-slate-700 w-24 h-24 border-4 border-slate-100 hover:bg-slate-400 rounded-md m-4">B</button></Link>
        <Link to="/encounterC" target="_blank" className="bg-slate-900"><button id="encounter-c" className="bg-slate-700 w-24 h-24 border-4 border-slate-100 hover:bg-slate-400 rounded-md m-4">C</button></Link>
        <Link to="/encounterD" target="_blank" className="bg-slate-900"><button id="encounter-d" className="bg-slate-700 w-24 h-24 border-4 border-slate-100 hover:bg-slate-400 rounded-md m-4">D</button></Link>
        </div>
      </div>
    )
}

export default EncounterPanel