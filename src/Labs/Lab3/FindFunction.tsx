export default function FindFunction() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ["string1", "string2", "string3"];
    const four = numberArray1.find((a) => a === 4);
    const string3 = stringArray1.find((a) => a === "string3");

    let numberArray2 = [100, 200, 300, 400, 500, 1000];
    let stringArray2 = ["fall", "summer", "winter", "spring"];
    const thousand = numberArray2.find((a) => a === 1000);
    const string4 = stringArray2.find((a) => a === "winter");

    return (
      <div id="wd-find-function">
        <h4>Find Function</h4>
        four = {four} <br />
        string3 = {string3} <br />

        thousand = {thousand} <br />
        string4 = {string4} <hr />
      </div>
  );}
  