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



///////Number of Republicans\\\\\\\\\\\\\\

statistics.numberOfDemocrats = data.results[0].members.filter(filtrarD).length;

function filtrarD(elm){
    return elm.party == "D";
}

console.log(statistics.numberOfDemocrats);

////////Number of Democrats\\\\\\\\\\\\\\\\

statistics.numberOfRepublicans = data.results[0].members.filter(filtrarR).length;

function filtrarR(elm){
    return elm.party == "R";
}

console.log(statistics.numberOfRepublicans);

////////Number of Independents\\\\\\\\\\\\\

statistics.numberOfIndependents = data.results[0].members.filter(filtrarI).length;

function filtrarI(elm){
    return elm.party == "I";
}

console.log(statistics.numberOfIndependents);

////////Number of Totals\\\\\\\\\\\\

statistics.numberOfTotal = data.results[0].members.length;


console.log(statistics.numberOfTotal);

/////////Percentage Democrats\\\\\\\\\\\\\\

var sumaPercentageD = 0;

statistics.percentageDemocrats = data.results[0].members.filter(filtrarD).forEach(sumarPorcentajes);



function sumarPorcentajes(elm){
    
return sumaPercentageD = sumaPercentageD + elm.votes_with_party_pct;
    
}



statistics.percentageDemocrats = sumaPercentageD / statistics.numberOfDemocrats;

console.log(sumaPercentageD);


var y = statistics.percentageDemocrats

var c = Math.round(y * 100) / 100;	

console.log(c);

statistics.percentageDemocrats = c 

/////////Percentage Republicans \\\\\\\\\\\


var sumaPercentageR = 0;

statistics.percentageRepublicans = data.results[0].members.filter(filtrarR).forEach(sumarPorcentajesR);



function sumarPorcentajesR(elm){
    
return sumaPercentageR = sumaPercentageR + elm.votes_with_party_pct;
    
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
    
return sumaPercentageI = sumaPercentageI + elm.votes_with_party_pct;
    
}


statistics.percentageRepublicans = sumaPercentageI / statistics.numberOfIndependents;

console.log(sumaPercentageI);


var b = statistics.percentageIndependents

var c = Math.round(x * 100) / 100;	

console.log(c);

statistics.percentageIndependents = c;


//////////Total Percentage\\\\\\\\\\

var PercentageT = 0;

statistics.percentageTotal = (statistics.percentageDemocrats + statistics.percentageIndependents + statistics.percentageRepublicans) / 3

var t = statistics.percentageTotal
var g = Math.round(t * 100) / 100;

statistics.percentageTotal = g


/////////Table Log\\\\\\\\\\\\\\

 var tablaAttendance = '<tr><td>Democrats</td><td>'+ statistics.numberOfDemocrats +'</td><td>'+statistics.percentageDemocrats+'</td></tr><tr><td>Republican</td><td>'+statistics.numberOfRepublicans+'</td><td>'+statistics.percentageRepublicans+'</td></tr><tr><td>Independent</td><td>'+statistics.numberOfIndependents+'</td><td>'+statistics.percentageIndependents+'</td></tr><tr><td>Total</td><td>'+statistics.numberOfTotal+'</td><td>'+statistics.percentageTotal+'</td>'
document.getElementById("attendance").innerHTML = tablaAttendance
       

///////////Least Engagement\\\\\\\\\\

var porcentaje = Math.round(data.results[0].members.length *0.10);


var missedVotes = data.results[0].members.sort((a, b) => (b.missed_votes_pct - a.missed_votes_pct)).slice(0, porcentaje).map(missedVotes);



function missedVotes(elm){
    return '<tr><td><a href="' + elm.url + '">' + elm.first_name + " " + (elm.middle_name || "") + " " + elm.last_name + "</a></td><td>" + elm.missed_votes + "</td><td>" + elm.missed_votes_pct + "</td></tr>";
}

console.log(missedVotes);


document.getElementById("leastEngagement").innerHTML = missedVotes.join('');


//////////Most Engagement\\\\\\\\\\\\\\\\


var porcentaje2 = Math.round(data.results[0].members.length *0.10);


var senadores = data.results[0].members.sort((a, b) => (a.missed_votes_pct - b.missed_votes_pct));


var lista = senadores.slice(0, porcentaje2);

    for (i = porcentaje2; i < senadores.length; i++){
        if (senadores[porcentaje2- 1].missed_votes_pct == senadores[i].missed_votes_pct){
            lista.push(senadores[i])}};
        
var listaFinal = lista.map(mostrarTablaMissed);


function mostrarTablaMissed(elm){
    return '<tr><td><a href="' + elm.url + '">' + elm.first_name + " " + (elm.middle_name || "") + " " + elm.last_name + "</a></td><td>" + elm.missed_votes + "</td><td>" + elm.missed_votes_pct + "</td></tr>";
};



document.getElementById("mostEngagement").innerHTML = listaFinal.join('');







