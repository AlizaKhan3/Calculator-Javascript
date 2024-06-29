var inputField= document.getElementById('inputField');

function setNumber(num){
    var lastVar = inputField.value.slice(inputField.value.length -1);
    // console.log(lastVar);
    var myOperators = ["+", "-", "/", "*", "%"]
    if (myOperators.indexOf(lastVar) !== -1 && myOperators.indexOf(num) !== -1 ){
        inputField.value = inputField.value.slice(0,-1) + num 
    } else{
        inputField.value += num;
    }
    // console.log(inputField);
}
//disabled Alphabets in InputField
inputField.addEventListener('keydown', (e) => {
  const alphanumericRegex = /^[a-zA-Z]$/;

  if (alphanumericRegex.test(e.key)) {
    e.preventDefault();
  }
});

function clearInput(){
    inputField.value = " ";   
}

function del(){
    inputField.value = inputField.value.slice(0,inputField.value.length -1)
}

function result(){
    inputField.value = eval(inputField.value);

}