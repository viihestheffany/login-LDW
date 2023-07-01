document.getElementById("form-login").addEventListener("submit", function (event) {
    event.preventDefault();

    let usuario = document.getElementById("exampleInputEmail1").value;
    let password = document.getElementById("exampleInputPassword1").value;

    if (usuario === "viih@gmail.com" && password === "viih123") {
        document.getElementById('form-login').style.display = "none"
        document.getElementById('main-container-logado').style.display = "flex"
    } else if (usuario === "" && password === "") {
        document.getElementById("massage-error").innerHTML =
            "Por favor, preencha todos os campos";
    } else {
        document.getElementById("massage-error").innerHTML =
            "Usuário ou senha incorreto!";
        rememberPassword.classList.toggle("rememberActive")
    }
});