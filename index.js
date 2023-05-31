const submitBtn = document.querySelector("button");
const inputField = document.getElementById("ipAddress");
const inputValue = inputField.value;
const ipAddressResult = document.querySelector(".ipAddressResult");
const ispResult = document.querySelector(".ispResult");
const updateTimezone = document.querySelector(".updateTimezone");
const updatelocation = document.querySelector(".updatelocation");

var ip = "8.8.8.8";
var api_key = "at_Ku3SaYTFtoUql83Lg1GS6OPA8e6po";
var api_url = "https://geo.ipify.org/api/v2/country?";

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const inputValue = inputField.value;
  console.log(inputValue);

  //API FETCH
  fetch(`${api_url}apiKey=${api_key}&ipAddress=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      displayLocation(data),
        displayAdditonalLocation(data.location),
        console.log(data);
    });

  const displayLocation = (location) => {
    const { ip, isp } = location;
    ipAddressResult.innerHTML = ip;
    ispResult.innerHTML = isp;
  };
  const displayAdditonalLocation = (additionallocation) => {
    const { region, timezone } = additionallocation;
    updateTimezone.innerHTML = timezone;
    updatelocation.innerHTML = region;
  };
});

// var ip = "8.8.8.8";
// var api_key = "at_Ku3SaYTFtoUql83Lg1GS6OPA8e6po";
// $(function () {
//   $.ajax({
//     url: "https://geo.ipify.org/api/v2/country",
//     data: { apiKey: api_key, ipAddress: ip },
//   });
// });

// //API FETCH
// fetch(
//     "https://geo.ipify.org/api/v2/country?apiKey=at_Ku3SaYTFtoUql83Lg1GS6OPA8e6po&ipAddress=8.8.8.8"
//   )
//     .then((response) => response.json())
//     .then((data) => console.log(data));
