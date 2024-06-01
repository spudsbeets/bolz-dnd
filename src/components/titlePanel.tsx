function TitlePanel() {
    return(
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
    )
}

export default TitlePanel