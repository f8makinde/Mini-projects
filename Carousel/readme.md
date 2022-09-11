    <!--
        Creating the base HTML structure for the carousel
    
        1) Create a parent div of 'carousel'
        2) Create 3 divs within the div of 'carousel' called 'carousel-item'
        3) Add images to each 'carousel-item' div, with the image src being 'images/1.jpg' - make sure to increment the image src number for each div, e.g. 'images/1.jpg', 'images/2.jpg', 'images/3.jpg' - all the images are provided in the images folder
        4) Once you have a parent div of 'carousel', and 3 'carousel-item' divs with images inside, make a new div called 'carousel-actions' which sits inside 'carousel' and not within 'carousel-item'
        5) Add two buttons inside 'carousel-actions', give them each an id, the first one being 'carousel-button-prev' and the second one being 'carousel-button-next'
        6) The content for the prev button will be '<' and the content for the next button will be '>' - arrows that show left and right
        7) On those buttons (prev & next) add aria-labels so that screen readers can read the text out loud to the user, on the previous slide button add 'Previous slide', and on the next slide button, add 'Next slide' - screen readers aren't great at describing '<' and '>' - so that's why we are adding aria-labels!
        8) Add 'carousel-item-visible' to the first 'carousel-item' class - the reason for this is because we will eventually hide all carousel items, but we always want to show the first one on loading the page!   
    -->
    /*
    Styling the Carousel

    1) Set a max-width of 600px & position relative on the div 'carousel'
    2) Hide all 'carousel-item' divs
    3) Make sure all images inside 'carousel-item' have a max-width that matches the main 
    'carousel' div
    4) All images within 'carousel-item' must be responsive, so think about setting a 
    max-width on the images and how you'd make the image 100% width of 'carousel-item' 
    5) We want the first 'carousel-item' to be visible, think about the class we added 
    to the first item. Make sure that class is always shown
    6) The 'carousel-actions' needs to be on top of the slider, so think about positioning 
    and how you can use relative/absolute positioning to put the 'carousel-actions' on top of 
    the slider
    7) Make some beautiful buttons!
    8) Space those buttons from the left & right - we want to make sure they're not touching 
    the edges of the slides, but adequately spaced
*/


    1) Grab all 'carousel-item' - hint: elements...by...class name! Store this value in a const called 'slides'
    2) Set a slide position of 0 (as that's what the starting index position will be when we grab all the carousel items - remember that arrays start from 0 and not 1) - we want the slide position to always start at 0. When a user goes to the next or previous slide, we will update this--the reason it's 0 and not one is that we want to match the position in the 'slides' const that we stored above! As this is going to be changing, what seems more appropriate, a let statement or a const?
    3) Store a const value of 'totalSlides' that is equal to the length of the slides
    4) Add event listeners to both buttons 'carousel-button-next' and 'carousel-button-prev' - seeing as though we expect the user to click to change slide position, make sure we set the eventListener to 'click' and the second arguments will be functions!
    5) Create two functions: moveToNextSlide and moveToPrevSlide - use both of these in action 4 as the second argument on your 'addEventListener' - don't worry about these functions being empty, we will add to them in the upcoming screencasts
    6) Use console.log to validate that you have 3 'carousel-item' in your 'slides' const