document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = e.target.querySelector("input[type='text']").value.trim();
    const email = e.target.querySelector("input[type='email']").value.trim();
    const message = e.target.querySelector("textarea").value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }
    
    alert("Message sent successfully!");
    e.target.reset();
});

