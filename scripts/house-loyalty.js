///////Least Loyal\\\\\\\\\\
/*
var bottomPercent = Math.round(data.results[0].members.length *0.10);
*/

var bottomMissed = data.results[0].members.forEach(totalVotosBottom);



function totalVotosBottom(elm) {
    return  ((elm.total_votes - elm.missed_votes)*elm.votes_with_party_pct) / 100;
}

console.log(bottomMissed);



var bottomPercent = Math.round(data.results[0].members.length *0.10);
console.log(bottomPercent);

var bottomLoyal = data.results[0].members.sort((a, b) => (totalVotosBottom(a) - totalVotosBottom(b)));


leastLoyal = data.results[0].members.slice(0, bottomPercent);


for (i = bottomPercent; i < leastLoyal.length; i++){
        if (totalVotesBottom(leastLoyal[bottomPercent- 1]) == totalVotesBottom(leastLoyal[i])){
            leastLoyal.push(leastLoyal[i])}};

var leastLoyalFinal = leastLoyal.map(tablaLeastLoyal)


function tablaLeastLoyal(elm){
     return '<tr><td><a href="' + elm.url + '">' + elm.first_name + " " + (elm.middle_name || "") + " " + elm.last_name + "</a></td><td>" + Math.round(totalVotosBottom(elm)) + "</td><td>" + elm.votes_with_party_pct + "</td></tr>"
}

document.getElementById("leastLoyal").innerHTML = leastLoyalFinal.join("");



////////////Top Loyal\\\\\\\\\\\\\

var topMissed = data.results[0].members.forEach(totalVotosTop);

function totalVotosTop(elm) {
    return  ((elm.total_votes - elm.missed_votes)*elm.votes_with_party_pct) / 100;
};

var topPercent = Math.round(data.results[0].members.length *0.10);

var topLoyal = data.results[0].members.sort((a, b) => (totalVotosTop(b) - totalVotosTop(a))).slice(0, topPercent);

for (i = topPercent; i < topLoyal.length; i++){
    
        if (totalVotosTop(topLoyal[topPercent- 1]) == totalVotosTop(topLoyal[i])){
            
            
            topLoyal.push(topLoyal[i])}};

    
var topLoyalFinal = topLoyal.map(tablaMostLoyal);

function tablaMostLoyal(elm){
     return '<tr><td><a href="' + elm.url + '">' + elm.first_name + " " + (elm.middle_name || "") + " " + elm.last_name + "</a></td><td>" + Math.round(totalVotosTop(elm)) + "</td><td>" + elm.votes_with_party_pct + "</td></tr>"
}


document.getElementById("mostLoyal").innerHTML = topLoyalFinal.join("");

