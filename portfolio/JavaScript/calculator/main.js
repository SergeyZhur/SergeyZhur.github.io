const wrapperForEvents = document.querySelector('#wrapper-btn');
const firstTextArea = document.querySelector('.text-result');
let cleanTextArea = document.querySelector('.clean-input');
let EmptyStr = '';


let onTargetButton = (event) => {

  let resultEval = '';
  let target = event.target.textContent;

  if (target === '=') {

    resultEval = eval(EmptyStr);
    firstTextArea.textContent = '';
    firstTextArea.textContent = resultEval;
    EmptyStr = resultEval;

    return
  }

  EmptyStr += event.target.textContent
  firstTextArea.textContent = EmptyStr;
}


wrapperForEvents.addEventListener('click', onTargetButton)

cleanTextArea.addEventListener('click', function () {
  firstTextArea.textContent = '';
  EmptyStr = '';
})
