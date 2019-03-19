// Modify documents after they have finsihed loading - add new content to a page, change the color of an eleent to reflect a changing state, or remove an element the user does not need anymore;

// Interact with your users- wether ticking a box, commenting on a blog post, or submutting a tax form, your users need to be able to communicate with you,  and JS allows them to do so.

// Send and recieve data to and from external API's- harness the power of the thousand of usefull APIs that already exist or plug your frontend app into your own custom backend.


// Get access to the dom

// document.getElementsByTagName()
// document.getElementsByClassName()
// document.querySelector()
// document.getElementById()


function changeColor(newColor) {
    let btn = document.getElementById('text');
    btn.style.color = newColor;
}

// function textShown() {
//     document.getElementById('test').innerHTML = "I made text appear using JS!";
// }

function textDisplay() {
    let test = document.getElementById('test');
    test.style.display = 'grid';
    test.style.color = 'white';
    test.style.opacity = '.6';
    test.style.padding = '2em';
    test.style.width = 'fit-content';
    test.style.height = 'fit-content';
    test.style.background = 'brown';
}

