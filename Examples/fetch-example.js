let responseArray = []

fetch('https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts')
.then(response  =>  response.json())
.then(function (response) {
	console.log(response)
    console.log(response.status)
    console.log(response.ok)
})
.catch(function (error) {
	console.log('error', error)
})