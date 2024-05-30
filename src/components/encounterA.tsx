import { useState, useEffect } from "react"

function EncounterA() {

    const [firstNum, setFirstNum] = useState<string>("")
    const [secondNum, setSecondNum] = useState<string>("")

    const buttons: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName('button')

    function Swiggy() {
       for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].id === "check-button") {
                null
            } else if (buttons[i].innerHTML === buttons[i].name) {
                buttons[i].style.backgroundColor = "green"
            } else {
                buttons[i].style.backgroundColor = "red"
            }
       } 
    }

    function click(el: string) {
        if (firstNum === "") {
            setFirstNum(el)
        } else {
            setSecondNum(el)
        }
    }

    useEffect(() => {
        if (firstNum === "" || secondNum === "") {
            null
        } else {
            console.log(firstNum, secondNum);
            const initialFirst: string = (document.getElementById(firstNum) as HTMLButtonElement).innerHTML;
            const initialSecond: string = (document.getElementById(secondNum) as HTMLButtonElement).innerHTML;
            (document.getElementById(firstNum) as HTMLButtonElement).innerHTML = initialSecond;
            (document.getElementById(secondNum) as HTMLButtonElement).innerHTML = initialFirst;
            Swiggy()
            setFirstNum("");
            setSecondNum("")
        }
    },[secondNum])

    return(
        <div id="encounter-a-div" className="p-12">
        <button id="check-button" className="w-40 h-30 bg-slate-900 font-pixel text-2xl absolute left-0 top-24 border-8 rounded-xl border-slate-100 hover:bg-slate-400" onClick={() => Swiggy()}>CHECK</button>
        <div id="buttons-div" className="bg-slate-900 flex flex-row flex-wrap font-title text-8xl text-black justify-center max-w-[1200px] border-[20px] rounded-3xl border-slate-100 py-8">
            <button id="1-button" className="min-w-40 min-h-40 max-w-40 max-h-40 border-8 border-slate-100 rounded-md mx-24 my-6" name="3" onClick={() => {
                click("1-button")
            }}>3</button>
            <button id="2-button" className="min-w-40 min-h-40 max-w-40 max-h-40 border-8 border-slate-100 rounded-md mx-24 my-6" name="9" onClick={() => {
                click("2-button")
            }}>2</button>
            <button id="3-button" className="min-w-40 min-h-40 max-w-40 max-h-40 border-8 border-slate-100 rounded-md mx-24 my-6" name="2" onClick={() => {
                click("3-button")
            }}>9</button>
            <button id="4-button"className="min-w-40 min-h-40 max-w-40 max-h-40 border-8 border-slate-100 rounded-md mx-24 my-6" name="7" onClick={() => {
                click("4-button")
            }}>8</button>
            <button id="5-button" className="min-w-40 min-h-40 max-w-40 max-h-40 border-8 border-slate-100 rounded-md mx-24 my-6" name="8" onClick={() => {
                click("5-button")
            }}>2</button>
            <button id="6-button" className="min-w-40 min-h-40 max-w-40 max-h-40 border-8 border-slate-100 rounded-md mx-24 my-6" name="1" onClick={() => {
                click("6-button")
            }}>3</button>
            <button id="7-button" className="min-w-40 min-h-40 max-w-40 max-h-40 border-8 border-slate-100 rounded-md mx-24 my-6" name="2" onClick={() => {
                click("7-button")
            }}>1</button>
            <button id="8-button" className="min-w-40 min-h-40 max-w-40 max-h-40 border-8 border-slate-100 rounded-md mx-24 my-6" name="4" onClick={() => {
                click("8-button")
            }}>4</button>
            <button id="9-button" className="min-w-40 min-h-40 max-w-40 max-h-40 border-8 border-slate-100 rounded-md mx-24 my-6" name="3" onClick={() => {
                click("9-button")
            }}>7</button>
        </div>
        </div>
    )
}

export default EncounterA