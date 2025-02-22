const cube = document.querySelector('.cube');
let startX, startY; // Starting mouse position
let currentX = 0, currentY = 0; // Current rotation angles

// Track when the user clicks to start rotation
document.addEventListener('mousedown', (e) => {
  startX = e.clientX;
  startY = e.clientY;

  // Disable transitions for smooth dragging
  cube.style.transition = 'none';

  // Add event listeners for dragging
  document.addEventListener('mousemove', rotateCube);
  document.addEventListener('mouseup', stopCubeRotation);
});

// Rotate the cube as the mouse moves
function rotateCube(e) {
  const deltaX = e.clientX - startX;
  const deltaY = e.clientY - startY;

  // Update current rotation angles based on mouse movement
  currentX += deltaY * 0.5; // Vertical movement affects X-axis
  currentY -= deltaX * 0.5; // Horizontal movement affects Y-axis

  // Apply rotation
  cube.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;

  // Update start position for the next movement
  startX = e.clientX;
  startY = e.clientY;
}

// Stop rotation when the user releases the mouse
function stopCubeRotation() {
  // Re-enable smooth transition
  cube.style.transition = 'transform 0.1s linear';

  // Remove event listeners to stop tracking movement
  document.removeEventListener('mousemove', rotateCube);
  document.removeEventListener('mouseup', stopCubeRotation);
}


document.addEventListener('touchstart', (e) => {
  const touch = e.touches[0];
  startX = touch.clientX;
  startY = touch.clientY;

  cube.style.transition = 'none';

  document.addEventListener('touchmove', rotateCubeTouch);
  document.addEventListener('touchend', stopCubeRotationTouch);
});

function rotateCubeTouch(e) {
  const touch = e.touches[0];
  const deltaX = touch.clientX - startX;
  const deltaY = touch.clientY - startY;

  currentX += deltaY * 0.5;
  currentY -= deltaX * 0.5;

  cube.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;

  startX = touch.clientX;
  startY = touch.clientY;
}

function stopCubeRotationTouch() {
  cube.style.transition = 'transform 0.1s linear';
  document.removeEventListener('touchmove', rotateCubeTouch);
  document.removeEventListener('touchend', stopCubeRotationTouch);
}