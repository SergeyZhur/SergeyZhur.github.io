'use strict';

function g() {

  window.load = function(onLoad, onError)
  {

    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function() {
      if(xhr.status === 200) {
        
      }
    })
  }

}
