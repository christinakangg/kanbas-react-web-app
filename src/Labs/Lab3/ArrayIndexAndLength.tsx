export default function ArrayIndexAndLength() {
    let numberArray1 = [1, 2, 3, 4, 5];
    const length1 = numberArray1.length;
    const index1 = numberArray1.indexOf(3);

    let numberArray2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    const length2 = numberArray2.length;
    const index2 = numberArray2.indexOf(60);
    return (
      <div id="wd-array-index-and-length">
        <h4>Array index and length</h4>
        length1 = {length1} <br />
        index1 = {index1}   <br />
        length2 = {length2} <br />
        index2 = {index2}   <hr />
      </div>
  );}
  