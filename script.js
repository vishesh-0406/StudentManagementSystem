function validate() {

    var f = document.forms["f"];

    var name = f.name.value;
    var email = f.email.value;
    var phone = f.phone.value;
    var college = f.college.value;
    var department = f.department.value;
    var event = f.event.value;

    // Name validation
    if (name.trim() == "") {
        alert("Enter your name");
        f.name.focus();
        return false;
    }

    // Email validation
    if (email == "" || !email.includes("@")) {
        alert("Enter a valid email");
        f.email.focus();
        return false;
    }

    // Phone validation
    if (phone.length != 10 || isNaN(phone)) {
        alert("Enter a valid 10-digit phone number");
        f.phone.focus();
        return false;
    }

    // Gender validation
    if (!f.gender.value) {
        alert("Select gender");
        return false;
    }

    // College validation
    if (college.trim() == "") {
        alert("Enter college name");
        f.college.focus();
        return false;
    }

    // Department validation
    if (department.trim() == "") {
        alert("Enter department");
        f.department.focus();
        return false;
    }

    // Year validation
    if (!f.year.value) {
        alert("Select year of study");
        return false;
    }

    // Event validation
    if (event == "") {
        alert("Select an event");
        return false;
    }

    alert("Registration Successful");

    document.getElementById("result").innerHTML =
        "Name: " + name + "<br>" +
        "Email: " + email + "<br>" +
        "Phone: " + phone + "<br>" +
        "Gender: " + f.gender.value + "<br>" +
        "College: " + college + "<br>" +
        "Department: " + department + "<br>" +
        "Year: " + f.year.value + "<br>" +
        "Event: " + event;

    return false;
}