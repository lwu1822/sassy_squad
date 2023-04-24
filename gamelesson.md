<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js">
</script>
</head>


<h1>Creating a game using JavaScript</h1>



This is the same idea as what we have always done for our projects.
JavaScript is best for web-based and mobile games because it is generally easy to comprehend. 
- an interpreted scripting language so code does not need to be compiled
- instead, results are interpreted by a user’s command for example clicking and scrolling on the website. JavaScript can use that user input to perform an action accordingly.

<h1>Setting up</h1>

To have a UI (User Interface), you will need to use HTML. We can put our JS file as a script in the html by using script tags or linking a file. Script tags are fine for simple pages, but become confusing if you are doing complicated JS like a large app. 

**It looks like this**

<iframe src="editors/HTMLeditor1.html" width="80%" height="400vh"></iframe>

<img src="imagessass/javainhtml.png" width="550" height="350">

<h1>Where do you store the JavaScript Code?</h1>

1. You could have a separate JavaScript file full of your JavaScript code. The filename will end in .js
<img src="imagessass/jsfile.png" width="650" height="400">


    *Connect the JS file*: To point to your external JavaScript file, or connect the code to your HTML frontend, you could paste this *src Attribute* inside the body of the html. 

    <img src="/imagessass/jsfileinhtml.png" width="650" height="550">
    - This one is shown in line 38.

    <img src="/imagessass/importjsfile.png" width="550" height="350">

2. Alternatively, you could write all of your JavaScript code in your HTML page using a *Script container*.

    To refer to the code you can give id's to certain functions and then add the id tag inside of a *div container* or *button container* if the function is a button.


<h1>Where do you store the SASS Code?</h1>

1. Create a .scss file at the same root level as your index.html file, make sure the file name ends in .scss This will be your SASS file.

    *Connect the JS file*: To import the styling that you set up in that file, import a *link container* with "rel=stylesheet" and "href=filename.css". Make sure to close the link tag. 
    <img src="imagessass/importsass.png" width="800" height="300">
    - This one is shown in line 28.

<h1>Basic JavaScript Knowledge</h1>

1. Variables- declare JavaScript variables with var, let or const. If the value of the variable can change, like a total, use let. If the value is set, like prices, use const. Variables can hold any data type. 
2. Data types- there are 8 JS data types. 
    - String: a series of characters, written with single or double quotes
    - Number: can be integers or decimals. You can also have exponential notation for large/small numbers 
    - Bigint: used to store integer values that are too big to be represented by a normal JS number
    - Boolean: true or false, used in conditional testing
    - Undefined: a variable without a value, has the value undefined/empty values
    - Null: represents the intentional absence of any object value.
    - Symbol: used to represent unique values that can be used as identifiers/keys in objects. They are also used to create private properties and methods in classes.
    - Object: an unordered collection of key-value pairs. . Each key-value pair is called a property. 
        - object: written with curly braces {}, name:value pairs, ex. "const car = {type:"Fiat", model:"500", color:"white"};"
        - array: written with square brackets, separated by commas 
3. Conditionals: control behavior, decides whether or not pieces of code can run.
    - If: if a condition is true it is used to specify execution for a block of code.
    - Els:e if the same condition is false it specifies the execution for a block of code.
    - Else If: new test if the first condition is false.
4. Iteration: 
    - for loop: repeats until a specified condition evaluates to false
    - do...while: repeats until a specified condition evaluates to false
    - while statement: executes its statements as long as a specified condition evaluates to true
    - label: provides a statement with an identifier that lets you refer to it later in the code. ex. you can use a label to identify a loop, and then use the break or continue statements to indicate whether a program should interrupt the loop or continue its execution
    - break: used to terminate a loop, switch, or in conjunction with a labeled statement
    - continue: can be used to restart a while, do-while, for, or label statement
    - for...in: iterates a specified variable over all the enumerable properties of an object
    - for...of statement creates a loop Iterating over iterable objects, invoking a custom iteration hook with statements to be executed for the value of each distinct property
5. Functions: 
    - defining: define with function + functionName(parameter) { function code }.  It can be unnamed/anonymous can be defined based on a condition.
    - calling: simply put the function name with a parameter and semicolon, or a function can call itself (recursive)
6. const- We use const to declare variables whose value can be initialized only at the time of declaration. Const means that the identifier cannot be reassigned. 

<h1>JavaScript Functions/code in the Memory Game</h1>

1. buttons: The memory cards are buttons which are shown in buttons tags in HTML. It has a onClick attribute for the actual function to work.
2. onclick: occurs when the user clicks on an HTML element, usually a button, and executes the function
3. flipCard
4. unFlipCard
5. disableCard
5. checkMatch
6. resetBoard
7. shuffle
8. calculateScore
9. numAttempts

<h1>Creating the Memory Game</h1>
Step 1 - <mark>Create a Repository and open in your code editor</mark>

Step 2 - <mark>Set up index.html defining:</mark>
1. Set the language in html tag
2. Set title with a title tag and link style sheet. This should all be under a head tag.
3. In the head tag add a meta tag to define your metadata. 
4. Under that add a title tag with the title of the game. 
5. Link your style.scss file and then close the head tag. 

Step 3 – <mark>Set up the Board in index.html</mark> Board HTML
1. Set up the body with a section tag inside with class="memory-game"
2. Indented from the section tag create a div tag with class="memory-card"
3. Indented from the div tag add an image tag (img) for each front and back face of each memory card. make sure you have a class defining front or back, src attribute for your image with the correct path. Close off the section tag
4. Add a script tag linking the js file. Close the body and the html tag. 

Step 4 - <mark>Setting up the Board Style</mark> Board CSS
1. .memory-game container
    1. *optional*, Add a border property in the .memory-game container. It helps visualize your cards to set up heights, widths, and more
    2. Add width and height properties with "numberpx;"
    3. Add a display property with "flex;"
    4. Add a flex-wrap property with "wrap;" to correctly lay out the cards in the game board
    5. Add a margin property set to auto in the .memory-game container
2. body container
    1. To center the board in the middle of the page, in a body container add display property with flex. 
    2. Add a height property 
3. .memory-card container
    1. Add a border property with pixel and color details 
    2. Add height and width properties. 
    3. Add a margin property 
    4. Add a position property set to relative
    5. Add a transform property with a scale of 1. This shows a difference when you are choosing a certain card. 
    6. Add a transform-style property set to "preserve-3d" 
    7. Add a transition set to "transform .5s"
    8. Add a box-shadow 
4. .front-face and .back-face container
    1. To align the front and back faces of the card add a position property with value absolute 
    2. Add width and height properties 100%, to take up the whole container 
    3. Add a border-radius property 
    4. Add a background color 
    5. Add a padding 
    6. Add a position set to absolute 
    7. Add a backface-visibility set to hidden
5. .memory-card:active (for the click affect)
    1. Add a transform property with scale of (0.97)
    2. Add a transition property with "transform .2s"
6. .memory-card.flip
    1. transform: rotateY(180deg)


Step 5 - <mark>Card Flip in JavaScript</mark>
1. Make a list of all memory card elements, stored in a constant. 
2. Loop through the list, and attach an event listener which looks out for a click event. When the event occurs, is clicked, the function will occur. 
'''
babel 

'''
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






