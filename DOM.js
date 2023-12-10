const headingElement = document.getElementById("main-heading");
console.log(headinElement.innerHTML);
const newHeadingText = prompt("введите новый заголовок");
headinElement.innerHTML = newHeadingText;
const newHeadingText = prompt("Введите новый заголовок");
$("#main-heading").text(newHeadingText);
$("body").append("<p>Это новый параграф</p>")

for(var i = 0; i < 3; i++) {
      var text = prompt("Напиши любой текст")
      $("body").append("<p>" + text + "</p>")
};

$("#hi").hide(5000).show(5000)

const friends = ["Даник", "Ваня", "Илья"]

$("#main-heading").text("Мои друзья");
for (let i = 0; i < friends.length; i++) {
    $("body").append("<p>" + friends[i] + "</p>")
};
$("p").hide(1).fadeIn(5000);
$("p").append(" лучший!");

$("body").append("<p>"+ "Привет" + "</p>")
for(let i = 1; i < 6; i++){
$("p").fadeOut(i * 1000).fadeIn(i * 1000).delay(5000)
};

$("body").append("<p>"+ "Привет" + "</p>");
$("p").fadeTo(2000, 0.1)

let seconds = 45;
const printMessage = function() {
    console.log("Через " + seconds + " секунд у меня закончится урок")
    seconds--;
}
const intervalId = setInterval(printMessage, 1000)

const printMessage1 = function(){
    console.log("Скоро у меня закончится урок")
};
const timeOutId = setTimeout(printMessage1, 10000);

let rightOffset = 1000;
const moveHeading = function() {
    $("#main-heading").offset({left: rightOffset});
    rightOffset--;
    if (rightOffset < 0) {
        rightOffset = 1000;
    }
};
setInterval(moveHeading, 30)

var clickHandler = function (event) {
    console.log("Клик! " + event.pageX + " " + event.pageY);
};

$("h1").click(clickHandler);

$("html").click(function (event) {
$("#heading").offset({
    left: event.pageX,
    top: event.pageY});
});

let direction = "вправо";
let offset = 0;

$("#heading").offset({left: offset, top:offset});

const move = function(){
    if (direction === "вправо"){
        $("#heading").offset({left: offset})
        offset++;
        if (offset > 200) {
            offset = 0;
            direction = "вниз"
        }
    }else if (direction === "вниз"){
        $("#heading").offset({top: offset})
        offset++;     
        if (offset > 200) {
            offset = 200;
            direction = "влево"
        }      
    }
    else if (direction === "влево") {
        $("#heading").offset({left: offset})
        offset--;
        if (offset < 0) {
            offset = 200;
            direction = "вверх";

        }
    }else if (direction === "вверх"){
    $("#heading").offset({top: offset})
    offset--;
    if (offset < 0) {
        offset = 0;
        direction = "вправо";
        }
    }
}

setInterval(move,30)

let clickCounter = 0;
let time = 30

$("h1").click(function(){
    if ($("h1").click) {
        clickCounter++;
        console.log(clickCounter)
    if (clickCounter > 0){
        clearInterval();
        setInterval(move,time--)}
    if (clickCounter > 10){
        clearInterval();
        $("h1").text("Вы победили")
    
  }}});

