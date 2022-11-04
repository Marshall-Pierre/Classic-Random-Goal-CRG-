var nb_goal_om = 0;
var nb_goal_psg = 0;
var pull_gauge;
var timer = 0;
var temps = 120;

function randomNbr() {
    pull_gauge =  Math.floor(Math.random() * 1000);
}

function checkPaire(nbr) {
    if(nbr%2 == 0) {
        nb_goal_om += 1; 
        document.getElementById("om").innerHTML=nb_goal_om;
    } else {
        nb_goal_psg += 1;
        document.getElementById("psg").innerHTML=nb_goal_psg;
    }
}

var choice = document.getElementById('choice').innerText;
if (choice == "index") {
    var interval = setInterval(() => {
        let minutes = parseInt(temps / 60, 10);
        let secondes = parseInt(temps % 60, 10);
        temps--;
        document.getElementById("minutes").innerHTML=minutes;
        document.getElementById("secondes").innerHTML=secondes;
    }, 1000);
    
    
    var interval1 = setInterval(() => {
        randomNbr();
        document.getElementById("gauge").innerHTML=pull_gauge;
    }, 100);


    function goal() {
        var text = document.getElementById('gauge').innerText;
        console.log(text);
        checkPaire(text);
    }
    
    setTimeout(() => {
        clearInterval(interval);
        clearInterval(interval1);
    
        // if (nb_goal_om == nb_goal_psg) {
        //     document.getElementById("final").innerHTML="égalité";
        // } else if (nb_goal_om > nb_goal_psg) {
        //     document.getElementById("final").innerHTML="Victoire de l'OM";
        // } else {
        //     document.getElementById("final").innerHTML="Victoire du PSG";
        // }
    
        window.location.href = "file:///home/nguema/Documents/test-sing/Classic_Random_Goal/fin.html";
    
        
    }, 121000);
} else {
    document.getElementById("omfin").innerHTML=nb_goal_om;
}



