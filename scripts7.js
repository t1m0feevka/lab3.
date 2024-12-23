// Task 2: Swap Inputs
document.getElementById('swapButton').addEventListener('click', function() {
  const input1 = document.getElementById('input1');
  const input2 = document.getElementById('input2');
  const temp = input1.value;
  input1.value = input2.value;
  input2.value = temp;
});

// Task 4: Resizable Div
const resizableDiv = document.getElementById('resizableDiv');
document.getElementById('decreaseSize').addEventListener('click', function() {
  const currentSize = parseInt(resizableDiv.style.width);
  if (currentSize > 15) {
    resizableDiv.style.width = resizableDiv.style.height = `${currentSize - 15}px`;
  }
});
document.getElementById('increaseSize').addEventListener('click', function() {
  const currentSize = parseInt(resizableDiv.style.width);
  resizableDiv.style.width = resizableDiv.style.height = `${currentSize + 15}px`;
});

// Task 6: Double List Values
document.getElementById('doubleValues').addEventListener('click', function() {
  const listItems = document.querySelectorAll('#numberList li');
  listItems.forEach(item => {
    item.textContent = parseInt(item.textContent) * 2;
  });
});

// Task 8: Login Form
document.querySelector('.login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();

  if (!email || !password) {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email: email,
    password: password
  };
  console.log(formData);
  event.target.reset();
});

// Task 10: Create and Destroy Boxes
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', function() {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100');
  }
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();
  const fragment = document.createDocumentFragment();
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
    size += 10;
  }
  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}