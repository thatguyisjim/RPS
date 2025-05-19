for(var i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

window.onload = function() {
    document.getElementById("my_audio").play();
}

document.addEventListener("keydown", handleClick);
function handleClick(event) {
var buttonInnerHTML = this.innerHTML;
var buttonPressInnerHtml = event.key;
switch (buttonInnerHTML||buttonPressInnerHtml) {
    case "P":
        var paper = new Audio("sounds/paper-rip-fast-252617.mp3");
        paper.play();
        var randomNum = Math.floor((Math.random()*3)+1);
        if (randomNum == 2) {
            alert("You have succeeded! The computer chose rock");
            console.log(randomNum);
        }
        else if (randomNum == 3) {
            alert("You have lost...The computer chose scissors");
            console.log(randomNum);
        }
        else if (randomNum == 1) {
            alert("You have tied? The computer chose paper");
            console.log(randomNum);
        }
        break;
    case "R":
        var rock = new Audio("sounds/moai.mp3");
        rock.play();
        var randomNum = Math.floor((Math.random()*3)+1);
        if (randomNum == 3) {
            alert("You have succeeded! The computer chose scissors");
            console.log(randomNum);
        }
        else if (randomNum == 1) {
            alert("You have lost...The computer chose paper");
            console.log(randomNum);
        }
        else if (randomNum == 2) {
            alert("You have tied? The computer chose rock");
            console.log(randomNum);
        }
        break;
    case "S":
        var scissors = new Audio("sounds/scissors-quick-cut-100455.mp3");
        scissors.play();
        var randomNum = Math.floor((Math.random()*3)+1);
        if (randomNum == 1) {
            alert("You have succeeded! The computer chose paper");
            console.log(randomNum);
        }
        else if (randomNum == 2) {
            alert("You have lost...The computer chose rock");
            console.log(randomNum);
        }
        else if (randomNum == 3) {
            alert("You have tied? The computer chose scissors");
            console.log(randomNum);
        }
        break;
    default:
        console.log(buttonInnerHTML)
        break;
}
}