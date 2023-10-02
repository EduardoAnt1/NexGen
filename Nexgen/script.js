function loginForm()
{
    let login = document.getElementById("login_form")   
    login.style.pointerEvents = 'all'
    login.style.opacity = '1'    
    
    setTimeout(() => {
        document.body.onclick = (e) =>
        {
            if(e.target != login && !login.contains(e.target) && e.target != document.getElementById("sign_in") && e.target != document.getElementById("sign_up"))
            {
                login.style.opacity = '0'        
                login.style.pointerEvents = 'none'
                document.body.onclick = null
            }
        }    
    }, 10)    
}

function switchForm(code)
{
    let log = document.querySelector('#form_log')
    let cad = document.querySelector('#form_cad')

    log.style.display = code ? '' : 'none'
    cad.style.display = code ? 'none' : ''
}