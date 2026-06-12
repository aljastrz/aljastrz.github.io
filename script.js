// ---- Copy-email button ----
// When the "Email me" button is clicked, copy the address to the clipboard
// and briefly show "Copied!". This works for everyone, even visitors with no
// mail app set up (the mailto link still works for those who do).

// 1. Find the button by its id.
const emailButton = document.getElementById("copyEmail");

// 2. If it exists, listen for clicks.
if (emailButton) {
  emailButton.addEventListener("click", function (event) {
    // stop the mailto from navigating, so we stay on the page and just copy
    event.preventDefault();

    const email = "geoint.aleksandra@gmail.com";

    // copy to the clipboard
    navigator.clipboard.writeText(email);

    // remember the original label, then show feedback for 1.5 seconds
    const originalText = emailButton.textContent;
    emailButton.textContent = "Copied!";

    setTimeout(function () {
      emailButton.textContent = originalText;
    }, 1500);
  });
}
