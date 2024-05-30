function Menu() {
    return(
        <div id="menu-div" className="font-pixel text-2xl bg-slate-900 border-double border-r-[20px] border-slate-600">
            <h1 className="bg-slate-800 border-b-8 border-b-slate-600">DRINK MENU</h1>
            <ul className="bg-slate-800">
                <li className="bg-slate-800 px-4 py-8">$1: Light Gruel</li>
                <li className="bg-slate-800 px-4 py-8">$10: Red Rifle</li>
                <li className="bg-slate-800 px-4 py-8">$10: Lingering Grumble</li>
                <li className="bg-slate-800 px-4 py-8">$10: Lost Bumblebee</li>
                <li className="bg-slate-800 px-4 py-8">$50: Righteous Gamble</li>
                <li className="bg-slate-800 px-4 py-8">$100: Leeward Radicals</li>
            </ul>
        </div>
    )
}

export default Menu