/**
 * Created by NikolayNK on 11.2.2016 г..
 */
var validationButton = document.getElementById('validationButton');

validationButton.addEventListener('click', function(e) {
    var email = document.getElementById('email').value;
    var colorDiv = document.getElementById('colorDiv');
    colorDiv.innerHTML = email;
    if(validateEmail(email)) {
        colorDiv.style.backgroundColor = '#90EE90';
    } else {
        colorDiv.style.backgroundColor = '#FF0000';
    }
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
