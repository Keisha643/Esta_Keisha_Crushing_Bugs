console.log("JavaScript File is linked");


// Variables
const labels = document.querySelectorAll(".label");
const targetZones = document.querySelectorAll(".target-zone");
let currentDraggedElement = null;
const resetBtn = document.getElementById("reset-btn");
const labelBox = document.getElementById("label-box");


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

    this.classList.remove("highlight");

    if(this.firstElementChild) {
        return; 
    }

    // drop the piece
    this.appendChild(currentDraggedElement);

    // reset the reference
    currentDraggedElement = null;
}

function resetPuzzle() {
    // move all labels back to the label box
    labels.forEach(label => {
        labelBox.appendChild(label);
    });

    // clear the dragged element reference
    currentDraggedElement = null;

    // removes highlight from all zones once it resets
    targetZones.forEach(zone => { zone.classList.remove("highlight"); });
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add("highlight");
}

function dragLeave(e) {
    this.classList.remove("highlight");
}



// Event Listeners
labels.forEach(label => {
    label.addEventListener("dragstart", dragStart);
});

targetZones.forEach(zone => {
    zone.addEventListener("dragover", dragOver);
    zone.addEventListener("drop", dropped);
    zone.addEventListener("dragenter", dragEnter); 
});

resetBtn.addEventListener("click", resetPuzzle);