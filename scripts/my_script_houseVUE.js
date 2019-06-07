var data;
    var myHeaders = new Headers();
    myHeaders.append("X-API-Key", "vxWP484PycxWlwlD5UmqZPkP1mkeeSiaGk7JtQFb");

    var myInit = {
    method: 'GET',
    headers: myHeaders}
    

    
   var app = new Vue({  
  el: '#app',  
  data: {
      senators: [],
      selected: 'All',
      senatorFilters: ["R", "D", "I"],

    }
  });    
    
    
$(function(){    
    fetch('https://api.propublica.org/congress/v1/115/house/members.json',myInit)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        data = myJson;
        
        
        var senators = [];

app.senators = data.results[0].members;

        
   
    });
    
    
    
  
});
  





