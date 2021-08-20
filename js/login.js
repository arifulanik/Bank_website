document.getElementById('login-submit').addEventListener('click', function () {
    const mail = document.getElementById('user-email');
    console.log(mail.value);
    const pass = document.getElementById('user-password');
    console.log(pass.value);

    if (mail.value == 'sontan@gmail.com' && pass.value == "123") {
        window.location.href = 'banking.html'
    }
    else console.log("invalid");
});

