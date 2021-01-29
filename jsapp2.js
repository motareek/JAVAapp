import * as importedFrom from './app.js'
// Get the elements using DOM from the HTML file
let $doneBtn = document.getElementById('insert');
let $inputEvent = document.querySelector('#allEvents ul');

$doneBtn.addEventListener("click",function (e) {
  let $eventTitle = document.getElementById('eventTitle').value;
  importedFrom.updateClock($eventTitle);
})