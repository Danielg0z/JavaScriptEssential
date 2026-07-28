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

let grocery1;
let grocery2;
let grocery3;

function calculateTotal(grocery1, grocery2, grocery3) {
    // the document.getElementById retrieves the user input from the HTML input field with the id 'grocery1' and converts it to a floating-point number using parseFloat.
    grocery1 = parseFloat(document.getElementById("grocery1").value);
    // the document.getElementById retrieves the user input from the HTML input field with the id 'grocery2' and converts it to a floating-point number using parseFloat.
    grocery2 = parseFloat(document.getElementById("grocery2").value);
    // the document.getElementById retrieves the user input from the HTML input field with the id 'grocery3' and converts it to a floating-point number using parseFloat.
    grocery3 = parseFloat(document.getElementById("grocery3").value);

    let total = grocery1 + grocery2 + grocery3;
    document.getElementById('total').innerText = `The total cost of groceries is : ${total}`;
    return total;
}



