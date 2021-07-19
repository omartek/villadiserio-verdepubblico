// funzione per l'ordinamento dell'array ottenuta mydata
Array.prototype.sortOn = function(key){
	this.sort(function(a, b){
		if(a[key] < b[key]){
			return -1;
		}else if(a[key] > b[key]){
			return 1;
		}
		return 0;
	});
} 

// nel file JSON utilizzare ` backtick per risolvere problemi di visualizzazione e permettere una formattazione leggibile non minify
var mydata = JSON.parse(data);

mydata.sortOn("scientific_name");

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('stazione').onchange = cambia_stazione;
});

function cambia_stazione(num) {
 	
	// variabili contatore e valore del menu a tendina
	var cont = 0;
	if (this.value !== undefined){
	var num = parseInt(this.value);
	}
	console.log(this.value);

	// cancellazione del <div>
	document.getElementById("tabella").innerHTML = "";

	// creazione delle variabili e della tabella vuota
	var table = document.createElement("table"), row, cellA, cellB, testo_link;
	document.getElementById("tabella").appendChild(table);

	// creazione header della tabella con numero stazione selezionata
	row = document.createElement("tr")
	cellA = document.createElement("th");
	cellA.innerHTML = "Stazione " + num;
	table.appendChild(row);
	row.appendChild(cellA);
	cellA.setAttribute("colspan","2");
	cellA.setAttribute("text-align","center");

	// ciclo per la costruzione della tabella
	for (let key in mydata) {

		if (mydata[key].field_villads === num){

			// creazione di riga ed elementi cella
			row = document.createElement("tr");
			cellA = document.createElement("td");
			cellB = document.createElement("td");
			
			//testo_link="<a target=_blank href=\""+mydata[key].url+"\">"+mydata[key].scientific_name+"<\a>";

			testo_link="<a class=\"preview\" target=_blank href=\""+ mydata[key].url +"\">"+ mydata[key].scientific_name +"<img src= " + mydata[key].image_url + " class=\"hide-image\" /><\a>";
			// inserimento valori nelle celle
			cellA.innerHTML = testo_link;
			cellB.innerHTML = mydata[key].species_guess;
			
			// aggiunta di riga e dati alla tabella
			table.appendChild(row);
			row.appendChild(cellA);
			row.appendChild(cellB);

			cont ++;
		}
	}
	
	// inserimento ultima riga con calcolo del numero di specie osservate nella stazione
	row = document.createElement("tr")
	cellA = document.createElement("th");
	cellA.innerHTML = "Num. specie osservate " + cont;
	table.appendChild(row);
	row.appendChild(cellA);
	cellA.setAttribute("colspan","2");

	// reset del valore selezionato nel menu a tendina
	this.selectedIndex=0;
};