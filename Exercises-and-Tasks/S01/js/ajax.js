// JavaScript Document

//a function to obtain a single item of data, under a given id
function getData(id) {
    var adr = 'https://jsonplaceholder.typicode.com/albums/' + id;
        
        fetch(adr).then(function(response) {

            console.log(response);
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error encountered");
            }
        }).then(function(data) {
            
            console.log(data);
      
            //sample usage of data in the DOM
            document.querySelector("#test2").innerHTML = '';
            var newItem = document.createElement("div");

            var a1 = document.createElement("h1");
            a1.innerText = data.id;

            var a2 = document.createElement("p");
            a2.innerText = data.title;

            newItem.appendChild(a1);
            newItem.appendChild(a2);
            console.log(newItem);
            document.querySelector("#test2").appendChild(newItem);
            
        })
        .catch(function(error) {
            alert(error);
        });
}

window.onload = function() {

    document.getElementById("button").onclick = function() {
        //call the function
        getData(1);
    }
    
    document.getElementById("button2").onclick = function() {
        //call the function
        getData(2);
    }
    
    document.getElementById("button3").onclick = function() {
        //call the function
        getData(3);
    }

}
