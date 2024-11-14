document.addEventListener('DOMContentLoaded', function () {

    var listItems = document.getElementsByTagName('li');

    // Count how many items are in the list
    var totalItems = listItems.length;

    // Find the h2 element where we want to change the text
    var heading = document.querySelector('h2');

    // Create a new string with the number of items and the text "Buy groceries"
   var newHeading = 'Buy groceries: ' + totalItems;

    // adds the title plus the number
    heading.textContent = newHeading;

    // Loop through each list item
    for (var i = 0; i < listItems.length; i++) {

        // Check if the list item text is honey, kale, or fresh figs
        var itemText = listItems[i].textContent; // Convert to lowercase for easy comparison
        if (itemText === 'honey' || itemText === 'kale' || itemText === 'fresh figs') {

            // If we find the item, change its background color to 'cool'
            listItems[i].className = 'cool';
        }
    }
});
