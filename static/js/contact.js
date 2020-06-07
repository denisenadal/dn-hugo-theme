// get the form elements defined in your form HTML above
var form = document.getElementById("my-form");
var button = document.getElementById("my-form-button");
var formStatus = document.getElementById("my-form-status");

function onRepSuccess() {
    button.removeAttribute("disabled");
}

function resetForm(e) {
    form.style.display = "block";
    formStatus.style.display = "none";
}

window.addEventListener("DOMContentLoaded", function () {
    function success() {
        form.reset();
        form.style.display = "none";
        formStatus.style.display = "block";
        formStatus.style.color = "#84d662";
        formStatus.innerHTML = 'Thanks! <button onClick="resetForm()" class="btn btn-primary float-right">Submit again?</button>';
    }

    function error() {
        formStatus.style.display = "block";
        formStatus.style.color = "#fe3f3f";
        formStatus.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event
    form.addEventListener("submit", function (ev) {
        formStatus.innerHTML = "";
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}