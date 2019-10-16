var first = document.getElementById('one');
var second = document.getElementById('two');
var gogo = document.getElementById('gogo');
var popap = document.getElementById('popap');
var one2 = document.getElementById('one2');


first.addEventListener('click', doa);

function doa() {
  second.classList.remove("as");
  first.classList.add("d");

popap.style.display='block';

 gogo.classList.remove("gogo2");
 gogo.classList.add("gogo");

 one2.classList.add('one2');
}


second.addEventListener('click',sec);
function sec() {
  first.classList.remove("d");
  second.classList.add("as");
  
popap.style.display='none';

gogo.classList.remove('gogo');
  gogo.classList.add('gogo2');
}