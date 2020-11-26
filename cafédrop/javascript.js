var d = new Date();

setInterval(function () {
    var d = new Date();
    var h = d.toLocaleTimeString();//heure en haut a droite
    console.log(d.toLocaleTimeString());
    document.getElementById("date").innerHTML = h;
}, 1000)

function set_time(temps) { //donne l'heure de réservation heure de fin et durée de reservation   

    if (temps === "10") {
        document.getElementById("time");
        var T = 10;
        console.log(T);
        document.getElementById("utilisation2").innerHTML = "Le client réserve le pc pendant" + " " + T + "min";
        var d = new Date();
        var h = new Date();
        console.log(d.toLocaleTimeString());
        h.setMinutes(d.getMinutes() + T);
        var h2 = h.toLocaleTimeString();//heure sans la date
        var d2 = d.toLocaleTimeString();//heure sans la date
        console.log(h2);
        document.getElementById("utilisation").innerHTML = "Heure de réservation" + " " + d2 + " " + "Heure de fin de réservation" + " " + h2;

    }
    else if (temps === "20") {
        document.getElementById("time");
        var T = 20;
        console.log(T);
        document.getElementById("utilisation2").innerHTML = "Le client réserve le pc pendant" + " " + T + "min";
        var d = new Date();
        var h = new Date();
        console.log(d.toLocaleTimeString());
        h.setMinutes(d.getMinutes() + T);
        var h2 = h.toLocaleTimeString();//heure sans la date
        var d2 = d.toLocaleTimeString();//heure sans la date
        console.log(h2);
        document.getElementById("utilisation").innerHTML = "Heure de réservation" + " " + d2 + " " + "Heure de fin de réservation" + " " + h2;
    }
    else if (temps === "30") {
        document.getElementById("time");
        var T = 30;
        console.log(T);
        document.getElementById("utilisation2").innerHTML = "Le client réserve le pc pendant" + " " + T + "min";
        var d = new Date();
        var h = new Date();
        console.log(d.toLocaleTimeString());
        h.setMinutes(d.getMinutes() + T);
        var h2 = h.toLocaleTimeString();//heure sans la date
        var d2 = d.toLocaleTimeString();//heure sans la date
        console.log(h2);
        document.getElementById("utilisation").innerHTML = "Heure de réservation" + " " + d2 + " " + "Heure de fin de réservation" + " " + h2;
    }
    else if (temps === "60") {
        document.getElementById("time");
        var T = 60;
        console.log(T);
        document.getElementById("utilisation2").innerHTML = "Le client réserve le pc pendant" + " " + T + "min";
        var d = new Date();
        var h = new Date();
        console.log(d.toLocaleTimeString());
        h.setMinutes(d.getMinutes() + T);
        var h2 = h.toLocaleTimeString();//heure sans la date
        var d2 = d.toLocaleTimeString();//heure sans la date
        console.log(h2);
        document.getElementById("utilisation").innerHTML = "Heure de réservation" + " " + d2 + " " + "Heure de fin de réservation" + " " + h2;
    }
    else if (temps === "120") {
        document.getElementById("time");
        var T = 120;
        console.log(T);
        document.getElementById("utilisation2").innerHTML = "Le client réserve le pc pendant" + " " + T + "min";
        var d = new Date();
        var h = new Date();
        console.log(d.toLocaleTimeString());
        h.setMinutes(d.getMinutes() + T);
        var h2 = h.toLocaleTimeString();//heure sans la date
        var d2 = d.toLocaleTimeString();//heure sans la date
        console.log(h2);
        document.getElementById("utilisation").innerHTML = "Heure de réservation" + " " + d2 + " " + "Heure de fin de réservation" + " " + h2;
    }
    else if (temps === "180") {
        document.getElementById("time");
        var T = 180;
        console.log(T);
        document.getElementById("utilisation2").innerHTML = "Le client réserve le pc pendant" + " " + T + "min";
        var d = new Date();
        var h = new Date();
        console.log(d.toLocaleTimeString());
        h.setMinutes(d.getMinutes() + T);
        var h2 = h.toLocaleTimeString();//heure sans la date
        var d2 = d.toLocaleTimeString();//heure sans la date
        console.log(h2);
        document.getElementById("utilisation").innerHTML = "Heure de réservation" + " " + d2 + " " + "Heure de fin de réservation" + " " + h2;
    }

}
setInterval(function countdown() {
   
},1000)

function myFunction() {
    //modifie disponible en indisponible
    var nom_utilisateur = document.getElementById("name").value;
    console.log(nom_utilisateur);
    document.getElementById("name_U").innerHTML = document.getElementById("name").value;

}
function couleur() {
    var element = document.getElementById("situation");
    element.classList.remove("bouton"); //couleur du bouton vert en rouge change le css + modifie le txt
    var element = document.getElementById("situation");
    element.classList.add("indisponible");
    document.getElementById("situation").innerHTML = "Indisponible ";

}

function defaut() {

    var element = document.getElementById("situation");
    element.classList.remove("indisponible");
    document.getElementById("situation").innerHTML = "Disponible";
    document.getElementById("utilisation").innerHTML = "Réserver un Ordinateur ";
    var element = document.getElementById("situation");
    element.classList.add("bouton");
}


//recuperer le temps a partir du moment ou on click sur enregister
//en suite y ajouter le temps choisi ;10min; 20min ;1h ;2h; etc...
//afficher un compte a rebours a coter du temps 
