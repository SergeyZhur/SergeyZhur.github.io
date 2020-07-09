window.onload = loadStr;
let input = document.querySelector('.inp')
let valueCase = '';
let baseDate = [];

console.log(loadStr())
input.addEventListener('keydown', function(event) {
 
  if(event.keyCode === 13) {
   if (input.value === '') return

    
    valueCase = valueCase + ',' + input.value;
    
    let valueInArray = valueCase.split(',')

valueInArray = valueInArray.filter((n) => {
return n != ''
});

  
    // baseDate.push(valueCase)
    
   
    input.value = '';
    

  let obj = {
    name: valueInArray
  }
// NENNENNENEEN
 // loadStr()
 // obj.name = obj.name[obj.name.concat(loadStr())]
  // console.log(obj)
  
    
//     var alpha = ["a", "b", "c"];

// var numeric = [1, 2, 3];

 

// // создает массив ["a", "b", "c", 1, 2, 3];

// var alpha = alpha.concat(numeric);
// console.log(alpha)
    
    
   let json = JSON.stringify(obj);
      localStorage.setItem('obj', json);
   // let xm = obj.name[obj.name.length - 1]; <= это более простой вариант вычета последнего элемента массива , чем который указан ниже, писать полный путь нужно [obj.name.length - 1]
    let xm = obj?.name[obj?.name?.length - 1] ?? '';
    
    
//     if(obj.name.length === 1) {
//   console.log(8)
// }
//     for(let i = 0; i.obj.name.length; i++) {
//         if( xm === undefined && obj.name.length === i ) {

//     return
     
//   } 
//     }


          
    console.log(obj.name)
       input.insertAdjacentHTML('afterend',`<div>${obj.name.pop()}</div>`);

  }
  
})

function loadStr() {
 
let jsonOfLocalStorage = localStorage.getItem('obj');

let obj = JSON.parse(jsonOfLocalStorage);
 
   if (!obj) {
 
    return obj = {}
     
   }

return obj.name
 

// console.log(obj)
}


let data = loadStr()

for(let i = 0; i<data.length; i++) {

  data.reverse();

  input.insertAdjacentHTML('afterend',`<div>${data[i]}</div>`)
}







function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Вася");
let op = new User(1)
// console.log(user.name)
// console.log(op.name)

let ms = {key:1};
// console.log(m)
// m.key = 3;
// m.key = 33;
// console.log(m)

// console.log(Object.keys(m).length)
// длинна обьекта
// for(let i = 0; i <= Object.keys(ms).length; i++) {
  
// // console.log(Object.keys(ms).length)
//   // console.log(i)
  
//   // console.log(i)
//  // ms.[i]= 'kek';
// //   break;
// // console.log(ms)
// //   for (let key in m) {
	  
// //     console.log(m[i] = keys)
// // }
// }
// console.log(ms)
// console.log(m)
// console.log(Object.keys(m).length)
// console.log(m)
// for (let key in obj) {
// 	result[obj[key]] = key;
// }