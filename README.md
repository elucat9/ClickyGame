
# Clicky

## Tools and Tech: React, Bootstrap, Javascript, ES6, JSX, CSS

This is a memory game in which the player must click on an array of 9 images once each in order to win. The player loses if an image is clicked on more than once.

Using react, the image array is placed in a grid container, and their states set to false (not clicked.) A score div is used store the number of images left to click, starting at 9. The state of the images are changed to true with an onclick event, the score decreases by one, and the images are reshuffled.

I was able to get the score to decrement and the images to reshuffle, as images are clicked. I was also able to alert the player when the score is equal to zero. 

While I was able to get the score to reset to 9 and the images set back to false when the player loses, the function 
the function I made unfortunately sets all the images in the array to true when only one is clicked.
