// hamburger menu

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuIcon.classList.toggle('hide');
    closeIcon.classList.toggle('hide');
});

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
    "Haircut compliment",
    "Seedless Watermelon",
    "Tahitian Vanilla",
    "Umami",
    "S'mores",
    "Fresh cut grass",
    "Monterey Jack",
    "Banana Cream Pie",
    "Your first kiss",
    "Sitting by the fireplace",
    "Strawberry Cheesecake",
    "Catching a wave",
    "Hot bread",
    "Beautiful music",
    "Last puzzle piece",
    "Gilmore girls is back!",
    "Glazed ham",
    "Fresh churro",
    "Perfectly fitting jeans",
    "Vanilla fudge ripple",
    "Stardust",
    "Pumpkin pie",
    "Smiles",
    "A job well done",
    "Candle light",
    "Cookie dough",
    "Sweet basil",
    "The perfect mixtape",
    "Perfectly removed sticker",
    "Summer vacation",
    "Peanut butter cup",
    "The cool side of your pillow",
    "Good book",
    "Beyoncé concert",
    "Bacon-wrapped hot dog",
    "Handwritten note in the mail",
    "Completed crossword",
    "Perfect avocado",
    "Triple chocolate chunk",
    "Your fifth birthday cake",
    "Caramel macchiato",
    "Raspberry sorbet",
    "Skinny dipping",
    "New york pizza slice",
    "Candy cane",
    "Game-winning shot",
    "Fast food",
    "Fall foliage",
    "Guava",
    "Maine Lobster",
    "Soft, fresh sheets",
    "[Indescribable but delicious",
    "Orange sherbet",
    "Hot air balloon ride",
    "Finding out your true bra size",
    "The sound of the ocean",
    "A good night's rest",
    "Prosciutto",
    "Peeling an orange in one piece",
    "Satisfying TV finale",
    "The perfect high five",
    "Snow day",
    "Technological breakthrough",
    "Coconut",
    "Job promotion",
    "7-layer dip",
    "Macaroni and cheese",
    "Touchdown",
    "Cilantro"
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
};

// call the function when the document is loaded
document.addEventListener('DOMContentLoaded', addFlavors);


// Search bar
$(".search-btn").click(function(){
    $(".wrapper").addClass("active");
    $(this).css("display", "none");
    $(".search-data").fadeIn(500);
    $(".close-btn").fadeIn(500);
    $(".search-data .line").addClass("active");
    setTimeout(function(){
        $("input").focus();
        $(".search-data label").fadeIn(500);
        $(".search-data span").fadeIn(500);
    }, 800);
});
$(".close-btn").click(function(){
    $(".wrapper").removeClass("active");
    $(".search-btn").fadeIn(800);
    $(".search-data").fadeOut(500);
    $(".close-btn").fadeOut(500);
    $(".search-data .line").removeClass("active");
    $("input").val("");
    $(".search-data label").fadeOut(500);
    $(".search-data span").fadeOut(500);
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();