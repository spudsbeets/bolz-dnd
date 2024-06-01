import Menu from "./menu"

function EncounterD() {
    return(
        <div id="encounter-d-div" className="grid grid-cols-3 w-full h-full bg-slate-900 border-8 rounded-2xl border-slate-600">
            <div className="col-start-1 col-span-1">
            <Menu />
            </div>
            <div className="col-start-2 col-span-2 bg-slate-900">
                <img className="bg-slate-900 mx-auto mt-16" alt="fairy" src="./src/images/fairy.png"></img>
            </div>
        </div>
    )
}

export default EncounterD