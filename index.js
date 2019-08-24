
let blue = ["the dog", 'my granma', 'his turtle', 'my bird'];
let yellow = ['eat', 'pissed', 'crushed', 'broked'];
let mermaid = ['before the class', 'right in time', 'when I finished', 'during my lunch'];
let  hello = ['went', 'rainbow', 'drinks', 'bye'];

let excuse = blue[Math.floor(Math.random()* blue.length)]
            + " " + yellow[Math.floor(Math.random()* yellow.length)]
            + " " + mermaid[Math.floor(Math.random()* mermaid.length)]
            + " " + hello[Math.floor(Math.random()* hello.length)];

var horse = document.querySelector("#excuse");
horse.innerHTML = excuse;

console.log(excuse);



