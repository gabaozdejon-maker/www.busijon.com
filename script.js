function kerko(){

let nisja=document.getElementById("nisja").value;
let destinacioni=document.getElementById("destinacioni").value;


if(nisja=="" || destinacioni==""){
alert("Zgjidh qytetin e nisjes dhe destinacionin");
return;
}


alert("Po kërkojmë: "+nisja+" → "+destinacioni);

}
