// var x = 5;
// console.log(window);
console.dir(document);


function turnGreen() {
    // document.getElementById("my-h1").classList.add("green");
    // document.getElementById("my-h1").className = "green";
    // document.getElementById("color-list").innerHTML += '<li>green</li>'
    let userInput = document.getElementById("my-input").value; 
    document.getElementById("color-list").innerHTML += `<li>${userInput}</li>`
}
