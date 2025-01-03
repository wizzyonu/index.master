document.addEventListener("DOMContentLoaded", format);

function format(){
    const formMaster = document.querySelector('.format');
    const emailAdd = document.querySelector('#email');
    const errorCall = document.querySelector('#error');
    var passAdd = document.querySelector('#password');

   
    formMaster.addEventListener('submit', function(event) {
        event.preventDefault();
        const emailCall = emailAdd.value.trim();
        const passCall = passAdd.value.trim();


        errorCall.textContent = '';
        errorCall.style.display = 'none';


        if(!emailCall){
            errorCall.textContent = 'Email is required';
            errorCall.style.display = 'block';
            errorCall.style.color = 'red';
            return;
           
        }

        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailPattern.test(emailCall)){
            errorCall.textContent = 'Email is invalid';
            errorCall.style.display = 'block';
            errorCall.style.color = 'red';
            return;
        }


        if(!passCall){
            errorCall.textContent = 'Password is required';
            errorCall.style.display = 'block';
            errorCall.style.color = 'red';
            return;
           
        }

        if(passCall.length > 8){
            errorCall.textContent = 'Password should be 8 characters';
            errorCall.style.display = 'block';
            errorCall.style.color = 'red';
            return;
        }


        window.location.href = `peace.html?email=${encodeURIComponent(emailCall)}&password=${encodeURIComponent(passCall)}`;

    });


}

