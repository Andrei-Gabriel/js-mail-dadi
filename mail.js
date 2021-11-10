const listaMail = ["qwerty@gmail.com", "wasd@gmail.com", "rosso@gmail.com", "bianco@gmail.com"];

for(let i = 0; i < 4; i++){
    console.log(listaMail[i]);
}

const aMail = prompt("inserisci la tua mail");
console.log("La mail inserita è: " + aMail);

let sentinel = false;
for(let i = 0; i < 4 && sentinel == false; i++){
    if(aMail == listaMail[i]){
        console.log("SEI DENTRO");
        sentinel = true;
    }
    else {
        console.log("NON SEI DENTRO");
        sentinel = true;
    }
}
