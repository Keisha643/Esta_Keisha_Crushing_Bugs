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

    if(this.firstElementChild) {
        return; 
    }

    // drop the piece
    this.appendChild(currentDraggedElement);

    // reset the reference
    currentDraggedElement = null;
}

function resetPuzzle() {
    // Move all labels back to the label box
    labels.forEach(label => {
        labelBox.appendChild(label);
    });

    // Clear the dragged element reference
    currentDraggedElement = null;
}


// Event Listeners
labels.forEach(label => {
    label.addEventListener("dragstart", dragStart);
});

targetZones.forEach(zone => {
    zone.addEventListener("dragover", dragOver);
    zone.addEventListener("drop", dropped);
});

resetBtn.addEventListener("click", resetPuzzle);