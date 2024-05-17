function formatText(command) {
    document.execCommand(command, false, null);
}

function changeColor() {
    const color = document.getElementById('textColor').value;
    document.execCommand('foreColor', false, color);
}

function changeSize() {
    const size = document.getElementById('textSize').value;
    document.execCommand('fontSize', false, size);
}
