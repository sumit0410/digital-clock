function clock() {
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");
    const amPm = document.getElementById("AM-PM");

    // const options = {hours12:false };

    // let time = new Date();

    let date = new Date();
    let a = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    a = a < 10 ? "0" + a : a;
    let am_pm =  date.getHours() >= 12 ? "PM" : "AM";
    let b = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let c = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

    // let AmOrPm = hours >= 12 ? 'PM' : 'AM';
    hours.innerHTML = a;
    minutes.innerHTML = b;
    seconds.innerHTML = c;
    amPm.innerText =am_pm
}

setInterval(clock, 1000);

document.getElementById("image-toggle-container").style.backgroundImage = "url('cl2.jpg')";
document.getElementById("greeting").innerText = "WELCOME TO THE DIGITAL CLOCK!!";
document.getElementById("greeting-text").innerText = "DIGITAL CLOCK";



function dynamicDiv(){
    let container = document.createElement("div");
    container.id="details-container";
    let para1 = document.createElement("p");
    para1.id="para1";
    let para2 = document.createElement("p");
    para2.id="para2";
    let para3 = document.createElement("p");
    para3.id="para3";


    let details = document.getElementById("details");
    details.appendChild(container);
    let wakeUp = document.getElementById("details-container");
    wakeUp.appendChild(para1)
    let Lunch = document.getElementById("details-container");
    Lunch.appendChild(para2)
    let sleep = document.getElementById("details-container");
    sleep.appendChild(para3)

    let invalue1 = document.getElementById("select-time");
    let value1 = invalue1.options[invalue1.selectedIndex].text;
    let invalue2 = document.getElementById("select-time1");
    let value2 = invalue2.options[invalue2.selectedIndex].text;
    let invalue3 = document.getElementById("select-time2");
    let value3 = invalue3.options[invalue3.selectedIndex].text;
 
    document.getElementById("para1").innerHTML ="WakeUpTime: "+ value1;
    document.getElementById("para2").innerHTML ="LunchTime: "+ value2;
    document.getElementById("para3").innerHTML ="SleepTime: "+ value3;
}

let button = document.getElementById('button');
button.addEventListener('click',function(){

    let hourr = new Date().getHours();
    // let hourr = 21;
    let wakeUpTime = document.getElementById("select-time").value;
    let lunchTime = document.getElementById("select-time1").value;
    let napTIme = document.getElementById("select-time2").value;
    if(wakeUpTime == hourr){
        document.getElementById("image-toggle-container").style.backgroundImage = "url('morning.png')";
        document.getElementById("greeting").innerText = "GRAB SOME HEALTHY BREAKFAST"
        document.getElementById("greeting-text").innerText = "GOOD MORNING!! WAKE UP!!"
    }
   else if(lunchTime == hourr){
        document.getElementById("image-toggle-container").style.backgroundImage = "url('lunch.png')";
        document.getElementById("greeting").innerText = "LET'S HAVE SOME LUNCH";
        document.getElementById("greeting-text").innerText = "GOOD AFTERNOON!!"
    }
    else if(napTIme == hourr){
        document.getElementById("image-toggle-container").style.backgroundImage = "url('sleep.png')";
        document.getElementById("greeting").innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById("greeting-text").innerText = "GOOD NIGHT!"
    }
    else{
       console.log("clock is working")
    }
    dynamicDiv();
    alarm();
})

function alarm(){
        let hourr = new Date().getHours();
    let x = document.getElementById("select-time").selectedIndex;
    let jag = document.getElementsByTagName("option")[x].value;
    // console.log(jag)
    let y = document.getElementById("select-time1").selectedIndex;
    let kha = document.getElementsByTagName("option")[y].value;

    let z= document.getElementById("select-time2").selectedIndex;
    let soja = document.getElementsByTagName("option")[z].value; 

    let alarm = document.getElementById("alarm");

    if(jag == hourr){
        alarm.play();
        
    }else if(kha==hourr){
        alarm.play();
       
    }
    else if(soja==hourr){
        alarm.play();
       
    }else{
        alarm.pause();
        // let stopAlarm = document.getElementById("stop-alarm");
        // stopAlarm.style.display = "none";
    }
}
// let stops = document.getElementById("stop-alarm");

// stops.addEventListener("click",function(){
//     alarm.pause()
// })