
const groceryItems = ['Apples', 'Milk', 'Bread', 'Eggs'];

function displayItems() {
    const ul = document.querySelector('.grocery-list');
    ul.innerHTML = ''; // Clear existing list items

  const groceryItemsEl = groceryItems.map(item => {
    
        const liElement = document.createElement('li');
        liElement.textContent = item;
        return liElement
        
    });
    
    ul.append(...groceryItemsEl)
}
displayItems();

function setDefaultChecked() {
    const listItems = document.querySelectorAll('.grocery-list li');
    listItems[0].classList.add('bought');
    listItems[1].classList.add('bought');
}

setDefaultChecked();
