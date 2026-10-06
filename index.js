emailjs.init({
    publicKey: "hAila9g5w7wogr6PD"
});

const button = document.querySelector("#send");

button.onclick = () => {
    const email = document.querySelector("#email").value;

    emailjs.send("Send-Email", "template_gu2lvgm", {
        to_email: email
    })
    .then(() => {
        console.log("Email sent!");
    })
    .catch((error) => {
        console.error("Email failed:", error);
    });
};