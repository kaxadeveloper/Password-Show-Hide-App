const toggle = document.querySelector(".toggle");
const input = document.querySelector("input");

toggle.addEventListener("click", () => {

    if (input.type === "password") {
        input.type = "text";

        // change icon to eye
        toggle.classList.remove("fa-eye-slash");
        toggle.classList.add("fa-eye");

    } else {
        input.type = "password";

        // change icon to eye-slash
        toggle.classList.remove("fa-eye");
        toggle.classList.add("fa-eye-slash");
    }

});