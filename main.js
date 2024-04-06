// main.js
const groceryItems = ['Apples', 'Milk', 'Bread', 'Eggs'];
// main.js
function displayItems() {
    const ol = document.getElementById('grocery-list');
    ol.innerHTML = ''; // Clear existing list items

    groceryItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ol.appendChild(li);
    });
}

// Call the function to display items when the page loads
displayItems();

function setDefaultChecked() {
    const listItems = document.querySelectorAll('#grocery-list li');
    listItems[0].classList.add('bought');
    listItems[1].classList.add('bought');
}

// Call the function to set default checked items
setDefaultChecked();
