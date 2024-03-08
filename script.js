alert("Olá! Bem-vindo (a) a Valber´s!")

const idade = parseFloat(prompt("Por favor, informe-nos a sua idade:"))

if(idade >= 18) {
    alert("Você é maior de idade.")
} else if(idade >= 13) {
    alert("Você é menor de idade.")
} else if (idade >= 0) {
    alert("Você é criança.")
}