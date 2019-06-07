

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





        
function iniciar(){       

///////Number of Republicans\\\\\\\\\\\\\\

app.statistics.numberOfDemocrats = data.results[0].members.filter(filtrarD).length;

function filtrarD(elm){
    return elm.party == "D";
}


////////Number of Democrats\\\\\\\\\\\\\\\\

app.statistics.numberOfRepublicans = data.results[0].members.filter(filtrarR).length;

function filtrarR(elm){
    return elm.party == "R";
}


////////Number of Independents\\\\\\\\\\\\\

app.statistics.numberOfIndependents = data.results[0].members.filter(filtrarI).length;

function filtrarI(elm){
    return elm.party == "I";
}


////////Number of Totals\\\\\\\\\\\\

app.statistics.numberOfTotal = data.results[0].members.length;



    
/////////Percentage Democrats\\\\\\\\\\\\\\

var sumaPercentageD = 0;

app.statistics.percentageDemocrats = data.results[0].members.filter(filtrarD).forEach(sumarPorcentajes);



function sumarPorcentajes(elm){
    
return sumaPercentageD = sumaPercentageD + elm.votes_with_party_pct;
    
}



app.statistics.percentageDemocrats = sumaPercentageD / app.statistics.numberOfDemocrats;



var y = app.statistics.percentageDemocrats

var c = Math.round(y * 100) / 100;	

console.log(c);

app.statistics.percentageDemocrats = c 

/////////Percentage Republicans \\\\\\\\\\\


var sumaPercentageR = 0;

app.statistics.percentageRepublicans = data.results[0].members.filter(filtrarR).forEach(sumarPorcentajesR);



function sumarPorcentajesR(elm){
    
return sumaPercentageR = sumaPercentageR + elm.votes_with_party_pct;
    
}


app.statistics.percentageRepublicans = sumaPercentageR / app.statistics.numberOfRepublicans;



var x = app.statistics.percentageRepublicans

var z = Math.round(x * 100) / 100;	

console.log(z);

app.statistics.percentageRepublicans = z 


///////////Percentage Independents \\\\\\\\\\\\

var sumaPercentageI = 0;

app.statistics.percentageIndependents = data.results[0].members.filter(filtrarI).forEach(sumarPorcentajesI);



function sumarPorcentajesI(elm){
    
return sumaPercentageI = sumaPercentageI + elm.votes_with_party_pct;
    
}


app.statistics.percentageIndependents = sumaPercentageI / app.statistics.numberOfIndependents;



var b = app.statistics.percentageIndependents

var c = Math.round(b * 100) / 100;	

console.log(c);

app.statistics.percentageIndependents = c;


//////////Total Percentage\\\\\\\\\\

var PercentageT = 0;

app.statistics.percentageTotal = (app.statistics.percentageDemocrats + app.statistics.percentageIndependents + app.statistics.percentageRepublicans) / 3

var t = app.statistics.percentageTotal
var g = Math.round(t * 100) / 100;

app.statistics.percentageTotal = g




       

///////////Least Engagement\\\\\\\\\\

var porcentaje = Math.round(data.results[0].members.length *0.10);


app.statistics.mostMissedVotes = data.results[0].members.sort((a, b) => (b.missed_votes_pct - a.missed_votes_pct)).slice(0, porcentaje)
    
    
    



var porcentaje2 = Math.round(data.results[0].members.length *0.10);


app.statistics.leastMissedVotes = data.results[0].members.sort((a, b) => (a.missed_votes_pct - b.missed_votes_pct));


var lista = app.statistics.leastMissedVotes.slice(0, porcentaje2);

    for (i = porcentaje2; i < app.statistics.leastMissedVotes.length; i++){
        if (app.statistics.leastMissedVotes[porcentaje2- 1].missed_votes_pct == app.statistics.leastMissedVotes[i].missed_votes_pct){
            lista.push(app.statistics.leastMissedVotes[i])}};
        
app.statistics.leastMissedVotes = lista;


};
