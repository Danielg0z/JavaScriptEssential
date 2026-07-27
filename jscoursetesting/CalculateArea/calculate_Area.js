let length;
let width;

function calculateArea(length, width) {
    // the document.getElementById retrieves the user input from the HTML input field with the id 'length' and converts it to a floating-point number using parseFloat.
    length = parseFloat(document.getElementById('length').value);
    // the document.getElementById retrieves the user input from the HTML input field with the id 'width' and converts it to a floating-point number using parseFloat.
    width = parseFloat(document.getElementById('width').value);
    
    // updates the content of the HTML element with the id 'result' to display the calculated area of the rectangle.
    let area =  length * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
    return area;
}

