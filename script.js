window.addEventListener('DOMContentLoaded', () => {

// Mouse Events
const hoverBtn = document.getElementById('hover-btn');
const hoverMsg = document.getElementById('hover-msg');

hoverBtn.addEventListener('mouseover', () => {
  hoverMsg.textContent = 'Mouse is over the button!';
});

hoverBtn.addEventListener('mouseout', () => {
  hoverMsg.textContent = 'Mouse left the button.';
});

// Keyboard Events
const keyInput = document.getElementById('key-input');
const keyMsg = document.getElementById('key-msg');

keyInput.addEventListener('keydown', (event) => {
  keyMsg.textContent = `You pressed: ${event.key}`;
});

// Form Events
const form = document.getElementById('demo-form');
const formMsg = document.getElementById('form-msg');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  formMsg.textContent = 'Form submitted successfully!';
});

// Focus and Blur Events
const focusInput = document.getElementById('focus-input');
const focusMsg = document.getElementById('focus-msg');

focusInput.addEventListener('focus', () => {
  focusMsg.textContent = 'Input field is focused';
});

focusInput.addEventListener('blur', () => {
  focusMsg.textContent = 'Input field lost focus';
});

// Event Delegation
const container = document.getElementById('button-container');
const delegateMsg = document.getElementById('delegate-msg');

container.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    delegateMsg.textContent = `You clicked: ${event.target.textContent}`;
  }
});
});