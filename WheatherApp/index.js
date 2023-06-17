// import elements
const toggleModebtn = document.querySelector(".ToggleBtn");
const dateelement = document.querySelector('#dttext');
const toggleimg = document.querySelector("#modeImg");
const details = document.querySelector("#dtail");
const tmp = document.querySelector('#Temprature');
const iconsWeather = document.querySelector("#icon");

toggleModebtn.addEventListener("click", () => {
  if (!toggleModebtn.classList.contains("nightbtn")) {
    toggleModebtn.classList.add("nightbtn");
    toggleModebtn.style.backgroundColor = "white";
    document.body.classList.add('nightBackground');

    toggleimg.src = "./imges/icons8-moon-100.png";
  } else {
    toggleModebtn.classList.remove("nightbtn");
    document.body.classList.remove('nightBackground');
    toggleimg.src = "./imges/icons8-sun-96 (1).png";
    toggleModebtn.style.backgroundColor = "black";
  }
});

// date method

let date = new Date();
let datearr = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "june",
  "july",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];
let todayDate = datearr[date.getMonth()] + " " + date.getDate();

dateelement.innerText = todayDate;

document.body.onload = () => {
 getWeatherData();
}

const getWeatherData = async () => {
    // api key for wheather api
    apik = '3045dd712ffe6e702e3245525ac7fa38';
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${'Delhi'}&appid=${apik}`;
   

       let data = await fetch(apiUrl) /// fetch api data will come in json
      let res = await data.json() // this will convert response data to json object
      let data2= [res];
      console.log(data2);
   

        // collect all imortand data from fetch data;
        let nameval = data2[0].name;
        let desc = data2[0].weather[0].main;
        let temperature = data2[0].main.temp;
        // let wndspd = data2.wind.speed;

          console.log(nameval,desc,temperature);


          details.innerHTML = `${nameval} weather: ${desc}`; 
          tmp.innerHTML = `${conver(temperature)} C`
        // // we will get temp we have to fixed the value;
        function conver(val) {
            return (val - 273).toFixed(1);
        }



      
      }


   