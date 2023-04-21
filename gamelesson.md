# Creating a game using JavaScript

This is the same idea as what we have always done for our projects.
JavaScript is best for web-based and mobile games because it is generally easy to comprehend. 
- an interpreted scripting language so code does not need to be compiled
- instead, results are interpreted by a user’s command for example clicking and scrolling on the website. JavaScript can use that user input to perform an action accordingly.

# Setting up 

To have a UI (User Interface), you will need to use HTML. We can put our JS file as a script in the html by using script tags or linking a file. Script tags are fine for simple pages, but become confusing if you are doing complicated JS like a large app. 

**It looks like this**

<img src="/imagessass/javainhtml.png" width="550" height="350">

# Where do you store the JavaScript Code?

1. You could have a separate JavaScript file full of your JavaScript code. The filename will end in .js
<img src="/imagessass/jsfile.png" width="650" height="400">


    *Connect the JS file*: To point to your external JavaScript file, or connect the code to your HTML frontend, you could paste this *src Attribute* inside the body of the html. 

    <img src="/imagessass/jsfileinhtml.png" width="650" height="550">
    - This one is shown in line 38.

    <img src="/imagessass/importjsfile.png" width="550" height="350">

2. Alternatively, you could write all of your JavaScript code in your HTML page using a *Script container*.

    To refer to the code you can give id's to certain functions and then add the id tag inside of a *div container* or *button container* if the function is a button.


# Where do you store the SASS Code?

1. Create a .scss file at the same root level as your index.html file, make sure the file name ends in .scss This will be your SASS file.

    *Connect the JS file*: To import the styling that you set up in that file, import a *link container* with "rel=stylesheet" and "href=filename.css". Make sure to close the link tag. 
    <img src="/imagessass/importsass.png" width="800" height="300">
    - This one is shown in line 28.

# Basic JavaScript Knowledge
1. Variables
2. Data types
3. Conditionals
4. Iteration
5. Functions

# JavaScript Functions
1. buttons
2. onclick
3. flipCard
4. unFlipCard
5. disableCard
5. checkMatch
6. resetBoard
7. shuffle
8. calculateScore
9. numAttempts

# Creating the Memory Game
Step 1 - <mark>Create a Repository and open in your code editor</mark>

Step 2 - <mark>Set up index.html defining:</mark>
1. language in html tag
2. set title with a title tag and link style sheet. This should all be under a head tag.
3. link your javascript file

Step 3 – <mark>Set up the Board in index.html</mark> Board HTML
1. set up the body with a section tag inside with class="memory-game"
2. indented from the section tag create a div tag with class="memory-card"
3. indented from the div tag add an image tag (img) for each front and back face of each memory card. make sure you have a class defining front or back, src attribute for your image with the correct path. 
1. container div called .memory-game
2. each memory card has a.back-face and a.front-face

Step 4 - <mark>Setting up the Board Style</mark> Board CSS
1. .memory-game container
    1. add a border property in the .memory-game container
    2. add width and height properties with "numberpx;"
    3. add a display property with "flex;"
    4. add a flex-wrap property with "wrap;" to correctly lay out the cards in the game board
    5. add a margin property set to auto in the .memory-game container
    add a position property set to relative
2. body container
    1. to center the board in the middle of the page, in a body container add display property with flex. 
    3. .memory-card container
    5. add a border property in the .memory-card container
    6. add height and width properties to the .memory-card container
    7. To align the front and back faces of the card, in the .front-face, .back-face container add a position property with value absolute so the element is positioned relative to the 
3. .memory-card:active (for the click affect)

add a transform scale 


Step 4 - <mark>Setting up the Memory Cards</mark>
- The set of cards will be wrapped in a section container element. 

Shuffled Cards 

Flipping Cards

Unflipping Cards

Disable Cards

Matched Cards

Reset Board

Lock Board 
    - avoid two sets of cards being turned at the same time, otherwise the flipping will fail

Step 10 – Add a Score and Number of Attempts

CSS 
- By setting display: flex to the body and margin: auto to the .memory-game container, it will be centered both vertically and horizontally.






