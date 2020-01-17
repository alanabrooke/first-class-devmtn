// // document.getElementById("button-1").onclick = handleButtonClick;
// // let arr = document.getElementsByClassName("item");
// // for(let i = 0; i < arr.length; i++) {
// // arr[i].className = "list-item";
// // }


// // function handleButtonClick(event) {
// //     console.log(event)
// // }

// // document
// // .querySelector("#button-1")
// // .addEventListener("click", handleButtonClick);

// document.querySelector("ul").addEventListener("click",function(){
//     console.log(2);
// });
// document.querySelector(".item").addEventListener("click", function (event) {
//     event.stopPropagation();
//     console.log(1);
// });

function addToTodo() {
    //get what is typed
   let userText = document.querySelector("input").value;
    //add that to list
        //  create li tag
    let newLi = document.createElement("li");
    newLi.innerText = userText;
        // add that to ul
    document.querySelector(".movie-list").append(newLi);
}
document.querySelector("button").addEventListener("click", addToTodo);
