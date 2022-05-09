// For Validatation Of Form

function validateForm() {

    var name = document.myForm.name.value;
    var phone = document.myForm.phone.value;
    var email = document.myForm.email.value;
    var pass = document.myForm.pass.value;



    if (name == null || name == "") {
        document.getElementById("error").innerHTML = "***Please Fill The User Name";
        return false;

    } else if (phone == null || phone == "") {
        document.getElementById("erroro").innerHTML = "***Please Enter Your Phone Number.";
        return false;

    } else if (email == null || email == "") {
        document.getElementById("errort").innerHTML = "***Please Enter Your Email Address";
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



function saveData() {
    let name, phone, email, pass, gender, address;

    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    pass = document.getElementById("pass").value;
    gender = document.getElementById("gender").value;
    address = document.getElementById("address").value;

    // Array For Data Storage

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) || []

    if (user_records.some((v) => { return v.email == email })) {
        alert(email + " is already register.")

    } else {
        user_records.push({
            "name": name,
            "email": email,
            "phone": phone,
            "pass": pass,
            "gender": gender,
            "address": address

        })

        localStorage.setItem("users", JSON.stringify(user_records))
        alert(email + "Thanks for Registration. \n Try to login Now");
    }




}