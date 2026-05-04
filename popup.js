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
const input = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");

input.addEventListener("input", () => {
    const value = input.value.toLowerCase();
    suggestions.innerHTML = "";

    if (value === "") return;

    const filtered = data.filter(item =>
        item.name.toLowerCase().includes(value)
    );

    if (filtered.length === 0) {
        suggestions.innerHTML = "<div class='suggestion-item'>No Result Found</div>";
        return;
    }

    filtered.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("suggestion-item");

        let text = item.name.replace(
            new RegExp(value, "gi"),
            match => `<b>${match}</b>`
        );

        div.innerHTML = text;

        div.onclick = () => {
            window.location.href = item.link;
        };

        suggestions.appendChild(div);
    });
});

/* click outside close */
document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-wrapper")) {
        suggestions.innerHTML = "";
    }
});