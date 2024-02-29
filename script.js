const images = document.querySelectorAll('.image');

images.forEach(image => {
    image.addEventListener('dragstart', dragStart);
    image.addEventListener('dragover', dragOver);
    image.addEventListener('drop', drop);
});

let draggedId;

function dragStart(event) {
    draggedId = event.target.id;
    // event.dataTransfer.setData('text/plain', draggedId);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const droppedId = event.target.id;
    const draggedElement = document.getElementById(draggedId);
    const droppedElement = document.getElementById(droppedId);
    
    // Swap the contents of the divs
    const tempHTML = draggedElement.innerHTML;
    draggedElement.innerHTML = droppedElement.innerHTML;
	draggedElement.id = droppedId;
    droppedElement.innerHTML = tempHTML;
	droppedElement.id = draggedId;
}
