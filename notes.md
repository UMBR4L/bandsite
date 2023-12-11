For All Pages
    - all dynamic HTML should be added to DOM via DOM Methods for individual elements
            - avoid bulk-assigning stringified HTML using innerHTML
    - your styling will still be applied through your Sass files; do not use the JavaScript DOM style method

To-Do:
- get a comment section on the bio page using JavaScript
    - HTML:
        x add a div/section with a class to use as a container/parent element
        x add a Form 
    - JS:
        x create an array and store the 3 default comments in them
            x comments must have a: name, timestamp, comment text
        - must have an HTML Form with the following functionality
            x addEventListner on 'submit'
            x prevents the page from reloading when submitting a new comment
            - constructs a new comment object
            x pushes a new comment object to an array of comments
            x clears all comments from the page
            - re-renders to the page all comments from the comment array
            x clears the input fields after submitting a new comment
- create a shows page that displays the shows using DOM methods
    - HTML:
        x same header and footer
        x update hero image
        x add a header "shows"
        x add a div/section with a class to use as a container/parent element
    - JS:
        x SoundCloud song embed
        x create a list of shows
            x create an array with all the show data
                x Properties: Date, Venue, Location
        - add specific styling for when individual show items are hovered or clicked
            - on hover over a show item, the "hover state" style will be applied
                - use a pseudo-class in Sass
            - clicking on a show item will apply the "selected state" styling from the style guide to that item
                - this can be achieved by applying a modifier class using JavaScript and selecting it in Sass
                - this item will stay selected until another item is clicked



Bio Page - Create a Comments Section
    - below the gallery
    - comments should include their: name, avatar, comment, and a button to submit ("comment")
    - newest comments must be added to the top
    - 3 default comments in an array in JavaScript must be displayed when the page first loads
        - comments must have a: name, timestamp, comment text
    - must have a function that takes in one comment object as a parameter and displays it on the page using JavaScript DOM manipulation
    - must have an HTML Form with the following functionality
        - addEventListner on 'submit'
        - prevents the page from reloading when submitting a new comment
        - constructs a new comment object
        - pushes a new comment object to an array of comments
        - clears all comments from the page
        - re-renders to the page all comments from the comment array
        - clears the input fields after submitting a new comment

Create a Shows Page
    - same header and footer
    - a song that be played using SoundCloud as a resource
    - create a list of shows using JavaScript DOM manipulation / flexbox layout
        - have an array in JavaScript with all the show data and render the shows HTML dynamically using the array data
            - it's up to you to decide on which properties to create to represent all of the individual show data
            - there should be no need to have any shows content housed within your html file
                - just put a section with a class into the html
        - individual show items will have specific styling applied when hovered or clicked
            - when the cursor hovers over a show item, the "hover state" style from the style guide will be applied to that item
                - this can be achieved using a pseudo-class in Sass
            - clicking on a show item will apply the "selected state" styling from the style guide to that item
                - this can be achieved by applying a modifier class using JavaScript and selecting it in Sass
                -this item will stay selected until another item is clicked





// Get a list of songs on the page using JavaScript

HTML/CSS:
- create the HTML page, CSS files, JavaScript file
- create a div/section to use as a container/parent element
- create an HTML structure for each song item
- come up with some CSS styles that apply to the song item

JS:
- make a list of songs (array of objects): each has a title of the song, name of artist, duration, genre
- function to make the elements for each song