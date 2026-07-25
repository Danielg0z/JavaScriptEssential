let count = 0;

function increaseCount() {
    count++; // increment by 1
    displayCount();
    checkCountValue();
}


// updates its content to reflect the current count value.
function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue () {
    if (count <= 10 && count > 0) {
        alert("Your instagram post is between 1 and 10 followers!")
    } else if (count === 10) {
        alert("Your instagram post has exactly 10 followers!")
        console.log("Your instagram post hit10 followers!")
    } else if (count === 20) {
        alert("Your instagram post has exactly 20 followers!")
        console.log("Your instagram post hit 20 followers!")

    }
}

function resetCount(){
    count = 0;
    displayCount();
    alert("Your instagram post has been reset to 0 followers!")
}



