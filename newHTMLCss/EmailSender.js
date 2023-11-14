const fullName = document.getElementById("fullName");
const title = document.getElementById("title");
const sender = document.getElementById("senderEmail");
const content = document.getElementById("content");

function senderEmail() {
    const emailData = {
        fullName: fullName.value,
        title: title.value,
        senderEmail: sender.value,
        content: content.value
    };

   console.log("Email Data:", emailData);
}
