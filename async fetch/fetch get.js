var req = new Request('https://jsonplaceholder.typicode.com/posts', {method: 'GET', cache: 'reload'});

fetch(req).then(function(response) {
 return response.json();
}).then(function(json) {
  console.log(json)
});