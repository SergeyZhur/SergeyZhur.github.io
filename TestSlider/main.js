let item_1 = document.getElementById('item-1');
let item_2 = document.getElementById('item-2');


let dot_1 = document.getElementById('dot-1');
let dot_2 = document.getElementById('dot-2');
let dot_22 = document.getElementById('dot-22');
let dot_12 = document.getElementById('dot-12');

dot_2.onclick = function () {
  item_1.style.display = "none"
  item_2.style.display = "flex"
  dot_12.style.border = "solid blue 2px"
}

dot_22.onclick = function () {
  item_2.style.display = "none";
  item_1.style.display = "flex";
  dot_1.style.border = "solid blue 2px"

}