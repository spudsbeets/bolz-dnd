import Menu from "./menu"
import { useEffect, useState } from 'react'

function EncounterB() {

    const [rendered, setRender] = useState<boolean>(false)

    const rightOrder: string[] = ['l-g', 'r-r', 'l-g', 'l-b', 'r-g', 'l-r'];

    const [bolzOrder, setBolzOrder] = useState<string[]>([]);

    const orbCheckerIds: string[] = ['0-button', '1-button', '2-button', '3-button', '4-button', '5-button'];

    function orbChecker(el: string) {
        if (bolzOrder.length === 6) {
            orbCheckerIds.forEach((el) => {
                (document.getElementById(el) as HTMLDivElement).style.backgroundColor = "gray";                
                (document.getElementById(el) as HTMLDivElement).style.display = "none"
            })
            setBolzOrder([el])
        } else {
            setBolzOrder([...bolzOrder, el])
        }
    }

    useEffect(() => {
        if (!rendered) {
            null
        }  else {
        if (bolzOrder.length !== 6) {
            const currentIndex = bolzOrder.length - 1;
            if (currentIndex > 5 || currentIndex < 0) {
                throw new Error('no index')
            } else {
                (document.getElementById(orbCheckerIds[currentIndex]) as HTMLDivElement).style.display = "block";
            }
        } else {
            const currentIndex = bolzOrder.length - 1;
            (document.getElementById(orbCheckerIds[currentIndex]) as HTMLDivElement).style.display = "block";
            for (let i = 0; i < rightOrder.length; i++) {
                if (bolzOrder[i] === rightOrder[i]) {
                    (document.getElementById(orbCheckerIds[i]) as HTMLDivElement).style.backgroundColor = "green";
                } else {
                    (document.getElementById(orbCheckerIds[i]) as HTMLDivElement).style.backgroundColor = "red";
                }
            }
        }
    }
    },[bolzOrder])

    return(
        <div id="encounter-b-div" className="grid grid-cols-3 grid-rows-3 w-full h-full bg-slate-900 border-8 rounded-2xl border-slate-600">
            <div className="col-start-1 col-span-1 row-start-1 row-span-3">
            <Menu />
            </div>
            <div id="orbs-div" className="bg-slate-900 col-start-2 col-span-2 row-start-1 row-span-2 grid grid-cols-2 grid-rows-2">
                <div id="left-orbs" className="bg-slate-900 col-start-1 col-span-1 row-start-1 row-span-1 flex flex-row flex-nowrap justify-around items-center">
                    <button id="l-r" className="bg-red-700 blur-sm rounded-full w-24 h-24 mt-8 hover:blur-none" onClick={() => orbChecker('l-r')}></button>
                    <button id="l-g" className="bg-green-700 blur-sm rounded-full w-24 h-24 mb-16 hover:blur-none" onClick={() => orbChecker('l-g')}></button>
                    <button id="l-b" className="bg-blue-700 blur-sm rounded-full w-24 h-24 mt-8 hover:blur-none" onClick={() => orbChecker('l-b')}></button>
                </div>
                <div id="right-orbs" className="bg-slate-900 col-start-2 col-span-1 row-start-1 row-span-1 flex flex-row flex-nowrap justify-around items-center">
                    <button id="r-r" className="bg-red-700 blur-sm rounded-full w-24 h-24 mt-8 hover:blur-none" onClick={() => orbChecker('r-r')}></button>
                    <button id="r-g" className="bg-green-700 blur-sm rounded-full w-24 h-24 mb-16 hover:blur-none" onClick={() => orbChecker('r-g')}></button>
                    <button id="r-b" className="bg-blue-700 blur-sm rounded-full w-24 h-24 mt-8 hover:blur-none" onClick={() => orbChecker('r-b')}></button>
                </div>
                <div id="tiefling-image" className="bg-slate-900"><img alt="tiefling" src="./src/images/tiefling.png" className="bg-slate-900 w-40 h-40 mx-auto"></img></div>
                <div id="gnome-image" className="bg-slate-900"><img alt="gnome" src="./src/images/gnome.png" className="bg-slate-900 w-40 h-40 mx-auto"></img></div>
            </div>
            <div id="orb-counter" className="bg-slate-900 col-start-2 col-span-2 row-start-3 row-span-1 flex flex-row flex-nowrap justify-around items-center border-t-[20px] border-double border-slate-600">
                <div id="0-button" className="bg-slate-500 blur-sm rounded-full w-24 h-24 hidden"></div>
                <div id="1-button" className="bg-slate-500 blur-sm rounded-full w-24 h-24 hidden"></div>
                <div id="2-button" className="bg-slate-500 blur-sm rounded-full w-24 h-24 hidden"></div>
                <div id="3-button" className="bg-slate-500 blur-sm rounded-full w-24 h-24 hidden"></div>
                <div id="4-button" className="bg-slate-500 blur-sm rounded-full w-24 h-24 hidden"></div>
                <div id="5-button" className="bg-slate-500 blur-sm rounded-full w-24 h-24 hidden"></div>
                <button id="start-button" className="mx-auto my-auto w-[200px] h-[120px] text-4xl bg-slate-600 hover:bg-slate-400 border-8 rounded-lg font-pixel" onClick={() => {
                    setRender(true);
                    (document.getElementById("start-button") as HTMLButtonElement).remove()
                    }}>START</button>
            </div>
        </div>
    )
}

export default EncounterB