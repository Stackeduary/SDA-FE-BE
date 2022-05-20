// JavaScript Document

//a function to obtain a single item of data, under a given id
function getData(id) {
    var adr = 'https://jsonplaceholder.typicode.com/albums/' + id;
        
        fetch(adr).then(function(response) {

            //TODO take JSON data from the response
            //or throw an error if necessary
        }).then(function(data) {
            
            //TODO display data in console
            //and put it somewhere in DOM
        })
        .catch(function(error) {
            alert(error);
        });
}

//when window is loaded...
window.onload = function() {

    //TODO create some event listeners that will call your function when user clicks something
}
