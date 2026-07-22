let udhetimiZgjedhur="";


function rezervo(udhetimi){

udhetimiZgjedhur = udhetimi;


document.getElementById("bookingForm").style.display="block";


document.getElementById("tripName").innerHTML =
"Udhëtimi: "+udhetimi;


window.scrollTo({

top:document.getElementById("bookingForm").offsetTop,

behavior:"smooth"

});


}




function dergoRezervimin(){


let emri=document.getElementById("emri").value;

let telefoni=document.getElementById("telefoni").value;

let email=document.getElementById("email").value;

let persona=document.getElementById("persona").value;



if(emri=="" || telefoni==""){

alert("Plotëso emrin dhe telefonin");

return;

}



alert(
"✅ Rezervimi u dërgua!\n\n"+
"Udhëtimi: "+udhetimiZgjedhur+
"\nEmri: "+emri+
"\nTelefon: "+telefoni+
"\nPersona: "+persona
);



}
