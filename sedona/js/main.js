var modal = document.getElementById('MyModal');
var btn = document.getElementById('btn');
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display= "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.click = function(event) {
  if (event.target == modal){
    modal.style.display= "none";
  }
}