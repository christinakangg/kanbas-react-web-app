export default function AddingAndRemovingToFromArrays() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ["string1", "string2"];
    let todoArray = [<li>Buy milk</li>, <li>Feed the pets</li>];
    numberArray1.push(6); // adding new items
    stringArray1.push("string3");
    todoArray.push(<li>Walk the dogs</li>);
    numberArray1.splice(2, 1); // remove 1 item starting at 2
    stringArray1.splice(1, 1);

    let numberArray2 = [15, 30, 45, 60, 75];
    let stringArray2 = ["Dog", "Cat", "Bunny"];
    let todoArray2 = [<li>Wash dishes</li>, <li>Clean room</li>];
    numberArray2.splice(3,1); // remove 60
    numberArray2.push(200);
    todoArray2.push(<li>Go to gym</li>);
    stringArray2.push("Fish");
    stringArray2.splice(1, 1); // remove "cat"

    return (
      <div id="wd-adding-removing-from-arrays">
        <h4>Add/remove to/from arrays</h4>
        numberArray1 = {numberArray1} <br />
        stringArray1 = {stringArray1} <br />
        Todo list:
        <ol>{todoArray}</ol>
        numberArray2 = {numberArray2} <br />
        stringArray2 = {stringArray2} <br />
        Todo list:
        <ol>{todoArray2}</ol><hr />
      </div>
  );}
  