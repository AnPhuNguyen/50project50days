const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearBtn = document.getElementById('clear');

let size = 10;
let isDrawing = false;
let color = '#000000';
let x = 0;
let y = 0;

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
  x = 0;
  y = 0;
});

canvas.addEventListener('mouseout', () => {
  isDrawing = false;
  x = 0;
  y = 0;
});

canvas.addEventListener('mousemove', (e) => {
  if (!isDrawing) return;

  const x2 = e.offsetX;
  const y2 = e.offsetY;

  drawCircle(x2, y2);
  drawLine(x, y, x2, y2);

  x = x2;
  y = y2;
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

increaseBtn.addEventListener('click', () => {
    size += 5;
    if (size > 50) size = 50;
    updateSizeOnScreen();
});

decreaseBtn.addEventListener('click', () => {
    size -= 5;
    if (size < 5) size = 5;
    updateSizeOnScreen();
});

colorEl.addEventListener('change', (e) => {
    color = e.target.value;
});

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

function updateSizeOnScreen() {
    sizeEl.innerText = size;
}
