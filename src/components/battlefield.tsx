import BattlefieldType from "../types/types"
import enemies from "../types/enemies"

type PropsType = {
    battlefield: BattlefieldType,
    setBattle: React.Dispatch<React.SetStateAction<boolean>>
}

function Battlefield({ battlefield, setBattle }: PropsType) {

    let count: number = 0

    function gridBlock(): HTMLDivElement {
        const block = document.createElement("div")
        block.id = String(count) + "-block"
        block.className = "grid-block"
        block.style.width = "50px"
        block.style.height = "50px"
        block.style.backgroundColor = "gray"
        block.style.border = "solid black 2px"
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
        for (let enemy in battlefield) {
            if (enemy === "width" || enemy === "height" || enemy === "") {
                null
            } else {
                let enemyIndex = 0
                for (let i = 0; i < enemies.length; i++) {
                    if (enemies[i].name === (battlefield as any)[enemy]) {
                        enemyIndex = i
                    } 
                }
                const en = document.createElement('img');
                en.style.width = "30px"
                en.style.height = "30px"
                en.src = enemies[enemyIndex].img
                en.alt = enemies[enemyIndex].name;
                (document.getElementById(enemies[enemyIndex].appendIndex + "-block") as HTMLDivElement).appendChild(en)
            }
        }
    }

    return(
        <>
        <div id="grid" className="flex flex-row flex-wrap justify-center mx-auto" style={{
            width: String(Number(battlefield.width) * 50) + "px"
            }}>
        
        </div>
        <button className="fixed top-0 left-0 text-4xl bg-slate-900 hover:bg-slate-500 border:slate-500 border-8" onClick={() => {
            populateGrid()
            console.log(battlefield)
            }}>POPULATE</button>
        <button className="fixed top-0 right-0 text-4xl bg-slate-900 hover:bg-slate-500 border:slate-500 border-8" onClick={() => setBattle(false)}>BACK</button>
        </>
    )
}

export default Battlefield