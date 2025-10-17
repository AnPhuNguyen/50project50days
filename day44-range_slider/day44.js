const range = document.getElementById('range');
const label = document.querySelector('label[for="range"]');
const labelContainer = document.querySelector('.label-container');

function updateLabelPosition() {
  const rangeWidth = range.offsetWidth;
  const max = range.max;
  const min = range.min;
  const value = range.value;

  // Calculate the position percentage of the current value
  const percent = (value - min) / (max - min);

  // Calculate the pixel position for the label
  const labelWidth = label.offsetWidth;
  const offset = percent * (rangeWidth - labelWidth);

  // Set the label position
  label.style.left = `${offset}px`;
  label.textContent = value;
}

range.addEventListener('input', () => {
  updateLabelPosition();
});

// Initialize label position on page load
updateLabelPosition();
