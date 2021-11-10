const nOfGames = 3;
const results = new Array(nOfGames);

let gamesCount = 0;
let userWinsCheck = 0;
let computerWinsCheck = 0;
let sentinel = true;
for(let i = 0; i < 999 && sentinel == true; i++){
    
    // Generazione random dei numeri
    let user = Math.floor(Math.random() * 6) + 1;
    let computer = Math.floor(Math.random() * 6) + 1;

    // Quando user vince
    if(user > computer){
        console.log("HAI VINTO!!!" + "\nUser = " + user + "\tComputer = " + computer);
        results[gamesCount] = "user";
        gamesCount++;
        userWinsCheck++;
    }
    // Quando user perde
    if(user < computer){
        console.log("HAI PERSO :,(" + "\nUser = " + user + "\tComputer = " + computer);
        results[gamesCount] = "computer";
        gamesCount++;
        computerWinsCheck++;
    }
    // Quando c'è un pareggio
    if(user == computer){
        console.log("PAREGGIO" + "\nUser = " + user + "\tComputer = " + computer);
    }

    if(gamesCount > 1){
        for(let y = 0; y < 3; y++){
            if(results[y] == "user"){
                if(userWinsCheck == 2){
                    sentinel = false;
                }
            }
            if(results[y] == "computer"){
                if(computerWinsCheck == 2){
                    sentinel = false;
                }
            }
        }
    }
}

if(userWinsCheck == 2){
    console.log("\nCOMPLIMENTI HAI VINTO!!!!!!!!");
}
else{
    console.log("\nRIPROVA! SARAI PIU' FORTUNATO!!!");
}