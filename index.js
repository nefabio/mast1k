var speed = prompt("Скорость");
var time = prompt("Время");
var sped = Number(speed);
var tim = Number(time);
function showDistance() {
    alert(sped * tim);
}
showDistance();