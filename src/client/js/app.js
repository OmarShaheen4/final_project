import { checkName } from "./checkName";
import { currentDate } from "./currentDate";
import { dayDiffCheck } from "./dayDiffCheck";
import { pixabayApi } from "./pixabayApi";
import { getCityData } from "./getCityData";
import { weatherbitApi } from "./weatherbitApi";
import { updateUi } from "./updateUi";

/* geonames link and apiKey  */
const geoNamesURL = 'http://api.geonames.org/searchJSON?';
const username = "omarr_shaheeen"; // put it in env file

// weatherbit link
const weatherbitApiReqURL = 'https://api.weatherbit.io/v2.0/forecast/daily?lat=';

//get user input
const dep = document.getElementById("date_start").value
const ret = document.getElementById("date_end").value

// object to store all data from all APIs
const allData = {}
const currentDatee = currentDate()

const modal = document.getElementById("myModal");
const btn = document.getElementById("button_search");
const span = document.getElementsByClassName("close")[0];





// Event listener to add function to existing HTML DOM element
const generateBtn = document.getElementById('button_search');
generateBtn.addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e) {

    // When the user clicks the button, open the modal 
    modal.style.display = "block";


    // When the user clicks on <span> (x), close the modal
    span.onclick = async function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = async function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    //get user input
    const dest = document.getElementById('desName').value
    console.log("The Destination: ", dest)
    const dep = document.getElementById("date_start").value

    // calculate day differnce
    const dayDiff = dayDiffCheck(currentDatee, dep)
    allData.dayDiff = dayDiff
    console.log("all data object", allData) // for testing

    // check if the user enter a valid input or not
    if (checkName(dest)) {
        console.log("A valid name");// for Testing
        // calling function getCityData by passing url, destination and apiKey
        getCityData(geoNamesURL, dest, username)
            .then(cityData => {
                // store the output of the api to objcet allData
                allData.cityLat = cityData.geonames[0].lat;
                allData.cityLong = cityData.geonames[0].lng;
                allData.country = cityData.geonames[0].countryName;
                console.log("The Second All Data: ", allData) // for Testing

                // calling pixabayApi function by passing country name
                pixabayApi(allData.country)
                    .then(res => {

                        // store the output of the api to objcet allData
                        allData.img = res.hits[0].webformatURL;
                        console.log("The Image: ", allData.img) // for Testing

                        // calling updateUi function by passing allData object
                        updateUi(allData)
                    })
            })


    } else {
        // if the user enterd a not valid input
        alert("Not a valid name");
    }

};


