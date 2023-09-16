function loginForm()
{
    let login = document.createElement('div')
    login.id = 'login_form'
    login.innerHTML = `<a href="login.html" id="sign_up">Sign up</a>`
    document.body.appendChild(login)    
    login.onclick = (e) => {
        document.body.removeChild(login)
    }
}