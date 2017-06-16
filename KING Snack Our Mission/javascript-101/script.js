//on ecrit du javascript

//var meteo =prompt("Entrer la meteo");
//if(meteo === "pluie")
	//console.log("faut prendre ton pluie");
//}else if(meteo === "pluvieuse")
	//{console.log("faut rester chez toi");
//}else{
    //console.log("faut prendre tes lunettes de bouaké")	
//}

//var pluie = true;
//var vent = true;

//if (pluie && vent){
	//console.log("mon frère,il faut rester chez toi")
//}
//var jour ="samedi";
//if(jour === "samedi"|| jour === "dimanche"){
	//console.log("c'est le week end on va à bouaké");
	//}

//var sunny = true;
//if(!sunny){
	//console.log("cancel beach");
	//}
	
//var weather = "raining";
//if(weather !== "sunny"){
	//console.log("cancel beach");
	//}
//var students = ['Flore','Annabelle','Armande','Abibata']
//for (var i = students.length-1; i>=0; i--) {
	//console.log(students[i]);
//}
//while (x<5){
	//console.log(x);
	//x++;
	//}
	
//var y = 0;	
//do {
	//console.log	(y);
	//y++;
	//}while(y<5);

//var genre = prompt("Entre votre genre!");
//	case "feminin":
	//console.log("Bonjour, je suis une femme");
	//break;

	//case "masculin":
	//console.log("Bonjour, je suis un homme");
	//break;

	//case "transgenre":
	//console.log("Bonjour, je suis un transgenre");
	//break;

	//default:
	//console.log("Bonjour, je suis un humain");
	//}*

	//Déclaration d'un object
	//Methode 1
	//var obj = new Object();

	//Methode 2
    /*var obj = {}; //syntaxe littérale
    obj.nom = "flore";
    var nom = obj.nom;
    console.log(nom);*/

	/*obj ["nom"] ="flore"
 var nom = obj["nom"]
	console.log(nom);*/

/*var Persone = {
	nom:"yao",
	Prenoms: "flore",
	taille: "1.67m",
	yeux:"marron",
	datedenaissance:{
		jour:27,
		mois:"mai",
		année: 2017
	}	
}

console.log(Persone["nom"]);
//nomObjet["nomPropriété"]*/

/*function fullName(first,last){
	var name = first+" "+last;
	return name;
}
console.log(fullName("Yao","Flore"));
function multiplier(num1, num2){
	var resultat = num1*num2;
	return resultat;
}
console.log(multiplier(3,2));*/

//une autre methode de créer des objets
//fonction constructeur parce qu'elle permet de creer des objets

/*function Voiture(fabricant,modele,annee,couleur){
	this.fabricant = fabricant ;
	this.modele = modele;
	this.annee = annee ;
	this.couleur = couleur;
	this.afficheVoiture = afficheVoiture;
}
function afficheVoiture(){
	var resultat = "Une"+this.fabricant+" "+this.modele+"de"+this.annee;
	console.log(resultat);
}

var maVoiture = new Voiture("BMW","X5",2014,"bleu");
maVoiture.afficheVoiture();

window.alert("coucou ca va");*/

//var div =document.getElementById('coding');
//alert (div);

/*var paragraphes = document.getElementsByTagName('p');
for (var i = 0; i < paragraphes.length; i++) {
	alert(paragraphes[i].innerHTML);
}*/

/*var query = document.querySelector('#menu .item span');
var queryAll = document.querySelectorAll('#menu .item span');
alert(query.innerHTML);
alert(queryAll.length);
alert(queryAll[0].innerHTML+ "-" +queryAll[1].innerHTML);*/

$(document).ready(function(){
$('.box').text("c'est faux tu es un VI");

});
