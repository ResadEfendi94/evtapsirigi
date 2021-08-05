let mail = "resadefendizade@gmail.com";
let pasw = "admin123admin";

function Login() {
    let adminMail = document.getElementById("email").value;
    let passwordAdmin = document.getElementById("password").value;

    if (mail == adminMail && pasw == passwordAdmin) {
        alert("Login ve shifre dogrudur");
    } else if (adminMail == '' && passwordAdmin == '') {
        alert("Login ve shifre daxil edin");
    } else {
        alert("Login ve ya shifre yalnishdir");
    }

}