let hour=document.getElementById('hour')
let min=document.getElementById('minute')
let pm=document.getElementById('pm')
let sec=document.getElementById('second')
let month=document.getElementById('month')
let year=document.getElementById('year')
let date=document.getElementById('date')
let day=document.getElementById('day')

function updateClock(){
    
 let  now=new Date()
 let  hourName=now.getHours();
 let  minName=now.getMinutes();
 let  secName=now.getSeconds();
 let  monthName=now.getMonth();
 let  dateName=now.getDate();
 let  yearName=now.getFullYear();
 let  dayName=now.getDay();
 let  period="AM"
 let  months=['Jan',"Feb","Mar","April","May","Jun","July","Aug","Sep","Oct","Nov","Dec"]
 let  Days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

 if(hourName==0){
    hourName=12;
 }
 if(hourName>12){
    period="PM"
 }

 hourName=(hourName<10)?"0"+hourName:hourName;
 minName=(minName<10)?"0"+minName:minName;
 secName=(secName<10)?"0"+secName:secName;


 hour.innerHTML=hourName;
 min.innerHTML=minName;
 sec.innerHTML=secName;
 month.innerHTML=months[monthName];
 date.innerHTML=dateName;
 year.innerHTML=yearName;
 day.innerHTML=Days[dayName];
 pm.innerHTML=period;


   



}




const initialClock=()=>{
    updateClock();
    window.setInterval('updateClock()',1000)
}
initialClock()