function EncounterC() {

    const inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName('input')

    function checkPuzzle() {
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value === inputs[i].name) {
                (inputs[i] as HTMLInputElement).style.backgroundColor = "green"
            } else {
                (inputs[i] as HTMLInputElement).style.backgroundColor = "red"
            }
        }
    }

    return(
        <div id="encounter-c-div" className="w-full h-[700px] bg-slate-900 border-8 rounded-2xl border-slate-600 grid grid-rows-5 font-mono text-4xl">
            <button className="fixed left-0 top-0 bg-slate-900 p-2 border-slate-600 border-8 hover:bg-slate-600 font-pixel" onClick={() => checkPuzzle()}>CHECK</button>
            <div id="crossword" className="h-[384px] bg-slate-900">
            <div className="row-start-1 row-span-1 bg-slate-900 mx-8 mt-12 flex flex-row justify-center">
                <div className="w-24 h-24 bg-slate-900 border-2 border-slate-700"></div>
                <div className="w-24 h-24 bg-slate-200 border-2 border-slate-700 text-slate-900 text-center pt-6">(1)C</div>
                <div className="w-24 h-24 bg-slate-900 border-2 border-slate-700"></div>
                <div className="w-24 h-24 bg-slate-200 border-2 border-slate-700 text-slate-900 text-center pt-6">(2)G</div>
                <div className="w-24 h-24 bg-slate-900 border-2 border-slate-700"></div>
                <div className="w-24 h-24 bg-slate-200 border-2 border-slate-700 text-slate-900 text-center pt-6">(3)F</div>
                <div className="w-24 h-24 bg-slate-900 border-2 border-slate-700"></div>
            </div>
            <div className="row-start-2 row-span-1 bg-slate-900 mx-8 flex flex-row justify-center">
                <div className="w-24 h-24 bg-slate-900 border-2 border-slate-700"></div>
                <div className="w-24 h-24 bg-slate-200 border-2 border-slate-700 text-slate-900 text-center pt-6">A</div>
                <div className="w-24 h-24 bg-slate-900 border-2 border-slate-700"></div>
                <div className="w-24 h-24 bg-slate-200 border-2 border-slate-700 text-slate-900 text-center pt-6">R</div>
                <div className="w-24 h-24 bg-slate-900 border-2 border-slate-700"></div>
                <div className="w-24 h-24 bg-slate-200 border-2 border-slate-700 text-slate-900 text-center pt-6">R</div>
                <div className="w-24 h-24 bg-slate-900 border-2 border-slate-700"></div>
            </div>
            <div className="row-start-3 row-span-1 bg-slate-900 mx-8 flex flex-row justify-center">
                <input className="w-24 h-24 bg-slate-200 border-2 border-slate-700 text-slate-900 text-center pt-6" placeholder="(1)" maxLength={1} name="b"></input>
                <input className="w-24 h-24 bg-slate-200 border-2 border-slate-700 text-slate-900 text-center pt-6" maxLength={1} name="r"></input>
                <input className="w-24 h-24 bg-slate-200 border-2 border-slate-700 text-slate-900 text-center pt-6" maxLength={1} name="u"></input>
                <input className="w-24 h-24 bg-slate-200 border-2 border-slate-700 text-slate-900 text-center pt-6" maxLength={1} name="i"></input>
                <input className="w-24 h-24 bg-slate-200 border-2 border-slate-700 text-slate-900 text-center pt-6" maxLength={1} name="s"></input>
                <input className="w-24 h-24 bg-slate-200 border-2 border-slate-700 text-slate-900 text-center pt-6" maxLength={1} name="e"></input>
                <input className="w-24 h-24 bg-slate-200 border-2 border-slate-700 text-slate-900 text-center pt-6" maxLength={1} name="r"></input>
            </div>
            <div className="row-start-4 row-span-1 bg-slate-900 mx-8 flex flex-row justify-center">
                <div className="w-24 h-24 bg-slate-900 border-2 border-slate-700"></div>
                <div className="w-24 h-24 bg-slate-200 border-2 border-slate-700 text-slate-900 text-center pt-6">L</div>
                <div className="w-24 h-24 bg-slate-900 border-2 border-slate-700"></div>
                <div className="w-24 h-24 bg-slate-200 border-2 border-slate-700 text-slate-900 text-center pt-6">D</div>
                <div className="w-24 h-24 bg-slate-900 border-2 border-slate-700"></div>
                <div className="w-24 h-24 bg-slate-200 border-2 border-slate-700 text-slate-900 text-center pt-6">E</div>
                <div className="w-24 h-24 bg-slate-900 border-2 border-slate-700"></div>
            </div>
            </div>
            <div id="questions" className="text-left row-start-5 row-span-1 bg-slate-900 border-t-8 border-slate-600 border-double">
                <ul className="pt-4 bg-slate-900 text-base">
                    <li className="bg-slate-900">1 DOWN: China</li>
                    <li className="bg-slate-900">2 DOWN: Off the</li>
                    <li className="bg-slate-900">3 DOWN: As a bird</li>
                    <li className="bg-slate-900">1 ACROSS: Daniel whilst in arnie mode</li>
                </ul>
            </div>
        </div>
    )
}

export default EncounterC