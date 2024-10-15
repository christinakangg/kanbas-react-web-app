export default function SimpleArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ["string1", "string2"];
    let htmlArray1 = [<li>Buy milk</li>, <li>Feed the pets</li>];
    let variableArray1 = [ functionScoped, blockScoped, constant1,
                           numberArray1, stringArray1 ];
    
    var number1 = 15;
    let number2 = 30; 
    const constant2 = number2 - number1; 
    let numberArray2 = [2, 4, 6, 8, 10];
    let stringArray2 = ["string3", "string4"];
    let htmlArray2 = [<li>Good morning!</li>, <li>Good night!</li>];
    let variableArray2 = [ number1, number2, constant2, numberArray2, stringArray2]
    return (
      <div id="wd-simple-arrays">
        <h4>Simple Arrays</h4>
        numberArray1 = {numberArray1}     <br />
        stringArray1 = {stringArray1}     <br />
        variableArray1 = {variableArray1} <br />
        Todo list:
        <ol>{htmlArray1}</ol>
        numberArray2 = {numberArray2}     <br />
        stringArray2 = {stringArray2}     <br />
        variableArray2 = {variableArray2} <br />
        <ol>{htmlArray2}</ol>
        <hr />
      </div>
    );
  }
  