var addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var product = this.parentNode;
        var productName = product.querySelector('h3').textContent;
        alert('Added ' + productName + ' to cart!');
    });
});