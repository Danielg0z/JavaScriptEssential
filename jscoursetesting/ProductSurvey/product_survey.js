function submitFeedback(){
    const username = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    /*
        The above code retrieves the values 
        using HTML input elements with the 
        specified IDs and stores them in variables.
    */
   const submitButton=document.getElementById('submitBtn');
   
   /*
        The following code updates the content of HTML elements with the specified IDs 
        to display the user's input values. 
   */
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    document.getElementById('userInfo').style.display = 'block';

   alert('Thank you for your feedback.')
}

    /*
        The below code retrieves the values 
        using HTML input elements with the 
        specified IDs and stores them in variables.
    */
   const submitButton = document.getElementById('submitBtn');
    submitButton.onclick = submitFeedback;


/*
    This code snippet adds an event listener to the entire
    document, listening for any keydown event. When the 
    event occurs, it checks if the pressed key is 'Enter'.
    If it is, it calls the function submitFeedback(), 
    executing the feedback submission functionality.
*/
   document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
   }
});

