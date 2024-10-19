let playerPick = prompt("Enter your move");
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["S","W","G"][cpuI]

const match = (cpu, playerPick) => {
    if(cpu === playerPick){
        return 0;
    } else if(cpu === "S" && playerPick === "W"){
        return "cpu"
    } else if(cpu === "S" && playerPick === "G"){
        return "user"
    } else if(cpu === "G" && playerPick === "W"){
        return "user"
    } else if(cpu === "G" && playerPick === "S"){
        return "cpu"
    } else if(cpu === "W" && playerPick === "S"){
        return "user"
    } else if(cpu === "W" && playerPick === "G"){
        return "cpu"
    }
}

match(cpu, playerPick)