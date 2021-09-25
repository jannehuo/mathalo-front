import Fibonacci from './fibonacci/fibonacci';
import Prime from './prime/prime';



const option = document.getElementById('option')


function selectOnChangeHandler(event) {
    const value = event.target.value
    if (value === 'Fibonacci') {
        new Fibonacci()
    }
    if (value === 'Prime') {
        new Prime()
    }
}


option.addEventListener("change", selectOnChangeHandler, false);


/* new Fibonacci();
new Prime();
 */