console.log("JavaScript File is linked");


// Variables
const labels = document.querySelectorAll(".label");
const targetZones = document.querySelectorAll(".target-zone");
let currentDraggedElement = null;
// add variable for reset button;
// add variable for label box


// Functions
function dragStart() {
    console.log("Started Dragging");
    // whatever the user is dragging, store it in currentDraggedElement
    currentDraggedElement = this;
}

function dragOver(e) {
    e.preventDefault();
    console.log("drag over called");
}

function dropped(e) {
    e.preventDefault();
    console.log("dropped");

    // prevent double drops here
    // if this dropzone has a child, don't let it drop
    // use a return statement

    if(this.firstElementChild) {
        return; 
    }

    // drop the piece
    this.appendChild(currentDraggedElement);

    // reset the reference
    currentDraggedElement = null;
}

// function reset() {
    // collect all the labels and put them back
    // check all target zones/loop through them, see IF the dropzone has a label in it
    // if it does, add that label back to the pieces
    // labelBox.appendChild(); put pack piece
// }


// Event Listeners
labels.forEach(label => {
    label.addEventListener("dragstart", dragStart);
});

targetZones.forEach(zone => {
    zone.addEventListener("dragover", dragOver);
    zone.addEventListener("drop", dropped);
});


// add Event Listener for the reset button
// listen for the click event, call a reset function