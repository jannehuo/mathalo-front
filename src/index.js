import Fibonacci from './fibonacci/fibonacci';
import Prime from './prime/prime';

const option = document.getElementById('option');
const fibonacci = new Fibonacci().init();
const prime = new Prime();

function selectOnChangeHandler(event) {
  const value = event.target.value;
  clearCanvases();
  if (value === 'Fibonacci') {
    fibonacci.init();
  }
  if (value === 'Prime') {
    prime.init();
  }
}

function clearCanvases() {
  fibonacci.clear();
}

option.addEventListener('change', selectOnChangeHandler, false);
