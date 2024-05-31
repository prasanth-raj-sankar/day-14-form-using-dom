var formsubmit = document.querySelector("#form");

formsubmit.addEventListener("submit", (e) => {
  e.preventDefault();

  var name = document.querySelector("#name");
  var last = document.querySelector("#last");
  var email = document.querySelector("#email");
  var address = document.querySelector("#address");
  var pincode = document.querySelector("#pincode");
  var gender = document.querySelector("#gender");
  var Food = document.querySelector("#Food");
  var state = document.querySelector("#state");
  var country = document.querySelector("#country");

  var array = [
    name,
    last,
    email,
    address,
    pincode,
    gender,
    Food,
    state,
    country,
  ];

  var tableRow = document.createElement("tr");

  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i].value != "") {
      var tableData = document.createElement("td");
      tableData.innerHTML = array[i].value;
      tableRow.append(tableData);
      count++;
    }
  }

  if (count > 2) {
    document.querySelector("tbody").append(tableRow);
  } else {
    alert("Must choose at least 2 out of 5 options");
  }

//   for (let i of array) {
//     i.value = "";
//   }
});
