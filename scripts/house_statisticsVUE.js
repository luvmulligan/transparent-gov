var statistics = {
    numberOfDemocrats: 0,
    numberOfRepublicans: 0,
    numberOfIndependents: 0,
    numberOfMissedVotes: 0,
    lessMissedVotes: 0,
    mostMissedVotes: 0,
    percentageDemocrats:0,
    percentageRepublicans:0,
    percentageIndependents:0,
    percentageTotal: 0,
    
};

var data;
    var myHeaders = new Headers();
    myHeaders.append("X-API-Key", "vxWP484PycxWlwlD5UmqZPkP1mkeeSiaGk7JtQFb");

    var myInit = {
    method: 'GET',
    headers: myHeaders}
    
var app = new Vue({  
  el: '#app',  
  data: {
      statistics : {
        numberOfDemocrats: 0,
        numberOfRepublicans: 0,
        numberOfIndependents: 0,
        numberOfMissedVotes: 0,
        leastMissedVotes: [],
        mostMissedVotes: [],
        percentageDemocrats:0,
        percentageRepublicans:0,
        percentageIndependents:0,
        percentageTotal: 0,
        listaSenadores: [],  

    }
  }    
}); 

$(function(){    
    fetch('https://api.propublica.org/congress/v1/115/senate/members.json',myInit)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        data = myJson;
        iniciar() 
    });
})    





        
function iniciar(){    ///////Number of Republicans\\\\\\\\\\\\\\

app.statistics.numberOfDemocrats = data.results[0].members.filter(filtrarD).length;

function filtrarD(elm){
    return elm.party == "D";
}

console.log(statistics.numberOfDemocrats);

////////Number of Democrats\\\\\\\\\\\\\\\\

app.statistics.numberOfRepublicans = data.results[0].members.filter(filtrarR).length;

function filtrarR(elm){
    return elm.party == "R";
}

console.log(statistics.numberOfRepublicans);

////////Number of Independents\\\\\\\\\\\\\

app.statistics.numberOfIndependents = data.results[0].members.filter(filtrarI).length;

function filtrarI(elm){
    return elm.party == "I";
}

console.log(statistics.numberOfIndependents);

////////Number of Totals\\\\\\\\\\\\

app.statistics.numberOfTotal = data.results[0].members.length;


console.log(statistics.numberOfTotal);

/////////Percentage Democrats\\\\\\\\\\\\\\

var sumaPercentageD = 0;

app.data.results[0].members.filter(filtrarD).forEach(sumarPorcentajes);


function sumarPorcentajes(elm){
    
return sumaPercentageD += (elm.votes_with_party_pct || 0);
    
}

app.statistics.percentageDemocrats = sumaPercentageD / 
statistics.numberOfDemocrats;

console.log(sumaPercentageD);


var y = statistics.percentageDemocrats

var c = Math.round(y * 100) / 100;	

console.log(c);

app.statistics.percentageDemocrats = c 

/////////Percentage Republicans \\\\\\\\\\\

var sumaPercentageR = 0;

statistics.percentageRepublicans = data.results[0].members.filter(filtrarR).forEach(sumarPorcentajesR);

function sumarPorcentajesR(elm){
    
return sumaPercentageR += (elm.votes_with_party_pct || 0);
    
}

statistics.percentageRepublicans = sumaPercentageR / statistics.numberOfRepublicans;

console.log(sumaPercentageR);


var x = statistics.percentageRepublicans

var z = Math.round(x * 100) / 100;	

console.log(z);

statistics.percentageRepublicans = z 

///////////Percentage Independents \\\\\\\\\\\\

var sumaPercentageI = 0;

statistics.percentageIndependents = data.results[0].members.filter(filtrarI).forEach(sumarPorcentajesI);

function sumarPorcentajesI(elm){
    
return sumaPercentageI += (elm.votes_with_party_pct || 0);
    
}


statistics.percentageIndependents = sumaPercentageI / statistics.numberOfIndependents||0;

console.log(sumaPercentageI);


var k = statistics.percentageIndependents

var l = Math.round(x * 100) / 100;	

console.log(k);

statistics.percentageIndependents = k;


//////////Total Percentage\\\\\\\\\\

var PercentageT = 0;

statistics.percentageTotal = ((statistics.percentageDemocrats ||0) + (statistics.percentageIndependents ||0)+ (statistics.percentageRepublicans||0))

var t = statistics.percentageTotal
var g = Math.round(t * 100) / 100;

statistics.percentageTotal = g


/////////Table Log\\\\\\\\\\\\\\


       

///////////Least Engagement\\\\\\\\\\

var porcentaje = Math.round(data.results[0].members.length *0.10);


var missedVotes = data.results[0].members.sort((a, b) => (b.missed_votes_pct - a.missed_votes_pct)).slice(0, porcentaje).map(missedVotes);



function missedVotes(elm){
    

console.log(missedVotes);




//////////Most Engagement\\\\\\\\\\\\\\\\


var porcentaje2 = Math.round(data.results[0].members.length *0.10);


var senadores = data.results[0].members.sort((a, b) => (a.missed_votes_pct - b.missed_votes_pct));


var lista = senadores.slice(0, porcentaje2);

    for (i = porcentaje2; i < senadores.length; i++){
        if (senadores[porcentaje2- 1].missed_votes_pct == senadores[i].missed_votes_pct){
            lista.push(senadores[i])}};
        
var listaFinal = lista.map(mostrarTablaMissed);


function mostrarTablaMissed(elm){
    
};





}