document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".toggle-info");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const extraInfo = button.nextElementSibling;
            if (extraInfo.style.display === "none" || extraInfo.style.display === "") {
                extraInfo.style.display = "block";
                button.textContent = "Hide Info";
            } else {
                extraInfo.style.display = "none";
                button.textContent = "Show More Info";
            }
        });
    });
});


