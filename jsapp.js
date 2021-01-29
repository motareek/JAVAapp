let $eventDateAndTime = document.getElementById('eventDateAndTime');
let $timerDisplay = document.getElementById('timer');
let $inputEvent = document.querySelector('#allEvents ul');
let $clear = document.querySelector('.clear i');

$clear.addEventListener("click",function (e){
  // clear the list
  $inputEvent.innerHTML = '';
})
export const updateClock = ($eventTitle = 'Your Event') => {
  let dateInput = new Date($eventDateAndTime.value)
  let time1 = new Date($eventDateAndTime.value).getTime();
  let dateTimeNow = new Date();

  if(dateInput<dateTimeNow){
    alert("Please enter a valid time for the event.")
  }
  else
  {  
    let cancelBtn = document.createElement("button");
    let cancel = document.createTextNode("\u00D7");
    cancelBtn.className = "cancel";
    cancelBtn.appendChild(cancel); 
    cancelBtn.classList.add("cancelbutton");
    let listItem = document.createElement("li");
    let dateElement = document.createElement("span");
  const timeinterval = setInterval(function () {
    let timeNow = new Date();
    const time = timeNow.getTime();
    const timeDiff = time1 - time;
    let seconds,minutes,hours,days;
    [seconds, minutes, hours, days ] = [Math.floor( (timeDiff/1000) % 60 )
    ,Math.floor( (timeDiff/1000/60) % 60)
    ,Math.floor( (timeDiff/(1000*60*60)) % 24)
    ,Math.floor( timeDiff/(1000*60*60*24) )];
    
      if (seconds === 0 && minutes === 0 && hours === 0 && days === 0){
        alert(`Event: ${$eventTitle} starts now! Go ahead.`)
      }
      else if (seconds < 0) 
      {
        dateElement.innerHTML = `Event: ${$eventTitle} has been started.`;
      }
      else {
      dateElement.innerHTML = `Event: ${$eventTitle} is in ${days} days,
      ${hours} h, ${minutes} m, and ${seconds} s.`;
      }
},1000);

  listItem.append(dateElement,cancelBtn );
  $inputEvent.appendChild(listItem) 
  let cancelbtns = document.getElementsByClassName("cancel");
  cancelation(cancelbtns);
}
}
function cancelation(cancelbtns) {
  for (var i = 0; i < cancelbtns.length; i++) {
    cancelbtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}
}
let $doneBtn = document.getElementById('insert');
let $inputEvent = document.querySelector('#allEvents ul');
$doneBtn.addEventListener("click",function (e) 
  {
    let $eventTitle = document.getElementById('eventTitle').value;
    importedFrom.updateClock($eventTitle);
  })
