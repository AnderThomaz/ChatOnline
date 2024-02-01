// login elementos

const login = document.querySelector(".login")
const loginForm = document.querySelector(".login_forms")
const loginInput = document.querySelector(".login_inpult")

const user = {id: "", name:"", color:""}

const handleSubmit = (event) => {
    event.preventDefault()

    user.id = crypto.randomUUID()

    user.name = loginInput.value

    console.log(user)
}

loginForm.addEventListener("submit", handleSubmit)