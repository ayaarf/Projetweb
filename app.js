(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const nameInput = form.querySelector('input[placeholder="YOUR NAME"]');
        const emailInput = form.querySelector('input[placeholder="YOUR EMAIL"]');
        const subjectInput = form.querySelector('input[placeholder="ENTER SUBJECT"]');
        const messageInput = form.querySelector('textarea');

        if (!validateInput(nameInput) || !validateInput(emailInput) || !validateInput(subjectInput) || !validateInput(messageInput)) {
            alert('Please fill out all fields.');
        } else {
            // Your form submission logic goes here
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    function validateInput(input) {
        return input.value.trim() !== '';
    }
});
