const buttonEmail = document.getElementById("button-Email")
const buttonLinkedln = document.getElementById("button-Linkedln")
const cardFooter = document.getElementsByClassName("card-footer")
buttonEmail.addEventListener("click", e => {
    const email = `angelmancilla0114@gmail.com`
    const subject = "Asunto del correo"
    window.location.href = `mailto:${email}?subject=${subject}`
})

buttonLinkedln.addEventListener("click", e => {
    window.open("https://www.linkedin.com/in/angel-mancilla-8bbaa024b/", "_blank")
})

Array.from(cardFooter).forEach(footer => {
    footer.addEventListener("click", e => {
        const selectedItem = e.target
        switch(selectedItem.id) {
            case 'icon-twitter':
                window.open("https://twitter.com/DevCaritaHapy", "_blank")
                break;
            case 'icon-facebook':
                window.open("https://m.facebook.com/profile.php?id=100060081411013&mibextid=ZbWKwL", "_blank")
                break;
            case 'icon-instagram':
                    console.log("HOLA INSTA")
                break;
            case 'icon-github':
                window.open("https://github.com/AngelMancilla", "_blank")
                break;
            default:
                alert("Error :(")
        }
    });
});