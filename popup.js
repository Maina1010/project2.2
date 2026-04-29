const popup = document.getElementById("popupBox");
const laterBtn = document.getElementById("laterBtn");
const allowBtn = document.getElementById("allowBtn");

// Do this later
laterBtn.addEventListener("click", () => {
    popup.style.display = "none";
    localStorage.setItem("notificationChoice", "later");
});

// Allow notifications
allowBtn.addEventListener("click", () => {
    if ("Notification" in window) {
        Notification.requestPermission().then(permission => {

            if (permission === "granted") {
                console.log("Allowed ✅");
                localStorage.setItem("notificationChoice", "allowed");
            } else {
                console.log("Denied ❌");
            }

            popup.style.display = "none";
        });
    } else {
        alert("Notifications not supported");
        popup.style.display = "none";
    }
});

// Check previous choice
window.addEventListener("load", () => {
    const choice = localStorage.getItem("notificationChoice");

    if (choice === "allowed" || choice === "later") {
        popup.style.display = "none";
    }
});