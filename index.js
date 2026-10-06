//important stuff dont tuch!!!

emailjs.init({
    publicKey: "hAila9g5w7wogr6PD"
});

//API!!

let Name = ""

//sender 
const button = document.querySelector("#send");

button.onclick = () => {

    const email = document.querySelector("#email").value;
    const Input = document.querySelector("#input").value;

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => users.map((user) => user.name))
    .then((user) => {
        let i = Math.floor(Math.random() * user.length);
        Name = user[i];

        emailjs.send("Send-Email", "template_gu2lvgm", {
            to_email: email,
            name: Name,
            message: Input
        });
    })
    .then(() => console.log(`Email sent to ${email}`))
    .catch((error) => console.error(error));
};