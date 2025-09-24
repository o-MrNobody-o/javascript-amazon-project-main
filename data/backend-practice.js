// create a new HTTP message(request) to send to the backend 
const xhr = new XMLHttpRequest();

xhr.addEventListener('load',() => {
  console.log(xhr.response)
})

// 1st parameter GET/UPDATE/DELETE/POST , 2nd parameter where 
xhr.open('GET','https://supersimplebackend.dev');

// send the message
xhr.send();