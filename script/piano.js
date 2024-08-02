var btC4 = document.getElementById("btC4");
var btCs4 = document.getElementById("btCs4");
var btD4 = document.getElementById("btD4");
var btEb4 = document.getElementById("btEb4");
var btE4 = document.getElementById("btE4");
var btF4 = document.getElementById("btF4");
var btFs4 = document.getElementById("btFs4");
var btG4 = document.getElementById("btG4");
var btGs4 = document.getElementById("btGs4");
var btA4 = document.getElementById("btA4");
var btBb4 = document.getElementById("btBb4");
var btB4 = document.getElementById("btB4");
var btC5 = document.getElementById("btC5");
var btCs5 = document.getElementById("btCs5");
var btD5 = document.getElementById("btD5");
var btEb5 = document.getElementById("btEb5");
var btE5 = document.getElementById("btE5");

function getSound(button, sound) {
    button.style.backgroundColor = "gray";
    if (sound.paused) {
        sound.play();
    } else {
        sound.pause();
        sound.currentTime = 0
        sound.play();
    }
    setTimeout(() => {
        if (button.id.length == 4) {
            button.style.backgroundColor = "white";
        } else {
            button.style.backgroundColor = "black";
        }
    }, 100);
}

function play(event) {
    if (event.key == "z" || event.key == "Z") getSound(btC4, piano_C4);
    if (event.key == "s" || event.key == "S") getSound(btCs4, piano_Cs4);
    if (event.key == "x" || event.key == "X") getSound(btD4, piano_D4);
    if (event.key == "d" || event.key == "D") getSound(btEb4, piano_Eb4);
    if (event.key == "c" || event.key == "C") getSound(btE4, piano_E4);
    if (event.key == "v" || event.key == "V") getSound(btF4, piano_F4);
    if (event.key == "g" || event.key == "G") getSound(btFs4, piano_Fs4);
    if (event.key == "b" || event.key == "B") getSound(btG4, piano_G4);
    if (event.key == "h" || event.key == "H") getSound(btGs4, piano_Gs4);
    if (event.key == "n" || event.key == "N") getSound(btA4, piano_A4);
    if (event.key == "j" || event.key == "J") getSound(btBb4, piano_Bb4);
    if (event.key == "m" || event.key == "M") getSound(btB4, piano_B4);
    if (event.key == ",") getSound(btC5, piano_C5);
    if (event.key == "l" || event.key == "L") getSound(btCs5, piano_Cs5);
    if (event.key == ".") getSound(btD5, piano_D5);
    if (event.key == ";") getSound(btEb5, piano_Eb5);
    if (event.key == "/") getSound(btE5, piano_E5);
}