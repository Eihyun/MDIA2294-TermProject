// hamburger menu

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuIcon.classList.toggle('hide');
    closeIcon.classList.toggle('hide');
})

// Add flavors list
// array of flavor names
const flavors = [
    "True potential as brilliant",
    "No traffic",
    "Sunshine",
    "Peace",
    "Free samples",
    "A mother's love",
    "Strawberry Vinagrette",
    "Clothes right out of the dryer",
    "Wasabi",
    "Rocky road",
    "Hot shower",
    "Persimmon",
    "Sleeping in on a rainy Sunday",
    "Unmitigated joy",
    "Cherry",
    "Kimchi",
    "Weekend",
    "Mars landing",
    "Empty inbox",
    "Baby kittens",
    "Three-day weekend",
    "Tin roof sundae",
    "Sriracha",
    "Unexpected hotel upgrade",
    "Sweet potato fries",
    "A clean house",
    "Pralines and cream",
    "Haircut compliment"
];

// function to populate flavors
function addFlavors() {
    const flavorContainer = document.querySelector('.home-menu__content-flavors');

    // add each flavor as a div
    flavors.forEach(flavor => {
        const flavorDiv = document.createElement('div');
        flavorDiv.className = 'flavor';
        flavorDiv.textContent = flavor;
        flavorContainer.appendChild(flavorDiv);
    });
}

// call the function when the document is loaded
document.addEventListener('DOMContentLoaded', addFlavors);


// flavor menu button click animation
const menuBtn = document.querySelector('.flavor-menu-button');

menuBtn.addEventListener('click', function() {
    this.classList.add('clicked');

    // remove the clicked class after the animation
    setTimeout(() => {
        this.classList.remove('clicked');
    }, 200);
});