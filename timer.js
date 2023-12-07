const now = new Date();

function getTime(){
    // Time & date objects
let h = now.getHours();
let m = now.getMinutes();
let s = now.getSeconds();

//add a zero before number less than 10
if(h < 10){
    h = '0' + h;
}
if(m < 10){
    m = '0' + m;
}
if(s < 10){
    s = '0' + s;
}
document.getElementById('display').innerHTML = h + " : " + m + " " + s;
}

// setInterval(getTime, 1000); // call function after each second

// left at listening events when start and stop buttons are clicked.
// Create a clear button

const start_btn = document.getElementById('start')
const stop_btn = document.getElementById('stop')

   //initial timer values
   let ms = 0
   let sec = 0;
   let min = 0;
   let hour = 0;
//Upon clicking start and stop button
start_btn.addEventListener('click', ()=>{
 

    //get seconds
    function activate_counter(){
        //add zero before number less 10
        let formatted_ms = (ms < 10) ? `0${ms}` : ms;
        let formatted_second = (sec < 10) ? `0${sec}` : sec;
        let formatted_min = (min < 10) ? `0${min}` : min;
        let formatted_hour = (hour < 10) ? `0${hour}`: hour;
        
        //only from 0 to 59
      if(ms > 9){
        ms = 0;
        sec++;
      }
        else if(sec > 59){
            ++min;
            if(min > 59){
                ++hour;
                min = 0;
            }
            sec = 0;
        }
        document.getElementById("display_stopwatch").innerHTML = `${formatted_hour}:${formatted_min}:${formatted_second}:${formatted_ms}`;
    }
    setInterval(activate_counter, 10);
})





























stop_btn.addEventListener('click', ()=>{
    console.log("Clicked stop button");
})




