document.addEventListener('DOMContentLoaded', function() {
    const savedWishlist = document.getElementById('saved-wishlist');
    let items = JSON.parse(localStorage.getItem('wishlist')) || [];

    items.forEach(function(item) {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        savedWishlist.appendChild(listItem);
    });
});