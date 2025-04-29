fetch('http://localhost:8081/users', {
    method: "GET",
    headers: {"Content-Type": "application/json"}
}).then(res => res.json()).then(resBody => console.log(resBody));

fetch('http://localhost:8081/users', {
    method: "POST",
    body: JSON.stringify({username: "Demo"}),
    headers: {"Content-Type": "application/json"}
}).then(res => res.json()).then(resBody => console.log(resBody));
