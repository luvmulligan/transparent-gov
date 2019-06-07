var mySelect = data.results[0].members.map(mappingState).sort();
var options = [];
options.push('<option value="all">All states</option>')
mySelect.forEach(function (option) {
    if (options.indexOf(option) < 0) {
        options.push(option)
    }
})

document.getElementById("estados").innerHTML = options.join('');
//document.getElementById("estados").insertAdjacentHTML( 'beforeend', options.join('') ) 

seleccionDemocrats();

function mapear(elm) {

    return '<tr><td><a href="' + elm.url + '">' + elm.first_name + " " + (elm.middle_name || "") + " " + elm.last_name + "</a></td><td>" + elm.party + "</td><td>" + elm.state + "</td><td>" + elm.seniority + "</td><td>" + elm.votes_with_party_pct + "</td></tr>";

}

function filtrar(elm) {
    var state = document.getElementById("estados").value;
    var checkbox = Array.from(document.querySelectorAll('input[class=checkbox]:checked')).map(elm => elm.value)

    return (checkbox.indexOf(elm.party) != -1 && (state == elm.state || state == 'all'));

}

//        document.getElementById("tablasenado").innerHTML = array.join("");



function seleccionDemocrats() {

    var checkbox = Array.from(document.querySelectorAll('input[class=checkbox]:checked')).map(elm => elm.value)
    document.getElementById("tablasenado").innerHTML = data.results[0].members.filter(filtrar).map(mapear).join("");
}

///////


/*
 */


function mappingState(elm) {

    return '<option value="' + elm.state + '">' + elm.state + '</option>'

}





