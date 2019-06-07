        var ar = data.results[0].members;


        var array = data.results[0].members.map(mapear);

        function mapear(elm) {
            var midName;

            if (
                elm.middle_name = "null") {
                midName = ""
            } else {
                midName = elm.middle_name
            }

            return '<tr><td><a href="' + elm.url + '">' + elm.first_name + " " + midName + " " + elm.last_name + "</a></td><td>" + elm.party + "</td><td>" + elm.seniority + "</td><td>" + elm.votes_with_party_pct + "</td></tr>";

        }

        document.getElementById("tablasenado").innerHTML = array.join("");