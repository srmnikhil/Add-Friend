var istatus = document.querySelector("h5");

var addFriend = document.querySelector("#add");
var initial = true
addFriend.addEventListener("click", function(){
    if (initial == true){
    istatus.innerHTML="Friends";
    istatus.style.color = "green";
    addFriend.style.color = "white";
    addFriend.style.backgroundColor = "red";
    addFriend.innerHTML = "Remove";
    initial = false;
    }
    else{
    istatus.innerHTML="Stranger";
    istatus.style.color = "red";
    addFriend.style.color = "white";
    addFriend.style.backgroundColor = "rgb(27, 53, 225)";
    addFriend.innerHTML = "Add Friend";
    initial = true;
    }
})