function kerko(){

let nisja = document.getElementById("nisja").value;
let destinacioni = document.getElementById("destinacioni").value;

let rezultatet = document.getElementById("bus");


if(nisja=="" || destinacioni==""){

alert("Zgjidh qytetin e nisjes dhe destinacionin");
return;

}



let rruga = nisja + " → " + destinacioni;



if(
(nisja=="Tiranë" && destinacioni=="Gjirokastër") ||
(nisja=="Gjirokastër" && destinacioni=="Tiranë")
){


rezultatet.innerHTML = `

<h2>🚌 Rezultati</h2>

<div class="card">

<h3>${rruga}</h3>

<p>🕒 Oraret: 07:00 | 09:30 | 13:00 | 16:00</p>

<p>💶 Çmimi: 1000 Lek</p>

<p>📞 Kontakto kompaninë</p>

</div>

`;

}


else if(

(nisja=="Tiranë" && destinacioni=="Sarandë") ||
(nisja=="Sarandë" && destinacioni=="Tiranë")

){


rezultatet.innerHTML = `

<h2>🚌 Rezultati</h2>

<div class="card">

<h3>${rruga}</h3>

<p>🕒 Oraret: 05:30 | 09:00 | 14:00</p>

<p>💶 Çmimi: 1500 Lek</p>

<p>📞 Kontakto kompaninë</p>

</div>

`;

}


else{


rezultatet.innerHTML = `

<h2>🚌 Rezultati</h2>

<div class="card">

<h3>Nuk u gjet linjë ende</h3>

<p>Na kontakto dhe do ta shtojmë këtë itinerar.</p>

</div>

`;

}


}




function showSection(id){


let section = document.getElementById(id);


section.scrollIntoView({

behavior:"smooth"

});


}function rezervo(udhetimi){

let emri = prompt("Shkruaj emrin dhe mbiemrin:");

let telefoni = prompt("Numri i telefonit:");

let persona = prompt("Sa persona udhëtojnë?");


if(emri=="" || telefoni==""){

alert("Plotëso të dhënat");
return;

}


alert(
"Rezervimi u dërgua!\n\n"+
"Udhëtimi: "+udhetimi+
"\nEmri: "+emri+
"\nTelefon: "+telefoni+
"\nPersona: "+persona
);


}
