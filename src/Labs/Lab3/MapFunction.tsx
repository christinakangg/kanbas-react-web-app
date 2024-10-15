export default function MapFunction() {
    let numberArray1 = [1, 2, 3, 4, 5, 6];
    const square = (a: number) => a * a;
    const todos = ["Buy milk", "Feed the pets"];
    const squares = numberArray1.map(square);
    const cubes = numberArray1.map((a) => a * a * a);

    let numberArray2 = [7, 8, 9, 10, 11, 12];
    const todos2 = ["Go on walk", "Take out trash"];
    const squares2 = numberArray2.map(square);
    const cube = (a: number) => a * a * a;
    const cubes2 = numberArray2.map(cube);

    return (
      <div id="wd-map-function">
        <h4>Map Function</h4>
        squares = {squares} <br />
        cubes = {cubes} <br />
        Todos:
        <ol>
          {todos.map((todo) => (
            <li>{todo}</li>
          ))}
        </ol> <hr/>
        
        squares = {squares2} <br />
        cubes = {cubes2} <br />
        Todos:
        <ol>
          {todos2.map((todo) => (
            <li>{todo}</li>
          ))}
        </ol> <hr/>

      </div>
    );
  }
  