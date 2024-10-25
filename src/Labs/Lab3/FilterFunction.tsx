export default function FilterFunction() {
    let numberArray1 = [1, 2, 4, 5, 6];
    const numbersGreaterThan2 = numberArray1.filter((a) => a > 2);
    const evenNumbers = numberArray1.filter((a) => a % 2 === 0);
    const oddNumbers = numberArray1.filter((a) => a % 2 !== 0);

    let numberArray2 = [123, 456, 789, 1000, 2000]
    const numbersGreaterThan789 = numberArray2.filter((a) => a > 789);
    const evenNumbers2 = numberArray2.filter((a) => a % 2 === 0);
    const oddNumbers2 = numberArray2.filter((a) => a % 2 !== 0);
    return (
      <div id="wd-filter-function">
        <h4>Filter Function</h4>
        numbersGreaterThan2 = {numbersGreaterThan2}  <br />
        evenNumbers = {evenNumbers}    <br />
        oddNumbers = {oddNumbers}      <br />

        numbersGreaterThan789 = {numbersGreaterThan789}  <br />
        evenNumbers2 = {evenNumbers2}    <br />
        oddNumbers2 = {oddNumbers2}      <hr />
      </div>
  );}
  