let length;
let width;

function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);

let area = length * width;

 document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

let g1;
let g2;
let g3;

function groceryTracker() {
 g1 = parseFloat(document.getElementById('g1').value);
 g2 = parseFloat(document.getElementById('g2').value);
 g3 = parseFloat(document.getElementById('g3').value);

let area = g1 + g2 +g3;

 document.getElementById('resultG').innerText = `The Total Amount:$ ${area}`;
}