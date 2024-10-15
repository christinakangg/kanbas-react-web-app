const subtract = (a: number, b: number) => {
    return a - b;
  };
  const add = (a: number, b: number) => {
    return a + b;
  }; 
  export default function ArrowFunctions() {
    const threeMinusOne = subtract(3, 1);
    const fourPlusThree = add(4,3);
    console.log(threeMinusOne);
    console.log(fourPlusThree)
    return (
      <div id="wd-arrow-functions">
        <h4>New ES6 arrow functions</h4>
        threeMinusOne = {threeMinusOne}   <br />
        subtract(3, 1) = {subtract(3, 1)} <br />
        fourPlusThree = {fourPlusThree}   <br />
        add(3, 1) = {add(4, 3)} <hr />
      </div>
  );}
  