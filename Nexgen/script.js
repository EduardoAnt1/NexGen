function loginForm()
{
    let login = document.getElementById("login_form")   
    login.style.opacity = '1'
    
    setTimeout(() => {
        document.body.onclick = (e) =>
        {
            if(e.target != login && !login.contains(e.target) && e.target != document.getElementById("sign_in"))
            {
                login.style.opacity = '0'
                document.body.onclick = null
            }
        }    
    }, 10)
}