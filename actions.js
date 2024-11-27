document.getElementById('wishlist-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const itemInput = document.getElementById('item');
    const itemText = itemInput.value.trim();

    if (itemText !== '') {
        const wishlist = document.getElementById('wishlist');
        const listItem = document.createElement('li');
        listItem.textContent = itemText;
        wishlist.appendChild(listItem);
        saveItem(itemText);
        itemInput.value = '';
    }
});

function saveItem(item) {
    let items = JSON.parse(localStorage.getItem('wishlist')) || [];
    items.push(item);
    localStorage.setItem('wishlist', JSON.stringify(items));
}