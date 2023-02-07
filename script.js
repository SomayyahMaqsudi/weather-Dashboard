function GetInfo(){
    const newName = document.getElementById("cityInput");
    const cityName = document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--"

fetch("api.openweathermap.org/data/2.5/weather?q='+newName.value+appid=d65ddc2923e2aa367cd590d61081216a")
// we added '+newName.value+' because we want the user to be able to search for whatever city they want to

.then(Response => Response.jason())
.then(data =>{

    // the line below will show the temp for 5 days
    for(i=0;i<5;i++){
        document.getElementById("day"+(i+1)+"temp").innerHTML = "temp:" + Number(data.main.temp -292.41).toFixed(1)+"°";
        // getting the temp each day when the i value is incremented by 1
    }

     // the line below will show the wind for 5 days
    for(i=0;i<5;i++){
        document.getElementById("day"+(i+1)+"wind").innerHTML = "wind:" + Number(data.visibility.wind -1000).toFixed(1)+"°";
        // getting the wind each day when the i value is incremented by 1
    }

     // the line below will show the humidity for 5 days
     for(i=0;i<5;i++){
        document.getElementById("day"+(i+1)+"humidity").innerHTML = "humidity:" + Number(data.mani.humidity -36).toFixed(1)+"°";
    }

    for(i=0;i<5;i++){
        document.getElementById("img" +(i+1)).scr = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon+".png";
    }
})

// .catch(err => alert("Something Went Wrong"))
// }

// function DefaultScreen(){
//     document.getElementById("cityInput").defaultValue = "Atlanta";
//     GetInfo();
// }
const d = new Date();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function CheckDay(day){
    if(day +d.getDay() > 6){
        return day +d.getDay()-7;
    }
    else{
        return day +d.getDay();
    }
}

for(i=0;1<5;i++){
    document.getElementById("day"+(i+1)).innerHTML = weekday[CheckDay(i)];
}}