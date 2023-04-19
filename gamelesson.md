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


    To point to your external JavaScript file, or connect the code to your HTML frontend, you could paste this *src Attribute* inside the body of the html. 

    <img src="/imagessass/jsfileinhtml.png" width="650" height="550">
    - This one is shown in line 38.

    <img src="/imagessass/importjsfile.png" width="550" height="350">

2. Alternatively, you could write all of your JavaScript code in your HTML page using a *Script Attribute*.

    To refer to the code you can give id's to certain functions and then add the id tag inside of a *div Attribute* or *button Attribute* if the function is a button.


# Where do you store the SASS Code?

1. Create a .scss file at the same root level as your index.html file, make sure the file name ends in .scss This will be your SASS file.

    To import the styling that you set up in that file, import a *link Attribute* with "rel=stylesheet" and "href=filename.css". Make sre to close the link attribute. 
    <img src="/imagessass/importsass.png" width="800" height="300">
    - This one is shown in line 28.






