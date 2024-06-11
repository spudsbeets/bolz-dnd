import BattlefieldType from "../types/types"
import enemies from "../types/enemies"
import { useState, useEffect } from "react"

type PropsType = {
    battlefield: BattlefieldType,
    setBattle: React.Dispatch<React.SetStateAction<boolean>>
}

function Battlefield({ battlefield, setBattle }: PropsType) {

    const [from, setFrom] = useState<string>("");
    const [fromId, setFromId] = useState<string>("");
    const [toId, setToId] = useState<string>("");
    const [toggle, setToggle] = useState<boolean>(true)

    const images = document.getElementsByTagName("img")

    let count: number = 0

    function setMovement(el: HTMLDivElement | HTMLImageElement) {
        if (el.innerHTML !== "") {
            setFromId(el.id)
            setFrom(el.innerHTML)
            setToggle(false)
        } else {
            setToId(el.id)
            setToggle(true)
        }
    }

    useEffect(() => {
        if (from === "" || toggle === false) {
            null
        } else if (toId === "trash") {
            console.log(toId);
            (document.getElementById(fromId) as HTMLDivElement).innerHTML = ""
        } else {
            (document.getElementById(fromId) as HTMLDivElement).innerHTML = "";
            (document.getElementById(toId) as HTMLDivElement).innerHTML = from
        }
    },[toggle])

    function gridBlock(): HTMLDivElement {
        const block = document.createElement("div")
        block.id = String(count) + "-block"
        block.className = "grid-block"
        block.style.width = "80px"
        block.style.height = "80px"
        block.style.backgroundColor = "gray"
        block.style.cursor = "pointer"
        block.style.border = "solid black 2px";
        block.onclick = function(){setMovement(this as HTMLDivElement)};
        count++
        return block
    }

    function populateGrid() {
        let goal: number = Number(battlefield.width) * Number(battlefield.height)
        let count: number = 0
        do {
            (document.getElementById("grid") as HTMLDivElement).appendChild(
                gridBlock()
            );
            count++
        } while (count !== goal)
        const trash: HTMLImageElement = document.createElement('img');
        trash.id = "trash"
        trash.style.width = "160px"
        trash.style.height = "160px"
        trash.style.backgroundColor = "none"
        trash.src = "./src/images/trash.png"
        trash.alt = "trash"
        trash.style.position = "fixed"
        trash.style.right = "0"
        trash.style.marginTop = "256px"
        trash.style.cursor = "pointer"
        trash.onclick = function(){setMovement(this as HTMLImageElement)};
        (document.getElementById("trash") as HTMLDivElement).appendChild(trash)
        const jake: HTMLImageElement = document.createElement('img');
        jake.style.width = "60px"
        jake.style.height = "60px"
        jake.style.margin = "auto"
        jake.style.marginTop = "10px"
        jake.src = "./src/images/jake.png"
        jake.alt = "jake";
        (document.getElementById("0-block") as HTMLDivElement).appendChild(jake);
        const keith: HTMLImageElement = document.createElement('img');
        keith.style.width = "60px"
        keith.style.height = "60px"
        keith.style.margin = "auto"
        keith.style.marginTop = "10px"
        keith.src = "./src/images/keith.png"
        keith.alt = "keith";
        (document.getElementById("1-block") as HTMLDivElement).appendChild(keith);
        for (const enemy in battlefield) {
            if (enemy === "width" || enemy === "height" || enemy === "" || (battlefield as any)[enemy] === "") {
                null
            } else {
                let enemyIndex = 0
                for (let i = 0; i < enemies.length; i++) {
                    if (enemies[i].name === (battlefield as any)[enemy]) {
                        enemyIndex = i
                    } 
                }
                const en = document.createElement('img');
                en.style.width = "60px"
                en.style.height = "60px"
                en.style.margin = "auto"
                en.style.marginTop = "10px"
                en.src = enemies[enemyIndex].img
                en.alt = enemies[enemyIndex].name;
                (document.getElementById(enemies[enemyIndex].appendIndex + "-block") as HTMLDivElement).appendChild(en);
            }
        }
    }

    return(
        <>
        <div id="trash"></div>
        <div id="grid" className="flex flex-row flex-wrap justify-center mx-auto" style={{
            width: String(Number(battlefield.width) * 80) + "px"
            }}>
        </div>
        <button className="fixed top-0 left-0 text-4xl bg-slate-900 hover:bg-slate-500 border-slate-500 border-8" onClick={() => {
            populateGrid()
            }}>POPULATE</button>
        <button className="fixed top-0 right-0 text-4xl bg-slate-900 hover:bg-slate-500 border-slate-500 border-8" onClick={() => {
            for (let i = 0; i < images.length; i++) {
                images[i].remove()
            }
            setBattle(false)
            }}>BACK</button>
        </>
    )
}

export default Battlefield