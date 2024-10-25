export default function House() {
    const house = {
      bedrooms: 4,
      bathrooms: 2.5,
      squareFeet: 2000,
      address: {
        street: "Via Roma",
        city: "Roma",
        state: "RM",
        zip: "00100",
        country: "Italy",
      },
      owners: ["Alice", "Bob"],
    };
    console.log(house);
    const house2 = {
        bedrooms:3,
        bathrooms: 1.5,
        squareFeet: 1200,
        address: {
          street: "123 Main Street",
          city: "Boston",
          state: "MA",
          zip: "12345",
          country: "USA",
        },
        owners: ["Jack", "Jill"],
      };
      console.log(house2);
    return (
      <div id="wd-house">
        <h4>House</h4>
        <h5>bedrooms</h5>
        {house.bedrooms}
        <h5>bathrooms</h5>
        {house.bathrooms}
        <h5>Data</h5>
        <pre>{JSON.stringify(house, null, 2)}</pre>
        <br />

        <h4>House2</h4>
        <h5>bedrooms</h5>
        {house2.bedrooms}
        <h5>bathrooms</h5>
        {house2.bathrooms}
        <h5>Data</h5>
        <pre>{JSON.stringify(house2, null, 2)}</pre>
        <hr />
      </div>
    );
  }
  