function validateForm() {
    var name = document.myForm.name.value;
    varpass = document.myForm.pass.value;

    if (name == "") {
        document.getElementById("numloc").innerHTML = "***Please Fill The User Name";
        return false;

    } else if (pass == "" || pass == null) {
        document.getElementById("numlock").innerHTML = "***Password Should Be Grater Than 6 Character";
        return false;

    } else if (pass.length < 6) {
        document.getElementById("numlock").innerHTML = "**Password length must be atleast 8 characters";
        return false;
    }

    if (pass.length > 15) {
        document.getElementById("numlock").innerHTML = "**Password length must not exceed 15 characters";
        return false;
    } else {
        return true;
    }
}

// **********************************************************************************************
// *                         To Save Data In Local Storage                                      *
// **********************************************************************************************
let name = localStorage.getItem('name') ? localStorage.getItem('name') : ''
console.log(name);
if (name != '') {
    alert('Please visit profile');
    window.location.href = "last.html";
}

function saveData() {
    let email, pass;

    email = document.getElementById("email").value;
    pass = document.getElementById("pass").value;


    // Array For Data Storage

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []

    if (user_records.some((v) => { return v.email == email && v.pass == pass })) {
        alert(email + "\n Welcome To The Journy");

        let current_user = user_records.filter((v) => { return v.email == email && v.pass == pass })[0]

        localStorage.setItem('name', current_user.name);
        localStorage.setItem('email', current_user.email);

        window.location.href = "./last.html";

    } else {
        alert('Password For ' + email + ' Is Wrong , Please Try Again');

    }
}