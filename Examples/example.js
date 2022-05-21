// const url = 'https://api.github.com/users/octocat/repos'
const url_all = 'https://reqres.in/api/users' // all users
const url_single = 'https://reqres.in/api/users/1' // single user
// fetch(url, {options})
const fetch_response = fetch(url_all)

// fetch is promise-based
// should see that the response is a promise
// can use promises or async/await to consume the response promise object
console.log(fetch_response)

// response has a body, but the body is not accessible
fetch_response.then(response  =>  console.log(response))

console.log('=============')

// so must call the json() method on the response in order to use the data in the body
// fetch_response.then(response => response.json()).then(data => console.log(data))


// try to get a user that doesn't exist; should return 404
// const fetch23 = 