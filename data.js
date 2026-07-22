function kerko(){

let nisja = document.getElementById("nisja").value;
let destinacioni = document.getElementById("destinacioni").value;

let busSection = document.getElementById("bus");


if(nisja=="" || destinacioni==""){

alert("Zgjidh qytetin e nisjes dhe destinacionin");
return;

}


let gjetur = linjat.filter(function(linja){

return linja.nga == nisja && linja.per == destinacioni;

});



if(gjetur.length > 0){


let html = "<h2>🚌 Rezultati</h2>";


gjetur.forEach(function(linja){


html += `

<div class="card">

<h3>${linja.nga} → ${linja.per}</h3>

<p>🏢 Kompania: ${linja.kompania}</p>

<p>🕒 Oraret: ${linja.ora.join(" | ")}</p>

<p>💶 Çmimi: ${linja.cmimi}</p>

<p>📞 Kontakto kompaninë</p>

</div>

`;


});


busSection.innerHTML = html;


}

else{


busSection.innerHTML = `

<h2>🚌 Rezultati</h2>

<div class="card">

<h3>Nuk u gjet linjë</h3>

<p>Kjo linjë do të shtohet së shpejti.</p>

</div>

`;

}


}




function showSection(id){

document.getElementById(id).scrollIntoView({

behavior:"smooth"

});

}
