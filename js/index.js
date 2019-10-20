
const clock = document.querySelector('.clock');
setInterval( () => clock.innerText = new Date().toLocaleTimeString(),  1000 );

document.getElementById('backgraund').onchange= e => document.body.style.backgroundColor = e.target.value;

