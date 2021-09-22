//Seelcting All Elements
const start_btn=document.querySelector('#start');
const stop_btn=document.querySelector('#stop');
const p_min=document.querySelector('.p_min');
const p_sec=document.querySelector('.p_sec');
const p_mili=document.querySelector('.p_mili');
const btnlap=document.querySelector('#Lap_generator_btn');
const deleteLap=document.querySelector('#delbtn');
const LapSection=document.querySelector('.Laps');




let time=0,is_on=false,EL,inter_time,seconds,minutes,interval=10;
//Attaching Event Listners to Buttons
function StopWatch(){
    // btnlap.addEventListener('click',function(){
    //     return
    // })
   start_btn.addEventListener('click',function(e){
       e.preventDefault();
       if(is_on==true){
        start_btn.src='img/play.png'
        inter_time=time;
        clearInterval(EL);
        time=inter_time;
        is_on=false;
       }
       else{

           console.log(time)
        EL=setInterval(() => {
            seconds=parseInt(p_sec.textContent)
            minutes=parseInt(p_min.textContent)
            milisecond=parseInt(p_mili.textContent)+1;

                if(milisecond==99) {
                    time++;
                    p_sec.textContent=`${seconds+1}`.padStart(2,0);
                    time=0;
                    p_mili.textContent=`${time}`.padStart(2,0);
                   
                }
                else if( seconds==59){
                   
                    seconds=0;
                     p_sec.textContent=`${seconds}`.padStart(2,0);
                     p_min.textContent=`${minutes+1}`.padStart(2,0);  
                    }
               else {
                p_mili.textContent=`${time}`.padStart(2,0);
                time++
               }
      
        }, interval);
       start_btn.src='img/pause.png'
       is_on=true;
       }
       
   })
   stop_btn.addEventListener('click',function(){
       clearInterval(EL)
       p_min.textContent='00';
       p_sec.textContent='00';
       p_mili.textContent='00';
       start_btn.src='img/play.png'
       LapSection.innerHTML=""
       is_on=false;
   })
}
StopWatch();




//Adding Laps 
const Lapaudio=document.getElementById('audio');
const delLapaudio=document.getElementById('audio-fire');
let parent



 function remove(id){
   parent=id.parentElement;
   parent.remove();
 delLapaudio.play()
 }
 btnlap.addEventListener('click',function(){
    if(!EL) return;
    else{
        minutes=`${minutes}`.padStart(2,0);
        seconds=`${seconds}`.padStart(2,0);
        milisecond=`${milisecond}`.padStart(2,0);
        const html=`
         <div class="Lap">
                    <span class="lap_time">${minutes}:${seconds}:${milisecond}</span> <button id="delbtn" onclick="remove(this)">Delete</button>
         </div>
                 `
    LapSection.insertAdjacentHTML('beforeend',html)
    Lapaudio.play();
   
    // document.querySelector('.lap_time').textContent=`${minutes}:${seconds}:${milisecond}`;
    return
    }
})