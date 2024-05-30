import Menu from "./menu"

function EncounterB() {
    return(
        <div id="encounter-b-div" className="grid grid-cols-3 w-full h-full bg-slate-900 border-8 rounded-2xl border-slate-600">
            <div className="col-start-1 col-span-1">
            <Menu />
            </div>
            <div id="orbs-div" className="bg-slate-900">
            </div>
        </div>
    )
}

export default EncounterB