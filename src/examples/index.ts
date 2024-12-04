// src/examples/index.ts
import { fromElement } from '../operators/fromElement';

// Create a select element
const select = document.createElement('select');
const option1 = document.createElement('option');
option1.value = 'option1';
option1.textContent = 'Option 1';
const option2 = document.createElement('option');
option2.value = 'option2';
option2.textContent = 'Option 2';
select.appendChild(option1);
select.appendChild(option2);
document.body.appendChild(select);

// Listen for 'change' events and extract selectedIndex and value
fromElement(select, 'change', 'selectedIndex').subscribe(payload => {
  console.log('Selected Index and Value:', payload);
});
