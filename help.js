document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let mailto = `mailto:your@email.com?subject=Qwiz Help&body=Message: ${message}%0AFrom: ${email}`;

    window.location.href = mailto;
});