let length;
let width;

function calculateArea(){
 /*
    Gets an HTML elemnet by the ID 'length', after gettignt 
    the 'length' element, the .value is gets the value assisgned
    to that length element, for example if user enters 5, into the 
    input field for length, .value retrieves the string '5'.
 */

 length = parseFloat(document.getElementById('length').value);
 
 width = parseFloat(document.getElementById('width').value);

 let area = length * width;
 
 /* 
    .innerText = The area of the rectangle is: ${area};: Once the element is accessed, .innerText is used to modify the text content within that HTML element.
    The backticks and ${} notation allow for the inclusion of JavaScript variables within a string (using template literals). In this case, it sets the text content to display a message along 
*/
 document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;

}