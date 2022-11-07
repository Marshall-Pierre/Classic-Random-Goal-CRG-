// function getScore() {
//     const request = new Request('localhost:1743/match', {method: 'POST', body:'{"foo": "bar"}'});
// }

// getScore()

const request = new Request('http://localhost:1743/match', {method: 'POST', mode: 'no-cors', body:'{"psg": "5", "OM": "4"}'});

// const url = request.url;
// const method = request.method;
// const credentials = request.credentials;
// const bodyUsed = request.bodyUsed;
// const mode = request.mode

fetch(request)
.then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.error);
    }
})
.then((response) => {
    console.debug(response);
    // …
}).catch((error) => {
    console.error(error);
});


// const xhr = new XMLHttpRequest();
// xhr.open("POST", "http://localhost:1743/match");
// xhr.setRequestHeader("X-PINGOTHER", "pingpong");
// xhr.setRequestHeader("Content-Type", "text/xml");
// xhr.onreadystatechange = handler;
// xhr.send("<person><name>Arun</name></person>");