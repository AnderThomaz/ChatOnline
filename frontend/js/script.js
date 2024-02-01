// login elementos

const login = document.querySelector(".login")
const loginForm = login.querySelector(".login_forms")
const loginInput = login.querySelector(".login_inpult")


const handleSubmit = (event) => {
    event.preventDefault()
}

loginForm.addEventListener("submit", handleSubmit)