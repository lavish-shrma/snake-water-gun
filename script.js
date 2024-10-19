let playerPick = prompt("Enter S, W or G");
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["S","W","G"][cpuI]

const match = (cpu, playerPick) => {
    if(cpu === playerPick){
        return "Match tied";
    } else if(cpu === "S" && playerPick === "W"){
        return "computer bot"
    } else if(cpu === "S" && playerPick === "G"){
        return "user"
    } else if(cpu === "G" && playerPick === "W"){
        return "user"
    } else if(cpu === "G" && playerPick === "S"){
        return "computer bot"
    } else if(cpu === "W" && playerPick === "S"){
        return "user"
    } else if(cpu === "W" && playerPick === "G"){
        return "computer bot"
    }
}

let result = match(cpu, playerPick)
document.write(`Your pick : ${playerPick} <br> Computer's pick : ${cpu} <br> The winner is :  ${result}`);