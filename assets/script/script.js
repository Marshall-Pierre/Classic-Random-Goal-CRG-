nb_om_goal = 0;
nb_psg_goal = 0;
pull_gauge = 0;
timer = 0;

function randomNbr(nbr) {
    pull_gauge = Math.floor(Math.random() * nbr);
}

function checkPaire(nbr) {
    if (nbr % 2 == 0) {
        nb_om_goal += 1;
        document.getElementById("om").innerHTML = nb_om_goal;
    } else {
        nb_psg_goal += 1;
        document.getElementById("psg").innerHTML = nb_psg_goal;
    }
}

function gauge(ms) {
    return setInterval(() => {
        randomNbr(1000);
        document.getElementById("pull_gauge").innerHTML = pull_gauge;
    }, ms);
}

function chrono() {
    let minutes = 0;
    let secondes = 0;

    return setInterval(() => {
        secondes += 1;
        timer += 1;
        if (secondes == 61) {
            minutes += 1;
            secondes = 0;
        }
        document.getElementById("minutes").innerHTML=minutes;
        document.getElementById("secondes").innerHTML=secondes;
    }, 1000);
}

function goal() {
    var nbr = document.getElementById('pull_gauge').innerText;
    checkPaire(nbr);
}

function endGame(var1, var2) {
    setTimeout(() => {
        clearInterval(var1);
        clearInterval(var2);

        window.location.href = "file:///home/nguema/Documents/test-sing/Classic_Random_Goal/fin.html";
    }, 122000);
}
// exécution des fonctions

gauge_var = gauge(100);
chrono_var = chrono();
endGame(gauge_var, chrono_var);